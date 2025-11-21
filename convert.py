
import re

def convert_html_to_jsx(html_content):
    # Replace class with className
    content = html_content.replace('class=', 'className=')
    
    # Replace HTML comments with JSX comments
    content = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', content, flags=re.DOTALL)
    
    # Close self-closing tags
    # List of void elements
    void_elements = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']
    for tag in void_elements:
        # Regex to find unclosed void tags. 
        # This is a simple approximation. It looks for <tag ... > where ... doesn't contain /
        # It's tricky with regex, but for this file it might be enough.
        # A better approach for specific tags like <br> and <img ...>:
        content = re.sub(f'<{tag}([^>]*)(?<!/)>', f'<{tag}\\1 />', content)

    # Fix style attributes (simple case: style="display: none" -> style={{display: 'none'}})
    # This is complex to do fully with regex, but we can try to catch common ones if any.
    # The provided file doesn't seem to have inline styles, mostly classes.
    
    # Fix SVG attributes
    replacements = {
        'stroke-width': 'strokeWidth',
        'stroke-linecap': 'strokeLinecap',
        'stroke-linejoin': 'strokeLinejoin',
        'fill-rule': 'fillRule',
        'clip-rule': 'clipRule',
        'stroke-opacity': 'strokeOpacity',
        'stop-color': 'stopColor',
        'stop-opacity': 'stopOpacity',
        'fill-opacity': 'fillOpacity'
    }
    for k, v in replacements.items():
        content = content.replace(k, v)

    # Fix image paths
    content = content.replace('src="images/', 'src="/images/')

    return content

def fix_duplicate_ids(content):
    # Find the Commercial Services section
    start_marker = 'Commercial Services'
    start_idx = content.find(start_marker)
    if start_idx == -1:
        return content
    
    # We want to replace IDs only after this marker
    # The IDs are like id="tab-residential", data-tab-target="#content-residential", etc.
    
    # Split content
    pre_content = content[:start_idx]
    post_content = content[start_idx:]
    
    # Replace in post_content
    post_content = post_content.replace('id="tab-', 'id="tab-comm-')
    post_content = post_content.replace('data-tab-target="#content-', 'data-tab-target="#content-comm-')
    post_content = post_content.replace('id="content-', 'id="content-comm-')
    post_content = post_content.replace('aria-controls="content-', 'aria-controls="content-comm-')
    
    return pre_content + post_content

def main():
    with open('_legacy_backup/src/index.html', 'r') as f:
        content = f.read()
    
    # Remove DOCTYPE and html/body tags for the component
    # We will extract the body content
    body_match = re.search(r'<body[^>]*>(.*)</body>', content, re.DOTALL)
    if body_match:
        content = body_match.group(1)
    
    content = convert_html_to_jsx(content)
    content = fix_duplicate_ids(content)
    
    # Wrap in a React component
    component = f"""
'use client';

import React, {{ useState, useEffect }} from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {{
  useEffect(() => {{
    // Menu scroll logic
    const onScroll = () => {{
      const sections = document.querySelectorAll('.menu-scroll');
      const scrollPos = window.scrollY || document.documentElement.scrollTop;

      sections.forEach((currLink) => {{
        const val = currLink.getAttribute('href');
        if (val && val.startsWith('#')) {{
            const refElement = document.querySelector(val);
            if (refElement) {{
                const scrollTopMinus = scrollPos + 73;
                if (
                    refElement.offsetTop <= scrollTopMinus &&
                    refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
                ) {{
                    document.querySelector('.menu-scroll.active')?.classList.remove('active');
                    currLink.classList.add('active');
                }} else {{
                    currLink.classList.remove('active');
                }}
            }}
        }}
      }});
    }};

    window.addEventListener('scroll', onScroll);
    
    // Tab logic
    const handleTabClick = (e) => {{
        const button = e.currentTarget;
        const targetId = button.getAttribute('data-tab-target');
        const container = button.closest('.container'); // Scope to container to avoid conflicts? 
        // Actually the original code used document.querySelectorAll, but we have unique IDs now.
        
        // Find the parent list to deactivate siblings
        const parentUl = button.closest('ul');
        const siblingButtons = parentUl.querySelectorAll('.tab-button-vertical');
        
        // Inactive/Active classes
        const inactiveClasses = ['border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:font-bold'];
        const activeClasses = ['font-bold', 'text-blue-600', 'border-blue-600', 'active-tab-style']; // Fixed color from green to blue based on HTML
        
        siblingButtons.forEach(btn => {{
            btn.classList.remove(...activeClasses);
            btn.classList.add(...inactiveClasses);
            btn.setAttribute('aria-selected', 'false');
        }});
        
        button.classList.remove(...inactiveClasses);
        button.classList.add(...activeClasses);
        button.setAttribute('aria-selected', 'true');
        
        // Hide all content in this section
        // We need to find the content container associated with these tabs.
        // The structure is:
        // div.flex
        //   div.container > ul (tabs)
        //   div#vertical-tabs-content (content)
        
        const contentContainer = parentUl.closest('.flex').querySelector('#vertical-tabs-content');
        const allContents = contentContainer.querySelectorAll('.tab-content-vertical');
        
        allContents.forEach(content => {{
            content.classList.add('hidden');
        }});
        
        const targetContent = document.querySelector(targetId);
        if (targetContent) {{
            targetContent.classList.remove('hidden');
        }}
    }};

    const tabButtons = document.querySelectorAll('.tab-button-vertical');
    tabButtons.forEach(btn => btn.addEventListener('click', handleTabClick));

    return () => {{
        window.removeEventListener('scroll', onScroll);
        tabButtons.forEach(btn => btn.removeEventListener('click', handleTabClick));
    }};
  }}, []);

  return (
    <main>
      {content}
    </main>
  );
}}
"""
    
    with open('src/app/page.tsx', 'w') as f:
        f.write(component)

if __name__ == '__main__':
    main()

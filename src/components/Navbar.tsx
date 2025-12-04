"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
export function Navbar() {
    const session = useSession().data;
    return (
        <header className="header bg-white fixed top-0 left-0 z-40 w-full flex items-center transition">
        <div className="container">
          <div className="flex mx-[-16px] items-center justify-between relative">
            <div className="px-4 w-60 max-w-full">
              <a href="index.html" className="header-logo w-full block py-6 lg:py-8">
                <img src="/images/logo/flogo.png" alt="logo" className="w-full" width="123" height="16" />
              </a>
            </div>
            <div className="flex px-4 justify-between items-center w-full">
              <div>
                <button
                  id="navbarToggler"
                  name="navbarToggler"
                  aria-label="navbarToggler"
                  className="block absolute right-4 top-1/2 translate-y-[-50%] lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
                >
                  <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark"></span>
                  <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark"></span>
                  <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark"></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className="absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full hidden lg:block lg:static lg:shadow-none mb-20"
                >
                  <ul className="blcok lg:flex">
                    <li className="relative group">
                      <a href="#home" className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0"> Home </a>
                    </li>
                    <li className="relative group">
                      <a href="#about" className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"> About </a>
                    </li>
                    <li className="relative group">
                      <a href="#services" className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"> Services </a>
                    </li>
                    <li className="relative group">
                      <a href="#pricing" className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"> Pricing </a>
                    </li>
                    <li className="relative group">
                      <a href="#contact" className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"> Contact </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="sm:flex justify-end hidden pr-16 lg:pr-0 items-center gap-4">
                {session ? (
                  <>
                    <span className="text-black font-medium">Hi, {session.user?.name}</span>
                    <button
                      onClick={() => signOut()}
                      className="text-base font-bold text-white bg-red-500 rounded-full py-3 px-8 md:px-9 lg:px-8 xl:px-9 hover:shadow-signUp hover:bg-red-600 transition ease-in-out duration-300"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link href="/auth/login">
                  <button
                    className="text-base font-bold text-white bg-primary rounded-full py-3 px-8 md:px-9 lg:px-8 xl:px-9 hover:shadow-signUp hover:bg-primary/90 transition ease-in-out duration-300"
                  >
                    Login
                  </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
    }
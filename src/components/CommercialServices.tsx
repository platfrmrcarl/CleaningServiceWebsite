"use client";

import { useState } from "react";

export default function CommercialServices() {
    const [activeTabComm, setActiveTabComm] = useState<string>("content-comm-residential");

    const tabButtonClassComm = (tabId: string) =>
        `tab-button-vertical inline-block w-full text-left p-4 font-medium text-2xl ${
            activeTabComm === tabId ? "text-green-600 font-bold" : "text-gray-500"
        } border-0 hover:text-green-600 font-bold`;

    return (
       
        <><div className="container mx-auto text-center">
            <h2 className="font-bold text-blue-600 text-3xl sm:text-4xl md:text-[45px] mb-5">Commercial Services</h2>
        </div><div className=" mx-auto bg-white shadow px-6 py-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="w-full md:w-1/3">
                        <ul className="flex flex-col space-y-3" id="vertical-tabs-tab-comm" role="tablist">
                            <li role="presentation">
                                <button
                                    className={tabButtonClassComm("content-comm-residential")}
                                    id="tab-comm-residential"
                                    data-tab-target="#content-comm-residential"
                                    type="button"
                                    role="tab"
                                    aria-controls="content-comm-residential"
                                    aria-selected={activeTabComm === "content-comm-residential"}
                                    onClick={() => setActiveTabComm("content-comm-residential")}
                                >
                                    Basic Clean
                                </button>
                            </li>
                            <li role="presentation">
                                <button
                                    className={tabButtonClassComm("content-comm-movein")}
                                    id="tab-comm-movein"
                                    data-tab-target="#content-comm-movein"
                                    type="button"
                                    role="tab"
                                    aria-controls="content-comm-movein"
                                    aria-selected={activeTabComm === "content-comm-movein"}
                                    onClick={() => setActiveTabComm("content-comm-movein")}
                                >
                                    Deep Clean
                                </button>
                            </li>
                            <li role="presentation">
                                <button
                                    className={tabButtonClassComm("content-comm-postconstruction")}
                                    id="tab-comm-postconstruction"
                                    data-tab-target="#content-comm-postconstruction"
                                    type="button"
                                    role="tab"
                                    aria-controls="content-comm-postconstruction"
                                    aria-selected={activeTabComm === "content-comm-postconstruction"}
                                    onClick={() => setActiveTabComm("content-comm-postconstruction")}
                                >
                                    Move In/Move Out
                                </button>
                            </li>
                            <li role="presentation">
                                <button
                                    className={tabButtonClassComm("content-comm-rentalproperty")}
                                    id="tab-comm-rentalproperty"
                                    data-tab-target="#content-comm-rentalproperty"
                                    type="button"
                                    role="tab"
                                    aria-controls="content-comm-rentalproperty"
                                    aria-selected={activeTabComm === "content-comm-rentalproperty"}
                                    onClick={() => setActiveTabComm("content-comm-rentalproperty")}
                                >
                                    One-Time Cleaning
                                </button>
                            </li>
                            <li role="presentation">
                                <button
                                    className={tabButtonClassComm("content-comm-linenservices")}
                                    id="tab-comm-linenservices"
                                    data-tab-target="#content-comm-linenservices"
                                    type="button"
                                    role="tab"
                                    aria-controls="content-comm-linenservices"
                                    aria-selected={activeTabComm === "content-comm-linenservices"}
                                    onClick={() => setActiveTabComm("content-comm-linenservices")}
                                >
                                    Custom Cleaning
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div id="vertical-tabs-content-comm" className="w-full md:w-2/3 p-4 md:pt-0 tab-content-container flex justify-center">
                        {/* Basic Clean*/}
                        <div
                            className={`tab-content-vertical ${activeTabComm === "content-comm-residential" ? "" : "hidden"}`}
                            id="content-comm-residential"
                            role="tabpanel"
                            aria-labelledby="tab-comm-residential"
                        >
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src="/images/services/0.png" alt="Sunset in the mountains" />
                                <div className="px-6 py-4 bg-black">
                                    <p className="text-white bg-black text-base">
                                        Restrooms, floors, surfaces, and trash—ideal for daily or weekly maintenance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Deep Clean*/}
                        <div
                            className={`tab-content-vertical ${activeTabComm === "content-comm-movein" ? "" : "hidden"}`}
                            id="content-comm-movein"
                            role="tabpanel"
                            aria-labelledby="tab-comm-movein"
                        >
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src="/images/services/1.png" alt="Sunset in the mountains" />
                                <div className="px-6 py-4 bg-black">
                                    <p className="text-white bg-black text-base">
                                        Includes all Basic services, plus trim, blinds, windows, and furniture edges—great for quarterly or seasonal refreshes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Move In/Move Out Clean*/}
                        <div
                            className={`tab-content-vertical ${activeTabComm === "content-comm-postconstruction" ? "" : "hidden"}`}
                            id="content-comm-postconstruction"
                            role="tabpanel"
                            aria-labelledby="tab-comm-postconstruction"
                        >
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src="/images/services/2.png" alt="Sunset in the mountains" />
                                <div className="px-6 py-4 bg-black">
                                    <p className="text-white bg-black text-base">
                                        Preparing or closing a commercial space? We’ll handle the full deep clean to ensure a smooth transition.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*One-Time Cleaning*/}
                        <div
                            className={`tab-content-vertical ${activeTabComm === "content-comm-rentalproperty" ? "" : "hidden"}`}
                            id="content-comm-rentalproperty"
                            role="tabpanel"
                            aria-labelledby="tab-comm-rentalproperty"
                        >
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src="/images/services/3.png" alt="Sunset in the mountains" />
                                <div className="px-6 py-4 bg-black">
                                    <p className="text-white bg-black text-base">
                                        Hosting an event or recovering from one? We’ll get your space back to business-ready.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`tab-content-vertical ${activeTabComm === "content-comm-linenservices" ? "" : "hidden"}`}
                            id="content-comm-linenservices"
                            role="tabpanel"
                            aria-labelledby="tab-comm-linenservices"
                        >
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src="/images/services/4.png" alt="Sunset in the mountains" />
                                <div className="px-6 py-4 bg-black">
                                    <p className="text-white bg-black text-base">
                                        Need something specific? We’ll provide a tailored estimate and plan that fits your business.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div></>

    );
}
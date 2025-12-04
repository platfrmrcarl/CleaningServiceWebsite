"use client";

import { useState } from "react";

export default function ResidentialServices() {
    const [activeTab, setActiveTab] = useState<string>("content-residential");

    const tabButtonClass = (tabId: string) =>
        `tab-button-vertical inline-block w-full text-left p-3 font-medium text-2xl ${
            activeTab === tabId ? "text-green-600 font-bold" : "text-gray-500"
        } border-0 hover:text-green-600 font-bold`;

    return (
        <><div className="container mx-auto text-center">
            <h2 className="font-bold text-blue-600 text-3xl sm:text-4xl md:text-[45px] mb-5">Residential Services</h2>
        </div><div className=" mx-auto bg-white shadow px-6 py-8 ">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="w-full md:w-1/3">
                        <ul className="flex flex-col space-y-3 text-xl font-bold" id="vertical-tabs-tab" role="tablist">
                            <li role="presentation">
                                <button
                                    className={tabButtonClass("content-residential")}
                                    id="tab-residential"
                                    data-tab-target="#content-residential"
                                    type="button"
                                    role="tab"
                                    aria-controls="content-residential"
                                    aria-selected={activeTab === "content-residential"}
                                    onClick={() => setActiveTab("content-residential")}
                                >
                                    Basic Clean
                                </button>
                            </li>
                            <li role="presentation">
                                <button
                                    className={tabButtonClass("content-movein")}
                                    id="tab-movein"
                                    data-tab-target="#content-movein"
                                    type="button"
                                    role="tab"
                                    aria-controls="content-movein"
                                    aria-selected={activeTab === "content-movein"}
                                    onClick={() => setActiveTab("content-movein")}
                                >
                                    Deep Clean
                                </button>
                            </li>
                            <li role="presentation">
                                <button
                                    className={tabButtonClass("content-postconstruction")}
                                    id="tab-postconstruction"
                                    data-tab-target="#content-postconstruction"
                                    type="button"
                                    role="tab"
                                    aria-controls="content-postconstruction"
                                    aria-selected={activeTab === "content-postconstruction"}
                                    onClick={() => setActiveTab("content-postconstruction")}
                                >
                                    Move In/Move Out
                                </button>
                            </li>
                            <li role="presentation">
                                <button
                                    className={tabButtonClass("content-rentalproperty")}
                                    id="tab-rentalproperty"
                                    data-tab-target="#content-rentalproperty"
                                    type="button"
                                    role="tab"
                                    aria-controls="content-rentalproperty"
                                    aria-selected={activeTab === "content-rentalproperty"}
                                    onClick={() => setActiveTab("content-rentalproperty")}
                                >
                                    One-Time Cleaning
                                </button>
                            </li>
                            <li role="presentation">
                                <button
                                    className={tabButtonClass("content-linenservices")}
                                    id="tab-linenservices"
                                    data-tab-target="#content-linenservices"
                                    type="button"
                                    role="tab"
                                    aria-controls="content-linenservices"
                                    aria-selected={activeTab === "content-linenservices"}
                                    onClick={() => setActiveTab("content-linenservices")}
                                >
                                    Custom Cleaning
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div id="vertical-tabs-content" className="w-full md:w-2/3 p-3 md:pt-0 tab-content-container flex justify-center">
                        {/* Residential Tab Contents */}
                        <div
                            className={`tab-content-vertical ${activeTab === "content-residential" ? "" : "hidden"}`}
                            id="content-residential"
                            role="tabpanel"
                            aria-labelledby="tab-residential"
                        >
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src="/images/services/0.png" alt="Sunset in the mountains" />
                                <div className="px-6 py-4 bg-black">
                                    <p className="text-white bg-black text-base">
                                        Bathrooms, floors, tops of furniture, and trash—perfect for regular upkeep.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`tab-content-vertical ${activeTab === "content-movein" ? "" : "hidden"}`}
                            id="content-movein"
                            role="tabpanel"
                            aria-labelledby="tab-movein"
                        >
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src="/images/services/1.png" alt="Sunset in the mountains" />
                                <div className="px-6 py-4 bg-black">
                                    <p className="text-white bg-black text-base">
                                        Includes everything in Basic, plus trim, blinds, windows, and furniture edges. Ideal for seasonal resets or special occasions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`tab-content-vertical ${activeTab === "content-postconstruction" ? "" : "hidden"}`}
                            id="content-postconstruction"
                            role="tabpanel"
                            aria-labelledby="tab-postconstruction"
                        >
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src="/images/services/2.png" alt="Sunset in the mountains" />
                                <div className="px-6 py-4 bg-black">
                                    <p className="text-white bg-black text-base">
                                        A full deep clean to prepare your home for new beginnings—whether you're arriving or leaving.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`tab-content-vertical ${activeTab === "content-rentalproperty" ? "" : "hidden"}`}
                            id="content-rentalproperty"
                            role="tabpanel"
                            aria-labelledby="tab-rentalproperty"
                        >
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src="/images/services/3.png" alt="Sunset in the mountains" />
                                <div className="px-6 py-4 bg-black">
                                    <p className="text-white bg-black text-base">
                                        No strings attached. Just a single, thorough clean when you need it most.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`tab-content-vertical ${activeTab === "content-linenservices" ? "" : "hidden"}`}
                            id="content-linenservices"
                            role="tabpanel"
                            aria-labelledby="tab-linenservices"
                        >
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src="/images/services/4.png" alt="Sunset in the mountains" />
                                <div className="px-6 py-4 bg-black">
                                    <p className="text-white bg-black text-base">
                                        Have something unique in mind? Let’s talk. We’ll build a plan and estimate just for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div></>
    );
}
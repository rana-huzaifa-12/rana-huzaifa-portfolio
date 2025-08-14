import React from "react";
import { Link } from "react-router-dom";
import { FaFolderOpen } from "react-icons/fa";

const Home3 = () => {
    return (
        <section className="bg-white text-gray-900 font-sans md:py-8">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">

                {/* Top Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
                    <div className="flex items-center space-x-2 justify-center md:justify-start w-full md:w-auto">
                        <FaFolderOpen className="text-green-400 text-xl md:text-2xl" />
                        <span className="text-gray-700 font-medium uppercase tracking-wide md:text-lg">
                            Projects
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <Link
                            to="/projects"
                            className="relative inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm md:text-base font-semibold text-white bg-gray-900
                            overflow-hidden before:absolute before:inset-0 before:bg-green-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-600 before:rounded-4xl
                            hover:before:scale-x-100 hover:text-gray-900 transition-colors duration-300"
                        >
                            <span className="relative z-10">All Projects</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="relative z-10 h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-4xl font-extrabold leading-tight mb-10 max-w-4xl text-center md:text-left">
                    My Featured <span className="text-green-400">Portfolio</span>
                </h2>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Project Card 1 */}
                    <Link to="/projects">
                        <article className="border border-green-400 shadow-xl shadow-gray-300 rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
                            <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-blue-50 to-white">
                                <img
                                    src="/pmss.png"
                                    alt="Pakistan Mart"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/93ad8567-297d-4d32-8fb7-39cbeb48591a.png";
                                    }}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="p-4 flex justify-between items-center">
                                <span className="text-sm text-gray-600">Pakistan Mart</span>
                                <div className="h-8 w-8 flex items-center justify-center border border-green-400 rounded-full text-green-400 transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </article>
                    </Link>

                    {/* Project Card 2 */}
                    <Link to="/projects">
                        <article className="border border-green-400 shadow-xl shadow-gray-300 rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
                            <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-gray-50 to-white">
                                <img
                                    src="/huzaifa-builds.png"
                                    alt="Education platform UI"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://placehold.co/700x525?text=Image+Not+Available";
                                    }}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="p-4 flex justify-between items-center">
                                <span className="text-sm text-gray-600">Huzaifa Builds</span>
                                <div className="h-8 w-8 flex items-center justify-center border border-green-400 rounded-full text-green-400 transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </article>
                    </Link>
                </div>

                {/* Mobile-only All Projects Button */}
                <div className="flex justify-center mt-8 md:hidden">
                    <Link
                        to="/projects"
                        className="relative inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold text-white bg-gray-900
                        overflow-hidden before:absolute before:inset-0 before:bg-green-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-600 before:rounded-4xl
                        hover:before:scale-x-100 hover:text-gray-900 transition-colors duration-300"
                    >
                        <span className="relative z-10">All Projects</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10 h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home3;

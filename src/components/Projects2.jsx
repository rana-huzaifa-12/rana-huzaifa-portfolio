import React from "react";
import { FaFolderOpen } from "react-icons/fa";

const projectData = [
    {
        title: "Pakistan Mart",
        description: "A MERN Based Shopping Store For Buiness.",
        image: "/pmss.png",
        fallback: "https://placehold.co/700x525?text=Image+Not+Available",
        url: "https://www.pakistanmart.store/",

    },

    {
        title: "Huzaifa Builds",
        description: "A construction project platform with a sleek UI.",
        image: "/huzaifa-builds.png",
        fallback: "https://placehold.co/700x525?text=Image+Not+Available",
        url: "https://huzaifa-builds.netlify.app",
    },
    {
        title: "Construct Mate",
        description: "A modern construction company site featuring services, counters, and projects.",
        image: "/construct-mate.png",
        fallback: "https://placehold.co/700x525?text=Gym+App",
        url: "https://constructmate.netlify.app",
    },
    {
        title: "Quick Bite",
        description: "A responsive food delivery web app with a clean and intuitive design.",
        image: "/quick-bite.png",
        fallback: "https://placehold.co/700x525?text=Weather+App",
        url: "https://quick-bite-126.netlify.app/",
    },
    {
        title: "Go Live",
        description: "A modern web app for real-time chatting and live streaming.",
        image: "/golive2.png",
        fallback:
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/93ad8567-297d-4d32-8fb7-39cbeb48591a.png",
        url: "https://huzaifagolive.netlify.app",
    }
];

const Projects2 = () => {
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
                </div>

                {/* Heading */}
                <h2 className="text-4xl font-extrabold leading-tight mb-10 max-w-4xl text-center md:text-left">
                    My Featured <span className="text-green-400">Portfolio</span>
                </h2>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projectData.map((project, idx) => (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={idx}
                        >
                            <article className="group border border-green-400 shadow-xl shadow-gray-300 rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
                                <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-gray-50 to-white">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = project.fallback;
                                        }}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-semibold text-gray-800">
                                            {project.title}
                                        </span>
                                        <div className="h-8 w-8 flex items-center justify-center border border-green-400 rounded-full text-green-400 transition-all duration-300 group-hover:bg-green-400 group-hover:text-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                className="h-4 w-4"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">{project.description}</p>
                                </div>
                            </article>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects2;

import React from "react";
import { Link } from "react-router-dom";

const Home2 = (props) => {
    return (
        <section className="bg-white font-sans antialiased">
            <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-14 flex flex-col-reverse lg:flex-row items-center gap-10">
                {/* Left Text Content */}
                <section className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="flex items-center gap-2 mb-3">
                        <svg
                            className="w-5 h-5 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364 7.364-2.121-2.121M7.757 7.757 5.636 5.636m12.728 0-2.121 2.121M7.757 16.243l-2.121 2.121"
                            />
                        </svg>
                        <p className="text-sm font-medium text-gray-900 select-none">{props.heading}</p>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
                        Why I'm Passionate About
                        <span className="text-green-400"> MERN Stack Development</span>
                    </h1>

                    {/* Description */}
                    <p className="max-w-xl text-gray-600 mb-10">
                        I'm currently working as a Front-End Developer, crafting responsive and interactive interfaces using tools like React, Tailwind CSS, and Swiper.js. But I'm also an aspiring MERN Stack Developer because I want to go beyond the UI — to build full-stack applications that solve real-world problems end-to-end. From MongoDB and Express to React and Node.js, I'm passionate about creating scalable, efficient, and modern web solutions.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-12">
                        <div className="flex flex-col items-center lg:items-start">
                            <span className="text-4xl font-extrabold text-black">
                                10<span className="text-3xl">+</span>
                            </span>
                            <span className="font-semibold text-sm mt-1">
                                Projects<br />Completed
                            </span>
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                            <span className="text-4xl font-extrabold text-black">
                                09<span className="text-3xl">+</span>
                            </span>
                            <span className="font-semibold text-sm mt-1">
                                Tech Stack<br />Mastered
                            </span>
                        </div>
                    </div>

                    {/* CTA & Contact */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                        <Link
                            to="/about"
                            className="inline-flex items-center justify-center bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300"
                        >
                            More About Me
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-2 w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>

                        {/* Phone Info */}
                        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                            <div className="rounded-full border border-gray-300 p-3 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-green-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 5h2l3.6 7.59-1.35 2.44a11.054 11.054 0 005.44 5.43l2.43-1.35L19 19v2a1 1 0 01-1 1 16 16 0 01-16-16 1 1 0 011-1z"
                                    />
                                </svg>
                            </div>
                            <div className="text-sm leading-tight text-center sm:text-left">
                                <p className="text-gray-500 font-medium select-none">Phone</p>
                                <a
                                    href="tel:+923245898647"
                                    className="font-semibold text-black select-text hover:text-green-400 transition"
                                >
                                    +92 3245898647
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Right Image */}
                <section className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <div className="relative max-w-[320px] lg:max-w-[400px] transition-transform duration-500 hover:scale-105 hover:shadow-xl rounded-xl border">
                        <img
                            src={props.imgsrc}
                            alt="Rana Huzaifa"
                            className="relative rounded-xl shadow-lg shadow-gray-300 object-cover w-full h-auto"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://via.placeholder.com/400x500?text=Image+Unavailable";
                            }}
                        />
                    </div>
                </section>
            </main>
        </section>
    );
};

export default Home2;

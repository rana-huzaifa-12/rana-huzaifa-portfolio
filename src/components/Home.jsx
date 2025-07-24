import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-gradient-to-r from-white via-green-100/40 to-sky-200/90 min-h-screen flex items-center justify-center px-4 sm:px-6 py-10 relative">
            <main className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                {/* Left Content (Text) */}
                <div className="w-full md:w-1/2 text-center md:text-left relative flex flex-col items-center md:items-start">
                    {/* Greeting */}
                    <p className="text-green-400 font-semibold flex items-center justify-center md:justify-start gap-2 mb-2 text-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v3m0 12v3m9-9h-3m-12 0H3m15.364-6.364l-2.121 2.121M6.757 17.243l-2.122 2.121M17.243 17.243l2.121 2.121M6.757 6.757l2.121 2.121"
                            />
                        </svg>
                        Hey There!
                    </p>

                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-4">
                        I'm Rana Huzaifa <br />
                        <span className="text-green-400 font-black">MERN Stack Developer</span>
                    </h1>


                    {/* Description */}
                    <p className="text-gray-600 max-w-xl mb-8 text-sm sm:text-base">
                        I'm a passionate MERN Stack Developer, creating responsive, modern interfaces with React, Tailwind CSS, Swiper.js, and AOS — while also building powerful back-end systems using Node.js, Express, and MongoDB.                    </p>

                    {/* CTA Button */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <a
                            href="/Huzaifa-Resume.pdf"
                            download
                            className="bg-green-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-green-500 transition flex items-center gap-2 text-sm sm:text-base"
                        >
                            Download Resume
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 relative flex justify-center items-center">
                    {/* Decorative Background Shapes */}
                    <div aria-hidden="true" className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        <div className="bg-green-400 rounded-l-full w-[180px] h-[140px] -translate-x-12 translate-y-16 md:w-[220px] md:h-[180px]" />
                        <div className="bg-green-400 rounded-t-full w-[120px] h-[120px] -translate-x-8 -translate-y-4 md:w-[140px] md:h-[140px]" />
                    </div>

                    {/* Profile Image */}
                    <img
                        src="/blackcoat.png"
                        alt="Rana Huzaifa profile"
                        className="relative z-10 rounded-xl shadow-xl object-cover contrast-125
    w-44 sm:w-56 md:w-80
    lg:w-96 xl:w-[420px] 2xl:w-[460px]
    transition-transform duration-500 hover:scale-105"
                    />

                </div>
            </main>

            {/* Modal */}
            {isModalOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-40"
                        onClick={() => setIsModalOpen(false)}
                    ></div>

                    {/* Modal Box */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative text-center">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
                            >
                                <IoClose />
                            </button>
                            <h3 className="text-2xl font-bold text-green-500 mb-2">Rana Huzaifa</h3>
                            <p className="text-gray-700 mb-1">Aspiring MERN Stack Developer</p>
                            <p className="text-gray-600 text-sm mb-4">
                                I'm currently pursuing a BS in Computer Science (2023–2027), with a focus on modern front-end technologies like React, Tailwind CSS, and Web Animations.
                            </p>
                            <p className="text-sm text-gray-500">"Driven to create impactful digital experiences "</p>
                        </div>
                    </div>
                </>
            )}

            {/* Arrow animation styling */}
            <style>
                {`
                    @keyframes arrowMotion {
                        0%, 100% { transform: translateX(0) rotate(0deg); }
                        50% { transform: translateX(10px) rotate(10deg); }
                    }
                    .arrow-icon {
                        animation: arrowMotion 3s ease-in-out infinite;
                    }
                `}
            </style>
        </section>
    );
};

export default Home;

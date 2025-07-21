import React from "react";

const Project = () => {
    return (
        <section
            className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('/laptop.jpg')`,
            }}
        >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

            {/* Centered Content */}
            <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center px-6 sm:px-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    Projects by <span className="text-green-400">Rana Huzaifa</span>
                </h2>
                <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-300">
                    Real-world solutions crafted using React, Tailwind CSS, Swiper.js, and modern web technologies. From live apps to UI/UX excellence — built by a passionate developer.
                </p>
            </div>
        </section>
    );
};

export default Project;

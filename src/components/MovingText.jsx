import React from "react";

const MovingText = () => {
    return (
        <div className="w-full overflow-hidden bg-[#0e0e0e] md:py-8 py-3  md:my-12">
            <div className="whitespace-nowrap animate-slide">
                {[...Array(100)].map((_, i) => (
                    <span
                        key={i}
                        className="inline-block text-white font-semibold text-xl mx-8"
                    >
                        Rana Huzaifa portfolio{" "}
                        <span className="text-green-400 px-4 text-2xl"><i class="fa-solid fa-face-smile"></i></span>
                    </span>
                ))}
            </div>

            {/* Custom animation */}
            <style>
                {`
                    @keyframes slide {
                        0% {
                            transform: translateX(0%);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }

                    .animate-slide {
                        display: inline-block;
                        animation: slide 450s linear infinite;
                    }
                `}
            </style>
        </div>
    );
};

export default MovingText;

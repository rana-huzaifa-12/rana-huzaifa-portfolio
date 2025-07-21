import React, { useState, useEffect, useRef } from "react";

const CounterItem = ({ label, end }) => {
    const [count, setCount] = useState(0);
    const ref = useRef();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let start = 0;
                    const duration = 1500;
                    const increment = Math.ceil(end / (duration / 30));
                    const interval = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(interval);
                        } else {
                            setCount(start);
                        }
                    }, 30);
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, hasAnimated]);

    return (
        <div
            ref={ref}
            className="flex flex-col items-center text-center bg-[#1a1a1a] shadow-md rounded-lg px-6 py-6 md:px-8 md:py-8 transition-transform hover:scale-105 duration-300"
        >
            <div className="text-4xl md:text-5xl font-bold text-green-400">{count}+</div>
            <p className="text-sm md:text-base text-gray-300 mt-1">{label}</p>
        </div>
    );
};

const TechStats = () => {
    return (
        <section className="bg-[#0e0e0e] py-16 md:py-30 px-4 sm:px-6 lg:px-20 text-white my-8">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10">
                    My <span className="text-green-400">Tech Achievements</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <CounterItem label="Lines of Code Written" end={12000} />
                    <CounterItem label="Hours of Practice" end={1500} />
                    <CounterItem label="GitHub Contributions" end={30} />
                </div>
            </div>
        </section>
    );
};

export default TechStats;

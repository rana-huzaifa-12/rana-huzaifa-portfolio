import React from "react";

const skills = [
    {
        title: "HTML5 & CSS3",
        description: "Structured, semantic markup with modern responsive styling for clean and accessible UIs.",
    },
    {
        title: "JavaScript (ES6+)",
        description: "Dynamic, interactive functionality using modern ES6+ syntax, DOM manipulation, and logic.",
    },
    {
        title: "React.js",
        description: "Built scalable front-end apps using components, hooks, props, state, and routing.",
    },
    {
        title: "Tailwind CSS",
        description: "Rapid UI development with utility-first classes for pixel-perfect responsive design.",
    },
    {
        title: "Bootstrap 5",
        description: "Quick layout building using Bootstrap grid, responsive utilities, and components.",
    },
    {
        title: "Git & GitHub",
        description: "Version control, branch management, and collaborative coding using Git workflows.",
    },
    {
        title: "Responsive Web Design",
        description: "Mobile-first approach with fluid grids and breakpoints ensuring usability across devices.",
    },
    {
        title: "Animated Designs",
        description: "Crafted engaging UI experiences using AOS, custom keyframe animations, transitions, and Framer Motion in React.",
    },
    {
        title: "API Integration",
        description: "Connected front-end with backend via REST APIs, using `fetch` and `axios` for data flow.",
    },
    {
        title: "Deployment",
        description: "Project deployment using Netlify, Vercel, or Firebase for hosting and CI/CD pipelines.",
    },

];

const Skills2 = () => {
    return (
        <section className="bg-[#0f0f0f] text-white px-6 md:px-20 py-16 font-sans">
            {/* Section Header */}
            <div className="text-center mb-14">
                <h3 className="text-sm uppercase text-green-400 font-semibold mb-2">My Expertise</h3>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                    Rana's <span className="text-green-400">Web Dev </span> Stack
                </h2>
            </div>

            {/* Skills List */}
            <div className="space-y-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-[#161616] rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-6 gap-4 border border-gray-700 
                                   hover:border-green-400 hover:shadow-lg hover:shadow-green-400/30 hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
                    >
                        <div className="text-xl font-semibold text-gray-400">
                            {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="flex-1 text-xl font-semibold text-white">{skill.title}</div>
                        <div className="text-gray-400 text-sm max-w-xl">{skill.description}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills2;

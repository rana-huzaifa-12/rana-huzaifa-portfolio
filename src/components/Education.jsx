import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { BsLaptop } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";

const educationData = [
    {
        icon: <MdSchool className="text-3xl text-gray-700" />,
        title: "Matriculation",
        date: "2019 – 2021",
        description: "Completed SSC (Science) with strong foundational skills in Math.",
    },
    {
        icon: <HiOutlineUserGroup className="text-3xl text-gray-700" />,
        title: "Intermediate",
        date: "2021 – 2023",
        description: "Completed HSSC (Pre-Engineering/ICS) focusing on Mathematics.",
    },
    {
        icon: <BsLaptop className="text-3xl text-gray-700" />,
        title: "BS Computer Science",
        date: "2023 – 2027 (Ongoing)",
        description: "Pursuing BSCS with a focus on Web Development and Software Engineering.",
    },
];

const Education = () => {
    return (
        <section className="bg-white text-gray-900 font-sans py-16 px-6 md:px-30">
            {/* Header */}
            <div className="mb-10 text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start text-green-500 text-sm font-semibold mb-2">
                    <FaGraduationCap />
                    Education
                </div>
                <h2 className="text-4xl font-extrabold leading-tight">
                    My Academic <span className="text-green-400">Journey</span>
                </h2>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {educationData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center justify-between
                        shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white rounded-full border border-gray-300 shadow-sm">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.date}</p>
                                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;

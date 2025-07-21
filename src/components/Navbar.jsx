import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [menuOpen]);

    return (
        <nav className="w-full bg-gradient-to-r from-[#e0f7ff] to-white shadow z-50 relative">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-gray-900 select-none">RH</span>
                </div>

                <ul className="hidden md:flex space-x-8 text-gray-900 font-semibold text-[17px]">
                    {navItems.map(({ name, path }, i) => (
                        <li key={i} className="relative group transition">
                            <Link
                                to={path}
                                className="relative z-10 px-2 py-1"
                            >
                                {name}
                            </Link>
                            <span className="absolute inset-0 before:absolute before:inset-0 before:rounded-md before:scale-x-0 before:scale-y-110 before:origin-left before:bg-green-400 before:opacity-50 before:transition-transform before:duration-300 group-hover:before:scale-x-100" />
                        </li>
                    ))}
                </ul>

                <Link
                    to="/contact"
                    className="hidden md:flex relative overflow-hidden text-white text-base font-semibold rounded-full px-6 py-2 items-center 
                    
            space-x-2 bg-gray-900
             before:absolute before:inset-0 before:bg-green-400 before:rounded-4xl before:scale-x-0 before:origin-left before:transition-transform before:duration-600 hover:before:scale-x-100
             hover:text-gray-900 transition-colors duration-300"
                >
                    <span className="relative z-10">Hire Me

                    </span>
                </Link>


                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <HiMenu className="w-7 h-7 text-gray-900" />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
                <div className="flex justify-end p-4">
                    <HiX className="w-6 h-6 text-gray-900 cursor-pointer" onClick={() => setMenuOpen(false)} />
                </div>
                <div className="flex flex-col items-center px-6 py-6 space-y-6 text-gray-900 font-medium text-base">
                    {navItems.map(({ name, path }, i) => (
                        <Link
                            key={i}
                            to={path}
                            onClick={() => setMenuOpen(false)}
                            className="w-full text-center py-2 hover:text-gray-700 transition"
                        >
                            {name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="bg-gray-900 text-white text-sm font-semibold rounded-full px-6 py-2 hover:bg-gray-700 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

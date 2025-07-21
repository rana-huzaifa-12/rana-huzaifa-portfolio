import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const socialLinks = [
        {
            label: "Facebook",
            href: "https://www.facebook.com/people/Rana-Huzaifa/100013393063469/",
            icon: <FaFacebookF />,
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/huzaifa_rajput_126/",
            icon: <FaInstagram />,
        },
        {
            label: "GitHub",
            href: "https://github.com/rana-huzaifa-12",
            icon: <FaGithub />,
        },
        {
            label: "YouTube",
            href: "https://www.youtube.com/@PCLab126",
            icon: <FaYoutube />,
        },
    ];

    return (
        <footer className="relative bg-[#0e0e0e] border-t border-gray-700 text-gray-300 font-sans">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row md:justify-between md:space-x-20 border-b border-gray-700">
                {/* Left Section */}
                <div className="md:flex md:flex-col md:space-y-8 border-b border-gray-700 md:border-b-0 md:min-w-[320px] md:pb-0 pb-8">
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Location</h3>
                        <address className="not-italic text-gray-400 leading-relaxed max-w-xs">
                            Punjab, Pakistan
                        </address>
                    </div>

                    <div className="mt-8 md:mt-0">
                        <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
                        <p>
                            <a href="mailto:ranarajpoot1266@gmail.com" className="hover:text-green-400">
                                ranarajpoot1266@gmail.com
                            </a>
                        </p>
                        <p className="mt-2">
                            <a href="tel:+923245898647" className="hover:text-green-400">
                                +92 3245898647
                            </a>
                        </p>
                    </div>

                    <div className="flex items-center mt-10 space-x-4">
                        <span className="text-lg text-white font-bold">Social:</span>
                        <nav className="flex space-x-4">
                            {socialLinks.map(({ label, href, icon }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-green-400 text-gray-400 hover:text-green-400 transition"
                                >
                                    {icon}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Right Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-10 md:mt-0 max-w-3xl">
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-5">Useful Links</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <NavLink to="/about" className="hover:text-green-400 transition-colors">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/skills" className="hover:text-green-400 transition-colors">
                                    Skills
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" className="hover:text-green-400 transition-colors">
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="hover:text-green-400 transition-colors">
                                    Contact Me
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-5">Services</h3>
                        <ul className="space-y-4 text-gray-400">
                            {["Front-End Dev", "React UI Design", "Responsive Layouts", "Tailwind Styling"].map((service, i) => (
                                <li key={i}>
                                    <span className="hover:text-green-400 transition-colors cursor-default">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-6 text-gray-400 text-sm space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                {/* Left:  */}
                <div className="flex items-center space-x-1">
                    <span>© {new Date().getFullYear()}</span>
                    <NavLink to="/" className="text-green-400 font-semibold hover:underline">
                        Rana Huzaifa
                    </NavLink>
                </div>

                {/* Scroll to top button */}
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
                    aria-label="Scroll to top"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 3c.3 0 .58.17.72.44l6.37 12.94a.75.75 0 01-1.36.66L10 5.7V21a1 1 0 01-2 0V5.7L4.27 17.04a.75.75 0 01-1.36-.66L9.28 3.44A.75.75 0 0110 3z" />
                    </svg>
                </button>

                {/* Right */}
                <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
                    <a href="#" className="hover:text-green-400 transition-colors">
                        Terms & Conditions
                    </a>
                    <a href="#" className="hover:text-green-400 transition-colors">
                        Privacy Policy
                    </a>
                </div>
            </div>


            {/* Made With Love Line */}
            <div className="text-center py-4 text-gray-400 text-sm border-t border-gray-700">
                Made with <span className="text-red-500">♥</span> by <span className="text-green-400 font-semibold">Rana Huzaifa</span>
            </div>
        </footer>
    );
};

export default Footer;

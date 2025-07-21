import React from "react";

const Contact2 = () => {
    return (
        <section className="bg-white text-gray-800 py-16 px-6 sm:px-10 lg:px-20 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Map Embed */}
                <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        title="Google Map - Shahdara"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27178.855481182098!2d74.28260864999999!3d31.62407615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c47be50fcdb%3A0x3cf241986ed44db5!2sShahdara!5e0!3m2!1sen!2s!4v1751788176582!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Right: Contact Form */}
                <div className="bg-[#f7f7f7] p-8 rounded-xl shadow shadow-gray-400 ">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">
                        Get in <span className="text-green-400">Touch</span>
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Your message..."
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-green-400 hover:bg-green-500 text-white font-semibold px-6 py-2 rounded-full transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact2;

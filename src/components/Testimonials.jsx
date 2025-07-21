import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Jr Robart",
        title: "Senior Engineer",
        image: "https://i.pravatar.cc/150?img=32",
        quote:
            "Rana's React expertise brought our UI vision to life. His ability to combine functionality with clean Tailwind CSS layouts made a huge impact on our frontend performance.",
    },
    {
        name: "Sophia Khan",
        title: "Marketing Head",
        image: "https://i.pravatar.cc/150?img=47",
        quote:
            "Impressed with Rana's ability to deliver responsive and animated components using modern tools like Swiper.js and AOS. He made our site visually engaging and mobile-ready.",
    },
    {
        name: "Liam Smith",
        title: "Product Manager",
        image: "https://i.pravatar.cc/150?img=12",
        quote:
            "From reusable React components to seamless user experience, Rana exceeded expectations. His focus on performance and clean code really stood out.",
    },
];


const Testimonials = (props) => {
    return (
        <section className="bg-[#0e0e0e] text-white py-16 px-4 sm:px-6 md:px-10 font-sans mt-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
                {/* Left Text Section */}
                <div className="space-y-6 flex flex-col items-center md:items-start">
                    <h4 className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                        Testimonials
                    </h4>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
                        {props.heading}<br />
                        <span className="text-green-400">Testimonials</span>
                    </h2>

                    <div className="bg-[#1a1a1a] p-6 rounded-xl inline-flex flex-col items-center space-y-2 w-full max-w-full sm:max-w-[240px]">
                        <div className="text-4xl font-bold">4.8</div>
                        <div className="text-sm text-gray-400">Our Clients Rating.</div>
                        <div className="flex space-x-1 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Testimonials Carousel */}
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="w-full"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#101010] border border-green-400 rounded-xl p-6 sm:p-8 md:p-10 space-y-4 text-left">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="text-lg font-semibold">{item.name}</h4>
                                        <p className="text-sm text-gray-400">{item.title}</p>
                                    </div>
                                </div>
                                <p className="text-base sm:text-lg leading-relaxed text-gray-100">
                                    <span className="text-green-400 text-2xl font-serif">“</span>
                                    {item.quote}
                                    <span className="text-green-400 text-2xl font-serif">”</span>
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;

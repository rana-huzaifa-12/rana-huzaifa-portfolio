import React, { useEffect, useState } from "react";

const CursorFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <div
            className="fixed w-6 h-6 bg-green-400 rounded-full pointer-events-none z-[9999] mix-blend-difference  transition-transform duration-45 ease-linear hidden md:block"
            style={{
                transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
            }}
        />
    );
};

export default CursorFollower;

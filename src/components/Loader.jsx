import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

function Loader() {
    const [loaderSize, setLoaderSize] = useState(70); // default size

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;

            if (width < 640) {
                setLoaderSize(40); // Small screens
            } else if (width < 1024) {
                setLoaderSize(60); // Medium screens
            } else {
                setLoaderSize(80); // Large screens
            }
        };

        updateSize(); // Set size on load
        window.addEventListener("resize", updateSize); // Update size on resize

        return () => window.removeEventListener("resize", updateSize); // Clean up
    }, []);

    return (
        <div className="fixed inset-0 flex justify-center items-center  z-500">
            <HashLoader color="#00c49a" size={80} speedMultiplier={1.2} />
        </div>
    );
}

export default Loader;

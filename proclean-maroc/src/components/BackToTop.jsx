import { useEffect, useState } from "react";

function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 280);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white font-black text-emerald-600 shadow-lg ring-1 ring-emerald-100 transition hover:scale-105"
            aria-label="Retour en haut"
        >
            ↑
        </button>
    );
}

export default BackToTop;
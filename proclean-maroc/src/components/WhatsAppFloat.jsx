function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-24 right-6 z-50 flex items-center gap-3 rounded-full bg-emerald-500 px-5 py-4 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-emerald-600"
            aria-label="Contacter sur WhatsApp"
        >
            <span className="text-xl">💬</span>
            <span className="hidden sm:inline">WhatsApp</span>
        </a>
    );
}

export default WhatsAppFloat;
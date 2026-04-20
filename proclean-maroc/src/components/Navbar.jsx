import { Link, useLocation } from "react-router-dom";

function Navbar({ totalItems = 0 }) {
    const location = useLocation();

    const navItems = [
        { label: "Accueil", path: "/" },
        { label: "Catalogue", path: "/catalogue" },
        { label: "Devis Pro", path: "/devis-pro" },
        { label: "À propos", path: "/about" },
        { label: "Contact", path: "/contact" },
        { label: "FAQ", path: "/faq" },
        { label: "Admin", path: "/admin" },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link to="/" className="flex flex-col">
                    <span className="text-3xl font-black uppercase tracking-tight text-emerald-600">
                        ProClean Maroc
                    </span>
                    <span className="text-sm text-slate-500">
                        Produits de nettoyage professionnels
                    </span>
                </Link>

                <nav className="hidden items-center gap-3 lg:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${isActive(item.path)
                                    ? "border border-emerald-200 bg-emerald-50 text-emerald-700 shadow-sm"
                                    : "border border-slate-200 bg-white text-slate-700 hover:border-emerald-200 hover:text-emerald-700"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Link
                        to="/catalogue#panier"
                        className="ml-2 flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 font-bold text-emerald-700 transition hover:bg-emerald-500 hover:text-white"
                    >
                        <span>🛒</span>
                        <span>
                            {totalItems} article{totalItems > 1 ? "s" : ""}
                        </span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
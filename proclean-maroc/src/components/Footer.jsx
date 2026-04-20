import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="mt-16 border-t border-emerald-100 bg-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
                <div>
                    <h3 className="text-2xl font-black text-emerald-600">ProClean Maroc</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                        Produits de nettoyage professionnels pour entreprises, hôtels,
                        restaurants, bureaux, cliniques et industrie.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-slate-900">Navigation</h4>
                    <div className="mt-4 space-y-3 text-sm text-slate-600">
                        <Link to="/" className="block hover:text-emerald-600">Accueil</Link>
                        <Link to="/catalogue" className="block hover:text-emerald-600">Catalogue</Link>
                        <Link to="/about" className="block hover:text-emerald-600">À propos</Link>
                        <Link to="/contact" className="block hover:text-emerald-600">Contact</Link>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-slate-900">Marché pro</h4>
                    <div className="mt-4 space-y-3 text-sm text-slate-600">
                        <p>Restaurants & cafés</p>
                        <p>Hôtels & maisons d’hôtes</p>
                        <p>Bureaux & entreprises</p>
                        <p>Industrie & logistique</p>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-slate-900">Contact</h4>
                    <div className="mt-4 space-y-3 text-sm text-slate-600">
                        <p>📞 +212 6 12 34 56 78</p>
                        <p>✉️ contact@procleanmaroc.ma</p>
                        <p>📍 Casablanca, Maroc</p>
                        <p>💬 WhatsApp disponible</p>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-100 py-6 text-center text-sm text-slate-500">
                © 2026 ProClean Maroc — Site e-commerce professionnel
            </div>
        </footer>
    );
}

export default Footer;
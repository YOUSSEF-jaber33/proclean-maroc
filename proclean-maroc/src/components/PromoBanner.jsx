function PromoBanner() {
    return (
        <section className="border-b border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-slate-50">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 text-sm text-slate-700 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white">
                        Offre Pro
                    </span>
                    <span>
                        Livraison rapide à Casablanca, Rabat, Tanger, Marrakech et partout au Maroc.
                    </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-slate-600">
                    <span>✅ Produits pros</span>
                    <span>✅ Prix en MAD</span>
                    <span>✅ Commande en gros</span>
                    <span>✅ Support WhatsApp</span>
                </div>
            </div>
        </section>
    );
}

export default PromoBanner;
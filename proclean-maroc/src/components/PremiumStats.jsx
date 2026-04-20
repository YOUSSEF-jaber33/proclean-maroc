function PremiumStats() {
    const stats = [
        {
            value: "250+",
            label: "Clients accompagnés",
            text: "Professionnels servis dans plusieurs secteurs au Maroc.",
        },
        {
            value: "12+",
            label: "Villes desservies",
            text: "Livraisons organisées dans les principales zones du pays.",
        },
        {
            value: "24h-72h",
            label: "Délai moyen",
            text: "Réactivité commerciale et logistique selon disponibilité.",
        },
        {
            value: "100%",
            label: "Prix en MAD",
            text: "Tarification claire et adaptée au marché marocain.",
        },
    ];

    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10 max-w-3xl">
                <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                    Indicateurs clés
                </span>

                <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
                    Une structure pensée pour la performance et la confiance
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                    Nous combinons disponibilité, clarté commerciale et service rapide
                    pour répondre aux besoins des professionnels.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                    <div
                        key={item.label}
                        className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-sm"
                    >
                        <p className="text-4xl font-black text-emerald-600">{item.value}</p>
                        <h3 className="mt-4 text-xl font-bold text-slate-900">{item.label}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PremiumStats;
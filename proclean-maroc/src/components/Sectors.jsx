function Sectors() {
    const sectors = [
        {
            title: "Restaurants & cafés",
            text: "Dégraissants, nettoyants cuisine, entretien sols et hygiène des surfaces de service.",
            icon: "🍽️",
        },
        {
            title: "Hôtels & hébergements",
            text: "Produits pour chambres, sanitaires, espaces communs et entretien quotidien.",
            icon: "🏨",
        },
        {
            title: "Bureaux & entreprises",
            text: "Solutions propres et efficaces pour espaces administratifs et usage fréquent.",
            icon: "🏢",
        },
        {
            title: "Cliniques & cabinets",
            text: "Produits d’hygiène adaptés aux espaces sensibles et zones à entretien rigoureux.",
            icon: "🏥",
        },
        {
            title: "Industrie & ateliers",
            text: "Nettoyants puissants pour graisse, sols industriels, maintenance et productivité.",
            icon: "🏭",
        },
        {
            title: "Revendeurs & grossistes",
            text: "Approvisionnement en volume avec logique commerciale claire et réactive.",
            icon: "📦",
        },
    ];

    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10 max-w-3xl">
                <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                    Secteurs que nous servons
                </span>

                <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
                    Des solutions adaptées à chaque activité professionnelle
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                    Nous parlons le langage du terrain : cadence, hygiène, image de
                    marque, sécurité et efficacité opérationnelle.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {sectors.map((sector) => (
                    <div
                        key={sector.title}
                        className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
                    >
                        <div className="mb-4 text-3xl">{sector.icon}</div>
                        <h3 className="text-xl font-bold text-slate-900">{sector.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{sector.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Sectors;
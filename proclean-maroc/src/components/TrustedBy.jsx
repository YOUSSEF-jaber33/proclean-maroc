function TrustedBy() {
    const partners = [
        "Restaurants",
        "Hôtels",
        "Riads",
        "Cliniques",
        "Bureaux",
        "Industries",
        "Cafés",
        "Commerces",
        "Sociétés de nettoyage",
        "Revendeurs",
        "Écoles",
        "Espaces coworking",
    ];

    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-sm">
                <div className="max-w-3xl">
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                        Ils nous font confiance
                    </span>

                    <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
                        Une approche pensée pour les professionnels au Maroc
                    </h2>

                    <p className="mt-4 leading-8 text-slate-600">
                        Nous accompagnons plusieurs types d’établissements avec une offre
                        orientée performance, hygiène, rapidité et simplicité de commande.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {partners.map((partner) => (
                        <div
                            key={partner}
                            className="flex min-h-[88px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center text-base font-bold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
                        >
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TrustedBy;
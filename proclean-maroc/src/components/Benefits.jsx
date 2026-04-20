function Benefits() {
    const items = [
        {
            title: "Produits adaptés au terrain",
            text: "Des solutions pensées pour cuisines, sanitaires, sols, bureaux et zones industrielles.",
        },
        {
            title: "Livraison partout au Maroc",
            text: "Nous organisons vos commandes avec une logistique rapide et fiable.",
        },
        {
            title: "Tarifs pros et commandes en gros",
            text: "Une offre claire pour entreprises, hôtels, restaurants et distributeurs.",
        },
        {
            title: "Accompagnement humain",
            text: "Conseils de choix produit, orientation usage et support client réactif.",
        },
    ];

    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10 max-w-2xl">
                <h2 className="text-4xl font-extrabold text-slate-900">
                    Pourquoi choisir ProClean Maroc ?
                </h2>
                <p className="mt-3 text-slate-600">
                    Une approche locale, professionnelle et orientée résultats pour les
                    besoins du marché marocain.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {items.map((item) => (
                    <div
                        key={item.title}
                        className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
                    >
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-xl text-emerald-600">
                            ✦
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Benefits;
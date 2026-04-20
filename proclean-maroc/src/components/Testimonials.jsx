function Testimonials() {
    const testimonials = [
        {
            name: "Riad Al Bahia",
            role: "Marrakech",
            text: "Nous avions besoin d’un fournisseur fiable pour nos produits d’entretien. ProClean Maroc nous a proposé des solutions adaptées, avec un bon suivi et une livraison rapide.",
        },
        {
            name: "Café Restaurant Atlas",
            role: "Casablanca",
            text: "Les produits sont efficaces, surtout pour la cuisine et les surfaces grasses. Très bon rapport qualité-prix et communication rapide via WhatsApp.",
        },
        {
            name: "Clinique Anoual",
            role: "Rabat",
            text: "Nous apprécions la réactivité et la qualité des produits reçus. La clarté des prix et la disponibilité de l’équipe sont rassurantes.",
        },
    ];

    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10 max-w-3xl">
                <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                    Témoignages clients
                </span>

                <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
                    Ce que disent nos clients
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                    Des retours concrets de professionnels qui nous font déjà confiance
                    au Maroc.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {testimonials.map((item) => (
                    <div
                        key={item.name}
                        className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
                    >
                        <div className="mb-4 text-3xl text-emerald-500">★ ★ ★ ★ ★</div>
                        <p className="text-sm leading-7 text-slate-700">{item.text}</p>

                        <div className="mt-6 border-t border-slate-100 pt-4">
                            <h3 className="font-bold text-slate-900">{item.name}</h3>
                            <p className="text-sm text-slate-500">{item.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
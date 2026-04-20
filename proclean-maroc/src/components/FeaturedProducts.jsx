import { Link } from "react-router-dom";

function FeaturedProducts() {
    const featured = [
        {
            title: "Dégraissant cuisine pro",
            text: "Idéal pour restaurants, snacks, fast-foods et cuisines intensives.",
            price: "À partir de 85 MAD",
            image: "/images/featured-kitchen.jpg",
        },
        {
            title: "Nettoyant multi-surfaces",
            text: "Pour bureaux, espaces d’accueil, comptoirs et surfaces du quotidien.",
            price: "À partir de 25 MAD",
            image: "/images/featured-multi.jpg",
        },
        {
            title: "Solution hygiène alimentaire",
            text: "Pensée pour les environnements exigeants en propreté et sécurité.",
            price: "À partir de 95 MAD",
            image: "/images/featured-food.jpg",
        },
    ];

    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                        Produits vedettes
                    </span>

                    <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
                        Les solutions les plus demandées
                    </h2>

                    <p className="mt-4 leading-8 text-slate-600">
                        Une sélection de références appréciées par les professionnels pour
                        leur efficacité, leur simplicité d’usage et leur bon positionnement prix.
                    </p>
                </div>

                <Link
                    to="/catalogue"
                    className="w-fit rounded-2xl border border-emerald-200 bg-white px-6 py-4 font-bold text-emerald-700 transition hover:bg-emerald-500 hover:text-white"
                >
                    Voir tout le catalogue
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {featured.map((item) => (
                    <div
                        key={item.title}
                        className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-sm"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-64 w-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = "/images/placeholder.jpg";
                            }}
                        />

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>

                            <div className="mt-5 flex items-center justify-between gap-4">
                                <span className="text-lg font-extrabold text-emerald-600">
                                    {item.price}
                                </span>

                                <Link
                                    to="/catalogue"
                                    className="rounded-xl bg-emerald-500 px-4 py-2 font-bold text-white transition hover:scale-105 hover:bg-emerald-600"
                                >
                                    Commander
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeaturedProducts;
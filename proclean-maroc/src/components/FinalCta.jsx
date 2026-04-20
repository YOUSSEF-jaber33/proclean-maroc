import { Link } from "react-router-dom";

function FinalCta() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-emerald-100 bg-gradient-to-r from-white via-emerald-50/60 to-slate-50 p-8 shadow-sm md:p-12">
                <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div>
                        <span className="inline-flex rounded-full bg-emerald-500 px-4 py-2 text-sm font-extrabold text-white">
                            Passez à l’action
                        </span>

                        <h2 className="mt-5 text-4xl font-extrabold text-slate-900 md:text-5xl">
                            Besoin d’une offre rapide,
                            <span className="block text-emerald-600">
                                claire et professionnelle ?
                            </span>
                        </h2>

                        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                            Que ce soit pour une commande directe, un besoin récurrent ou une
                            demande en gros, notre équipe vous accompagne avec une réponse
                            simple, rapide et adaptée à votre activité au Maroc.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 lg:items-end">
                        <Link
                            to="/devis-pro"
                            className="w-full rounded-2xl bg-emerald-500 px-7 py-4 text-center font-bold text-white transition hover:scale-[1.02] hover:bg-emerald-600 lg:w-auto"
                        >
                            Demander un devis pro
                        </Link>

                        <Link
                            to="/catalogue"
                            className="w-full rounded-2xl border border-emerald-200 bg-white px-7 py-4 text-center font-bold text-emerald-700 transition hover:bg-emerald-50 lg:w-auto"
                        >
                            Voir le catalogue
                        </Link>

                        <a
                            href="https://wa.me/212600000000?text=Bonjour%20ProClean%20Maroc,%20je%20souhaite%20plus%20d'informations%20sur%20vos%20produits."
                            target="_blank"
                            rel="noreferrer"
                            className="w-full rounded-2xl border border-emerald-200 bg-white px-7 py-4 text-center font-bold text-emerald-700 transition hover:bg-emerald-50 lg:w-auto"
                        >
                            Parler sur WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FinalCta;
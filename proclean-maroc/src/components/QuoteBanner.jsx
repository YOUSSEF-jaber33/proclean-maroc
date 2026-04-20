import { Link } from "react-router-dom";

function QuoteBanner() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-slate-50 p-8 shadow-sm">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <span className="inline-flex rounded-full bg-emerald-500 px-4 py-2 text-sm font-extrabold text-white">
                            Devis professionnel
                        </span>

                        <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
                            Vous avez un besoin régulier ou une commande en gros ?
                        </h2>

                        <p className="mt-4 leading-8 text-slate-600">
                            Nous préparons des offres adaptées aux hôtels, restaurants,
                            bureaux, sociétés de nettoyage, établissements de santé et
                            structures industrielles.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 lg:justify-end">
                        <Link
                            to="/devis-pro"
                            className="rounded-2xl bg-emerald-500 px-7 py-4 font-bold text-white transition hover:scale-105 hover:bg-emerald-600"
                        >
                            Demander un devis
                        </Link>

                        <a
                            href="https://wa.me/212600000000"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl border border-emerald-200 bg-white px-7 py-4 font-bold text-emerald-700 transition hover:bg-emerald-50"
                        >
                            Parler sur WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default QuoteBanner;
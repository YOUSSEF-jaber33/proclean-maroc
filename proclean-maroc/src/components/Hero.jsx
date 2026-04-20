import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-slate-50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.06),transparent_25%)]" />

            <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
                <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                        Solutions de nettoyage pour professionnels au Maroc
                    </span>

                    <h1 className="mt-6 text-5xl font-black leading-tight text-slate-900 md:text-6xl">
                        Hygiène, propreté et performance
                        <span className="block text-emerald-600">
                            pour vos espaces de travail
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                        ProClean Maroc accompagne les restaurants, hôtels, bureaux, cliniques
                        et sites industriels avec des produits fiables, puissants et adaptés
                        aux exigences du terrain.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            to="/catalogue"
                            className="rounded-2xl bg-emerald-500 px-7 py-4 font-bold text-white transition hover:scale-105 hover:bg-emerald-600"
                        >
                            Voir le catalogue
                        </Link>

                        <a
                            href="https://wa.me/212600000000"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl border border-emerald-200 bg-white px-7 py-4 font-bold text-emerald-700 transition hover:bg-emerald-50"
                        >
                            Commander sur WhatsApp
                        </a>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                            <p className="text-2xl font-black text-emerald-600">+250</p>
                            <p className="text-sm text-slate-500">Clients professionnels</p>
                        </div>

                        <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                            <p className="text-2xl font-black text-emerald-600">24h-72h</p>
                            <p className="text-sm text-slate-500">Délais de livraison</p>
                        </div>

                        <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                            <p className="text-2xl font-black text-emerald-600">MAD</p>
                            <p className="text-sm text-slate-500">Tarification claire</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative"
                >
                    <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-xl">
                        <img
                            src="/images/hero-cleaning.jpg"
                            alt="Produits de nettoyage professionnels ProClean Maroc"
                            className="h-[520px] w-full object-cover"
                        />
                    </div>

                    <div className="absolute -bottom-6 left-6 rounded-2xl border border-emerald-100 bg-white p-5 shadow-xl">
                        <p className="text-sm text-slate-500">Commande express</p>
                        <p className="text-lg font-bold text-slate-900">
                            Devis rapide pour hôtels, restos et industrie
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
import Navbar from "../components/Navbar";
import PromoBanner from "../components/PromoBanner";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import WhatsAppFloat from "../components/WhatsAppFloat";

function About({ totalItems }) {
    return (
        <>
            <Navbar totalItems={totalItems} />
            <PromoBanner />

            <section className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-slate-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_28%)]" />
                <div className="relative mx-auto max-w-7xl px-6 py-14">
                    <div className="max-w-3xl">
                        <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                            À propos de ProClean Maroc
                        </span>

                        <h1 className="mt-5 text-5xl font-black text-slate-900">
                            Un partenaire local pour
                            <span className="block text-emerald-600">
                                l’hygiène et la propreté professionnelle
                            </span>
                        </h1>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            ProClean Maroc est né pour répondre aux besoins réels des
                            entreprises marocaines en matière de nettoyage, d’hygiène et de
                            maintenance quotidienne.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
                        <h2 className="text-3xl font-extrabold text-slate-900">Notre mission</h2>
                        <p className="mt-4 leading-8 text-slate-600">
                            Fournir aux restaurants, hôtels, bureaux, cliniques, sociétés de
                            service et sites industriels des produits efficaces, accessibles
                            et adaptés à leurs contraintes opérationnelles.
                        </p>
                        <p className="mt-4 leading-8 text-slate-600">
                            Nous mettons l’accent sur la fiabilité, la réactivité et la
                            clarté commerciale pour construire une relation durable avec nos
                            clients.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
                        <h2 className="text-3xl font-extrabold text-slate-900">Notre vision</h2>
                        <p className="mt-4 leading-8 text-slate-600">
                            Devenir une référence marocaine du nettoyage professionnel, avec
                            une expérience simple, moderne et orientée résultats.
                        </p>
                        <p className="mt-4 leading-8 text-slate-600">
                            Nous voulons aider chaque structure à améliorer son image,
                            renforcer son niveau d’hygiène et gagner du temps grâce à des
                            produits adaptés et un accompagnement sérieux.
                        </p>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-emerald-600">Qualité</h3>
                        <p className="mt-3 text-slate-600">
                            Des produits pensés pour un usage réel et intensif.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-emerald-600">Réactivité</h3>
                        <p className="mt-3 text-slate-600">
                            Réponses rapides, devis fluides et suivi commercial humain.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-emerald-600">Confiance</h3>
                        <p className="mt-3 text-slate-600">
                            Une approche locale, sérieuse et adaptée au marché marocain.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppFloat />
            <BackToTop />
        </>
    );
}

export default About;
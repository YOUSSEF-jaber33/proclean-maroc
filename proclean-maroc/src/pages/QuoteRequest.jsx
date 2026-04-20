import Navbar from "../components/Navbar";
import PromoBanner from "../components/PromoBanner";
import QuoteForm from "../components/QuoteForm";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import WhatsAppFloat from "../components/WhatsAppFloat";

function QuoteRequest({ totalItems, setToast }) {
    const benefits = [
        "Réponse rapide pour professionnels",
        "Demande adaptée à votre secteur",
        "Tarifs étudiés selon volume",
        "Livraison partout au Maroc",
    ];

    return (
        <>
            <Navbar totalItems={totalItems} />
            <PromoBanner />

            <section className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-slate-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_28%)]" />
                <div className="relative mx-auto max-w-7xl px-6 py-14">
                    <div className="max-w-4xl">
                        <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                            Devis professionnel
                        </span>

                        <h1 className="mt-5 text-5xl font-black text-slate-900">
                            Obtenez une offre claire et adaptée
                            <span className="block text-emerald-600">
                                à votre activité au Maroc
                            </span>
                        </h1>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Que vous soyez un restaurant, un hôtel, une clinique, un bureau
                            ou un site industriel, nous pouvons vous proposer une solution
                            adaptée à vos besoins, vos quantités et votre fréquence
                            d’approvisionnement.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {benefits.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <QuoteForm setToast={setToast} />

                    <div className="space-y-6">
                        <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-sm">
                            <h2 className="text-2xl font-extrabold text-slate-900">
                                Pourquoi demander un devis ?
                            </h2>

                            <div className="mt-5 space-y-4 text-slate-600">
                                <p>
                                    Nous adaptons nos propositions selon vos volumes, votre secteur,
                                    la fréquence d’achat et les exigences de votre établissement.
                                </p>
                                <p>
                                    Cette approche est idéale pour les commandes en gros, les besoins
                                    mensuels, les appels d’offres internes ou les besoins multi-sites.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-sm">
                            <h2 className="text-2xl font-extrabold text-slate-900">
                                Profils souvent accompagnés
                            </h2>

                            <ul className="mt-5 space-y-3 text-slate-700">
                                <li>• Restaurants et cuisines professionnelles</li>
                                <li>• Hôtels, riads et hébergements</li>
                                <li>• Entreprises, bureaux et sièges sociaux</li>
                                <li>• Cliniques, cabinets et laboratoires</li>
                                <li>• Ateliers, usines et espaces industriels</li>
                                <li>• Revendeurs et distributeurs régionaux</li>
                            </ul>
                        </div>

                        <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
                            <h2 className="text-2xl font-extrabold text-slate-900">
                                Besoin urgent ?
                            </h2>

                            <p className="mt-4 text-slate-700">
                                Pour une réponse plus rapide, contactez-nous directement sur
                                WhatsApp avec votre ville, votre activité et les produits souhaités.
                            </p>

                            <a
                                href="https://wa.me/212600000000?text=Bonjour%20ProClean%20Maroc,%20je%20souhaite%20un%20devis%20professionnel."
                                target="_blank"
                                rel="noreferrer"
                                className="mt-5 inline-flex rounded-2xl bg-emerald-500 px-6 py-4 font-bold text-white transition hover:scale-105 hover:bg-emerald-600"
                            >
                                Contacter sur WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppFloat />
            <BackToTop />
        </>
    );
}

export default QuoteRequest;
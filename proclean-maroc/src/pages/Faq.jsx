import Navbar from "../components/Navbar";
import PromoBanner from "../components/PromoBanner";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import WhatsAppFloat from "../components/WhatsAppFloat";

function Faq({ totalItems }) {
    const faqs = [
        {
            q: "Livrez-vous partout au Maroc ?",
            a: "Oui, nous pouvons organiser la livraison dans plusieurs villes du Maroc selon le volume, le délai et la disponibilité des produits.",
        },
        {
            q: "Travaillez-vous avec les entreprises ?",
            a: "Oui, ProClean Maroc s’adresse aux professionnels : restaurants, hôtels, bureaux, cliniques, commerces, industries et revendeurs.",
        },
        {
            q: "Peut-on commander en gros ?",
            a: "Oui, nous proposons des commandes en volume avec accompagnement commercial et devis adapté.",
        },
        {
            q: "Comment demander un devis ?",
            a: "Vous pouvez utiliser la page contact ou nous écrire directement sur WhatsApp pour une réponse plus rapide.",
        },
        {
            q: "Les prix sont-ils affichés en dirham marocain ?",
            a: "Oui, tous les prix affichés sur le site sont en MAD.",
        },
        {
            q: "Puis-je commander même si je ne suis pas une entreprise ?",
            a: "Oui, nous pouvons aussi servir des clients particuliers selon les produits et la disponibilité.",
        },
    ];

    return (
        <>
            <Navbar totalItems={totalItems} />
            <PromoBanner />

            <section className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-slate-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_28%)]" />
                <div className="relative mx-auto max-w-7xl px-6 py-14">
                    <div className="max-w-3xl">
                        <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                            FAQ
                        </span>

                        <h1 className="mt-5 text-5xl font-black text-slate-900">
                            Questions fréquentes
                            <span className="block text-emerald-600">
                                sur nos services et nos produits
                            </span>
                        </h1>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Retrouvez ici les réponses aux questions les plus posées par nos
                            clients au Maroc.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-5xl px-6 py-16">
                <div className="space-y-5">
                    {faqs.map((item) => (
                        <div
                            key={item.q}
                            className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
                        >
                            <h3 className="text-xl font-bold text-slate-900">{item.q}</h3>
                            <p className="mt-3 leading-8 text-slate-600">{item.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
            <WhatsAppFloat />
            <BackToTop />
        </>
    );
}

export default Faq;
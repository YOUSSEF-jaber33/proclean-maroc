import Navbar from "../components/Navbar";
import PromoBanner from "../components/PromoBanner";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import WhatsAppFloat from "../components/WhatsAppFloat";

function Contact({ totalItems, setToast }) {
    return (
        <>
            <Navbar totalItems={totalItems} />
            <PromoBanner />

            <section className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-slate-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_28%)]" />
                <div className="relative mx-auto max-w-7xl px-6 py-14">
                    <div className="max-w-3xl">
                        <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                            Contact & devis
                        </span>

                        <h1 className="mt-5 text-5xl font-black text-slate-900">
                            Besoin d’un devis rapide
                            <span className="block text-emerald-600">
                                ou d’une commande en gros ?
                            </span>
                        </h1>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Notre équipe accompagne les professionnels partout au Maroc pour
                            le choix de produits, les volumes, les besoins récurrents et les
                            livraisons rapides.
                        </p>
                    </div>
                </div>
            </section>

            <ContactSection setToast={setToast} />
            <Footer />
            <WhatsAppFloat />
            <BackToTop />
        </>
    );
}

export default Contact;
import Navbar from "../components/Navbar";
import PromoBanner from "../components/PromoBanner";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

function Contact({ totalItems, setToast }) {
    return (
        <>
            <Navbar totalItems={totalItems} />
            <PromoBanner />

            <section className="mx-auto max-w-7xl px-6 pt-12">
                <h2 className="text-4xl font-extrabold text-white">Contact</h2>
                <p className="mt-3 max-w-2xl text-zinc-400">
                    Besoin d’un devis, d’une commande en quantité ou d’un conseil produit
                    ? Contactez-nous.
                </p>
            </section>

            <ContactSection setToast={setToast} />
            <Footer />
            <BackToTop />
        </>
    );
}

export default Contact;
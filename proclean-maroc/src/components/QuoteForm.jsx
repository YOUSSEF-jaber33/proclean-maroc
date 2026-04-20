import { useState } from "react";
import { sendContact } from "../services/api";

function QuoteForm({ setToast }) {
    const [form, setForm] = useState({
        company: "",
        fullName: "",
        phone: "",
        email: "",
        city: "",
        sector: "Restaurant",
        quantityType: "Commande ponctuelle",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("");

        if (
            !form.fullName ||
            !form.phone ||
            !form.email ||
            !form.company ||
            !form.message
        ) {
            setStatus("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        const finalMessage = `
Demande de devis professionnel

Entreprise : ${form.company}
Nom complet : ${form.fullName}
Téléphone : ${form.phone}
Email : ${form.email}
Ville : ${form.city}
Secteur : ${form.sector}
Type de besoin : ${form.quantityType}

Détails :
${form.message}
    `.trim();

        try {
            setLoading(true);

            await sendContact({
                name: form.fullName,
                email: form.email,
                message: finalMessage,
            });

            setToast("Demande de devis envoyée");
            setStatus("Votre demande a bien été envoyée. Nous vous répondrons rapidement.");

            setForm({
                company: "",
                fullName: "",
                phone: "",
                email: "",
                city: "",
                sector: "Restaurant",
                quantityType: "Commande ponctuelle",
                message: "",
            });
        } catch (error) {
            setStatus(error.message || "Erreur lors de l’envoi.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold text-slate-900">
                Demander un devis professionnel
            </h2>

            <p className="mt-3 text-slate-600">
                Remplissez ce formulaire pour recevoir une proposition adaptée à votre
                activité et à vos volumes.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
                <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Entreprise / établissement *"
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none focus:border-emerald-400"
                />

                <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Nom complet *"
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none focus:border-emerald-400"
                />

                <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Téléphone *"
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none focus:border-emerald-400"
                />

                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none focus:border-emerald-400"
                />

                <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Ville"
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none focus:border-emerald-400"
                />

                <select
                    name="sector"
                    value={form.sector}
                    onChange={handleChange}
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none focus:border-emerald-400"
                >
                    <option value="Restaurant">Restaurant</option>
                    <option value="Hôtel">Hôtel</option>
                    <option value="Bureau">Bureau</option>
                    <option value="Clinique">Clinique</option>
                    <option value="Industrie">Industrie</option>
                    <option value="Revendeur">Revendeur</option>
                    <option value="Autre">Autre</option>
                </select>

                <select
                    name="quantityType"
                    value={form.quantityType}
                    onChange={handleChange}
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none focus:border-emerald-400 md:col-span-2"
                >
                    <option value="Commande ponctuelle">Commande ponctuelle</option>
                    <option value="Approvisionnement mensuel">Approvisionnement mensuel</option>
                    <option value="Commande en gros">Commande en gros</option>
                    <option value="Demande de catalogue pro">Demande de catalogue pro</option>
                </select>

                <textarea
                    rows="6"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez vos besoins : types de produits, quantités, fréquence, contraintes, secteur, etc. *"
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none focus:border-emerald-400 md:col-span-2"
                />

                <div className="md:col-span-2 flex flex-wrap gap-4 pt-2">
                    <button
                        type="submit"
                        disabled={loading}
                        className="rounded-2xl bg-emerald-500 px-7 py-4 font-bold text-white transition hover:scale-105 hover:bg-emerald-600 disabled:opacity-60"
                    >
                        {loading ? "Envoi en cours..." : "Envoyer la demande"}
                    </button>

                    <a
                        href="https://wa.me/212600000000?text=Bonjour%20ProClean%20Maroc,%20je%20souhaite%20demander%20un%20devis%20professionnel."
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-emerald-200 bg-white px-7 py-4 font-bold text-emerald-700 transition hover:bg-emerald-50"
                    >
                        Demander via WhatsApp
                    </a>
                </div>

                {status && (
                    <p className="text-sm font-medium text-emerald-600 md:col-span-2">
                        {status}
                    </p>
                )}
            </form>
        </div>
    );
}

export default QuoteForm;
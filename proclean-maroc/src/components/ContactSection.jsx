import { useState } from "react";
import { sendContact } from "../services/api";

function ContactSection({ setToast }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("");

        if (!form.name || !form.email || !form.message) {
            setStatus("Veuillez remplir tous les champs.");
            return;
        }

        try {
            setLoading(true);
            await sendContact(form);
            setForm({
                name: "",
                email: "",
                message: "",
            });
            setStatus("Votre demande a bien été envoyée.");
            setToast("Message envoyé");
        } catch (error) {
            setStatus(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="mx-auto max-w-7xl px-6 py-10">
            <div className="grid gap-6 rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm md:grid-cols-2">
                <div>
                    <h3 className="text-3xl font-bold text-slate-900">Contact & devis</h3>
                    <p className="mt-3 text-slate-600">
                        Vous avez besoin d'une commande en volume, d'un devis ou d'un
                        conseil sur le bon produit à utiliser ? Contactez-nous.
                    </p>

                    <div className="mt-6 space-y-3 text-slate-700">
                        <p>
                            <span className="font-semibold text-emerald-600">Téléphone :</span>{" "}
                            +212 6 12 34 56 78
                        </p>
                        <p>
                            <span className="font-semibold text-emerald-600">Email :</span>{" "}
                            contact@procleanmaroc.ma
                        </p>
                        <p>
                            <span className="font-semibold text-emerald-600">Adresse :</span>{" "}
                            Casablanca, Maroc
                        </p>
                    </div>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Nom complet"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400"
                    />

                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Adresse email"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400"
                    />

                    <textarea
                        rows="5"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Votre message"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="rounded-2xl bg-emerald-500 px-6 py-3 font-bold text-white transition hover:scale-105 hover:bg-emerald-600 disabled:opacity-60"
                    >
                        {loading ? "Envoi..." : "Envoyer la demande"}
                    </button>

                    {status && (
                        <p className="text-sm font-medium text-emerald-600">{status}</p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
import { useState } from "react";
import { changeAdminPassword } from "../services/api";

function AdminPasswordForm({ setToast }) {
    const [form, setForm] = useState({
        currentPassword: "",
        newPassword: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const result = await changeAdminPassword(form);
            setSuccess(result.message);
            setToast("Mot de passe modifié");
            setForm({
                currentPassword: "",
                newPassword: "",
            });
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="mx-auto max-w-7xl px-6 pb-8">
            <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
                <h2 className="text-3xl font-extrabold text-slate-900">Sécurité admin</h2>

                <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
                    <input
                        type="password"
                        name="currentPassword"
                        value={form.currentPassword}
                        onChange={handleChange}
                        placeholder="Mot de passe actuel"
                        className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-400"
                    />

                    <input
                        type="password"
                        name="newPassword"
                        value={form.newPassword}
                        onChange={handleChange}
                        placeholder="Nouveau mot de passe"
                        className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-400"
                    />

                    <div className="md:col-span-2 flex flex-col gap-2">
                        <button
                            type="submit"
                            className="w-fit rounded-2xl bg-emerald-500 px-6 py-3 font-bold text-white transition hover:scale-105 hover:bg-emerald-600"
                        >
                            Mettre à jour le mot de passe
                        </button>

                        {error && <p className="text-sm text-red-600">{error}</p>}
                        {success && <p className="text-sm text-emerald-600">{success}</p>}
                    </div>
                </form>
            </div>
        </section>
    );
}

export default AdminPasswordForm;
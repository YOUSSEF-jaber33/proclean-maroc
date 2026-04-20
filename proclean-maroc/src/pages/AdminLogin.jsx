import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { loginAdmin } from "../services/api";

function AdminLogin({ totalItems, setToast, setIsAdminLoggedIn }) {
    const [form, setForm] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!form.username || !form.password) {
            setError("Veuillez remplir le nom d'utilisateur et le mot de passe.");
            return;
        }

        try {
            setLoading(true);

            const data = await loginAdmin({
                username: form.username.trim(),
                password: form.password,
            });

            localStorage.setItem("proclean-admin-token", data.token);
            setIsAdminLoggedIn(true);
            setToast("Connexion admin réussie");

            navigate("/admin");
        } catch (error) {
            setError(error.message || "Échec de connexion");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar totalItems={totalItems} />

            <section className="mx-auto max-w-xl px-6 py-16">
                <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
                    <h2 className="text-4xl font-extrabold text-slate-900">
                        Connexion admin
                    </h2>

                    <p className="mt-3 text-slate-600">
                        Connectez-vous pour gérer les produits, commandes et messages.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            placeholder="Nom d'utilisateur"
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-400"
                        />

                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Mot de passe"
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-400"
                        />

                        {error && (
                            <p className="text-sm font-medium text-red-600">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-2xl bg-emerald-500 px-6 py-3 font-bold text-white transition hover:scale-105 hover:bg-emerald-600 disabled:opacity-60"
                        >
                            {loading ? "Connexion..." : "Se connecter"}
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default AdminLogin;
import { useMemo, useState } from "react";
import { uploadImage } from "../services/api";

function AdminPanel({ products, addProduct, deleteProduct }) {
    const [form, setForm] = useState({
        name: "",
        price: "",
        category: "Maison",
        image: "",
        description: "",
        badge: "Nouveau",
    });

    const [error, setError] = useState("");
    const [searchProduct, setSearchProduct] = useState("");
    const [uploading, setUploading] = useState(false);

    const filteredProducts = useMemo(() => {
        return products.filter((product) =>
            product.name.toLowerCase().includes(searchProduct.toLowerCase())
        );
    }, [products, searchProduct]);

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            setUploading(true);
            setError("");

            const result = await uploadImage(file);

            setForm((prev) => ({
                ...prev,
                image: result.imageUrl,
            }));
        } catch (error) {
            setError(error.message || "Erreur upload image");
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.price || !form.description) {
            setError("Veuillez remplir le nom, le prix et la description.");
            return;
        }

        if (!form.image) {
            setError("Veuillez uploader une image.");
            return;
        }

        setError("");

        await addProduct({
            ...form,
            price: Number(form.price),
        });

        setForm({
            name: "",
            price: "",
            category: "Maison",
            image: "",
            description: "",
            badge: "Nouveau",
        });
    };

    const handleDelete = (id, name) => {
        const confirmed = window.confirm(
            `Voulez-vous vraiment supprimer le produit "${name}" ?`
        );

        if (confirmed) {
            deleteProduct(id);
        }
    };

    return (
        <section className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
                    <h2 className="text-3xl font-extrabold text-slate-900">
                        Ajouter un produit
                    </h2>

                    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Nom du produit"
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-400"
                        />

                        <input
                            type="number"
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                            placeholder="Prix"
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-400"
                        />

                        <select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-400"
                        >
                            <option value="Maison">Maison</option>
                            <option value="Cuisine">Cuisine</option>
                            <option value="Industriel">Industriel</option>
                            <option value="Hygiène">Hygiène</option>
                        </select>

                        <input
                            type="text"
                            name="badge"
                            value={form.badge}
                            onChange={handleChange}
                            placeholder="Badge"
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-400"
                        />

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900"
                        />

                        {uploading && (
                            <p className="text-sm text-emerald-600">Upload de l’image...</p>
                        )}

                        {form.image && !uploading && (
                            <p className="text-sm text-emerald-600">✅ Image prête</p>
                        )}

                        {form.image && (
                            <img
                                src={form.image}
                                alt="Prévisualisation"
                                className="h-32 w-32 rounded-xl border border-slate-200 object-cover"
                            />
                        )}

                        <textarea
                            rows="4"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Description"
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-400"
                        />

                        {error && (
                            <p className="text-sm font-medium text-red-600">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={uploading}
                            className="rounded-2xl bg-emerald-500 px-6 py-3 font-bold text-white transition hover:scale-105 hover:bg-emerald-600 disabled:opacity-50"
                        >
                            {uploading ? "Upload en cours..." : "Ajouter"}
                        </button>
                    </form>
                </div>

                <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <h2 className="text-3xl font-extrabold text-slate-900">
                            Produits existants
                        </h2>

                        <input
                            type="text"
                            value={searchProduct}
                            onChange={(e) => setSearchProduct(e.target.value)}
                            placeholder="Rechercher un produit"
                            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-400"
                        />
                    </div>

                    <div className="mt-6 space-y-4">
                        {filteredProducts.map((product) => (
                            <div
                                key={product._id}
                                className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={product.image || "/images/placeholder.jpg"}
                                        alt={product.name}
                                        className="h-14 w-14 rounded-xl object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = "/images/placeholder.jpg";
                                        }}
                                    />
                                    <div>
                                        <h3 className="font-bold text-slate-900">{product.name}</h3>
                                        <p className="text-sm text-slate-600">
                                            {product.category} • {product.price} MAD
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleDelete(product._id, product.name)}
                                    className="rounded-xl bg-red-50 px-4 py-2 font-semibold text-red-600 transition hover:bg-red-500 hover:text-white"
                                >
                                    Supprimer
                                </button>
                            </div>
                        ))}

                        {filteredProducts.length === 0 && (
                            <p className="text-sm text-slate-600">Aucun produit trouvé.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminPanel;
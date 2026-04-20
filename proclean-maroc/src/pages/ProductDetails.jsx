import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import WhatsAppFloat from "../components/WhatsAppFloat";

function ProductDetails({ totalItems, allProducts, addToCart }) {
    const { id } = useParams();

    const product = useMemo(
        () =>
            allProducts.find(
                (item) => String(item._id || item.id) === String(id)
            ),
        [allProducts, id]
    );

    if (!product) {
        return (
            <>
                <Navbar totalItems={totalItems} />

                <section className="mx-auto max-w-5xl px-6 py-16">
                    <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
                        <h2 className="text-3xl font-bold text-slate-900">
                            Produit introuvable
                        </h2>
                        <p className="mt-3 text-slate-600">
                            Le produit demandé n’existe pas ou n’est plus disponible.
                        </p>
                        <Link
                            to="/catalogue"
                            className="mt-6 inline-block rounded-2xl bg-emerald-500 px-6 py-3 font-bold text-white transition hover:bg-emerald-600"
                        >
                            Retour au catalogue
                        </Link>
                    </div>
                </section>

                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar totalItems={totalItems} />

            <section className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-slate-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_28%)]" />
                <div className="relative mx-auto max-w-7xl px-6 py-14">
                    <div className="max-w-3xl">
                        <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                            Détail produit
                        </span>

                        <h1 className="mt-5 text-5xl font-black text-slate-900">
                            {product.name}
                        </h1>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Découvrez les détails de ce produit professionnel et ajoutez-le à
                            votre panier en quelques secondes.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-10 md:grid-cols-2">
                    <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm">
                        <img
                            src={product.image || "/images/placeholder.jpg"}
                            alt={product.name}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = "/images/placeholder.jpg";
                            }}
                        />
                    </div>

                    <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
                        <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                            {product.category}
                        </span>

                        <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
                            {product.name}
                        </h2>

                        <p className="mt-4 text-lg leading-8 text-slate-600">
                            {product.description}
                        </p>

                        <div className="mt-6">
                            <span className="text-4xl font-extrabold text-emerald-600">
                                {product.price} MAD
                            </span>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <button
                                onClick={() => addToCart(product)}
                                className="rounded-2xl bg-emerald-500 px-6 py-3 font-bold text-white transition hover:scale-105 hover:bg-emerald-600"
                            >
                                Ajouter au panier
                            </button>

                            <Link
                                to="/catalogue"
                                className="rounded-2xl border border-emerald-200 bg-white px-6 py-3 font-bold text-emerald-700 transition hover:bg-emerald-50"
                            >
                                Retour au catalogue
                            </Link>
                        </div>

                        <div className="mt-10 border-t border-slate-200 pt-6">
                            <h3 className="text-xl font-bold text-slate-900">
                                Pourquoi choisir ce produit ?
                            </h3>

                            <ul className="mt-4 space-y-3 text-slate-600">
                                <li>• Produit adapté à un usage professionnel</li>
                                <li>• Convient aux besoins récurrents et intensifs</li>
                                <li>• Prix affiché en dirham marocain</li>
                                <li>• Commande possible via panier ou WhatsApp</li>
                            </ul>
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

export default ProductDetails;
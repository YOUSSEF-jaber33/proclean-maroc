import { useState } from "react";
import { createOrder } from "../services/api";

function Cart({
    cart,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
    total,
    totalItems,
    setToast,
    setCart,
}) {
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [loading, setLoading] = useState(false);

    const handleOrder = async () => {
        if (!customerName || !customerPhone || cart.length === 0) {
            setToast("Nom, téléphone et panier sont obligatoires");
            return;
        }

        try {
            setLoading(true);

            await createOrder({
                customerName,
                customerPhone,
                items: cart.map((item) => ({
                    productId: item._id || item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    image: item.image,
                })),
                total,
            });

            setToast("Commande enregistrée");
            setCart([]);
            setCustomerName("");
            setCustomerPhone("");
        } catch (error) {
            setToast(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleWhatsAppOrder = () => {
        if (cart.length === 0) {
            setToast("Votre panier est vide");
            return;
        }

        const lines = cart.map((item, index) => {
            return `${index + 1}. ${item.name} - ${item.quantity} x ${item.price} MAD`;
        });

        const message = `
Bonjour ProClean Maroc,

Je souhaite passer une commande :

${lines.join("\n")}

Total : ${total} MAD

Nom : ${customerName || "Non renseigné"}
Téléphone : ${customerPhone || "Non renseigné"}

Merci.
    `.trim();

        const whatsappUrl = `https://wa.me/212600000000?text=${encodeURIComponent(
            message
        )}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <section id="panier" className="mx-auto max-w-5xl px-6 pb-16 pt-8">
            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
                <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900">🛒 Mon Panier</h3>
                        <p className="mt-1 text-sm text-slate-600">
                            Gérez vos quantités avant de commander.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
                            {totalItems} article{totalItems > 1 ? "s" : ""}
                        </span>

                        {cart.length > 0 && (
                            <button
                                onClick={clearCart}
                                className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-500 hover:text-white"
                            >
                                Vider le panier
                            </button>
                        )}
                    </div>
                </div>

                {cart.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-10 text-center text-slate-500">
                        Votre panier est vide.
                    </div>
                ) : (
                    <>
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={item._id || item.id}
                                    className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between"
                                >
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900">{item.name}</h4>
                                        <p className="text-sm text-slate-600">
                                            {item.price} MAD / unité
                                        </p>
                                        <p className="mt-1 text-sm text-emerald-600">
                                            Sous-total : {item.price * item.quantity} MAD
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-3">
                                        <button
                                            onClick={() => decreaseQty(item._id || item.id)}
                                            className="h-10 w-10 rounded-full border border-slate-300 bg-white text-lg font-bold text-slate-900 transition hover:border-emerald-400"
                                        >
                                            -
                                        </button>

                                        <span className="min-w-[32px] text-center font-bold text-slate-900">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() => increaseQty(item._id || item.id)}
                                            className="h-10 w-10 rounded-full border border-slate-300 bg-white text-lg font-bold text-slate-900 transition hover:border-emerald-400"
                                        >
                                            +
                                        </button>

                                        <button
                                            onClick={() => removeItem(item._id || item.id)}
                                            className="rounded-xl bg-red-50 px-4 py-2 font-semibold text-red-600 transition hover:bg-red-500 hover:text-white"
                                        >
                                            Supprimer
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 border-t border-slate-200 pt-6">
                            <h4 className="text-2xl font-bold text-slate-900">
                                Total : <span className="text-emerald-600">{total} MAD</span>
                            </h4>

                            <div className="mt-6 grid gap-4 md:grid-cols-2">
                                <input
                                    type="text"
                                    placeholder="Nom du client"
                                    value={customerName}
                                    onChange={(e) => setCustomerName(e.target.value)}
                                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-400"
                                />

                                <input
                                    type="text"
                                    placeholder="Téléphone"
                                    value={customerPhone}
                                    onChange={(e) => setCustomerPhone(e.target.value)}
                                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-400"
                                />
                            </div>

                            <div className="mt-5 flex flex-wrap gap-4">
                                <button
                                    onClick={handleOrder}
                                    disabled={loading}
                                    className="rounded-2xl bg-emerald-500 px-6 py-3 font-bold text-white transition hover:scale-105 hover:bg-emerald-600 disabled:opacity-60"
                                >
                                    {loading ? "Enregistrement..." : "Enregistrer la commande"}
                                </button>

                                <button
                                    onClick={handleWhatsAppOrder}
                                    className="rounded-2xl border border-emerald-200 bg-white px-6 py-3 font-bold text-emerald-700 transition hover:bg-emerald-50"
                                >
                                    Commander via WhatsApp
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Cart;
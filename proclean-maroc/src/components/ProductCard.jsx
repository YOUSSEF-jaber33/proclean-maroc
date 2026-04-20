import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProductCard({ product, addToCart, index }) {
    const productId = product._id || product.id;

    return (
        <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm"
        >
            <Link to={`/product/${productId}`} className="block">
                <div className="relative">
                    <img
                        src={product.image || "/images/placeholder.jpg"}
                        alt={product.name}
                        className="h-52 w-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src = "/images/placeholder.jpg";
                        }}
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow">
                        {product.badge}
                    </span>
                </div>
            </Link>

            <div className="p-6">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {product.category}
                </span>

                <h4 className="mt-4 text-xl font-bold text-slate-900">
                    {product.name}
                </h4>

                <p className="mt-2 min-h-[48px] text-sm text-slate-600">
                    {product.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="mr-auto text-2xl font-extrabold text-emerald-600">
                        {product.price} MAD
                    </span>

                    <Link
                        to={`/product/${productId}`}
                        className="rounded-xl border border-emerald-200 px-4 py-2 font-bold text-emerald-700 transition hover:bg-emerald-50"
                    >
                        Voir détail
                    </Link>

                    <button
                        onClick={() => addToCart(product)}
                        className="rounded-xl bg-emerald-500 px-4 py-2 font-bold text-white transition hover:scale-105 hover:bg-emerald-600"
                    >
                        Ajouter
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default ProductCard;
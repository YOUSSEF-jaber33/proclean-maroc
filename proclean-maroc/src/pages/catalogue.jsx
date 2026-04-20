import Navbar from "../components/Navbar";
import PromoBanner from "../components/PromoBanner";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import WhatsAppFloat from "../components/WhatsAppFloat";

function Catalogue({
    products,
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
    total,
    totalItems,
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    setToast,
    setCart,
}) {
    return (
        <>
            <Navbar totalItems={totalItems} />
            <PromoBanner />

            <section className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-slate-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_28%)]" />
                <div className="relative mx-auto max-w-7xl px-6 py-14">
                    <div className="max-w-3xl">
                        <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                            Catalogue professionnel
                        </span>

                        <h1 className="mt-5 text-5xl font-black text-slate-900">
                            Nos solutions de nettoyage
                            <span className="block text-emerald-600">
                                pour entreprises et professionnels
                            </span>
                        </h1>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Découvrez notre sélection de produits pour cuisines
                            professionnelles, bureaux, sanitaires, hôtels, restaurants,
                            cliniques et environnements industriels au Maroc.
                        </p>
                    </div>
                </div>
            </section>

            <ProductList
                products={products}
                addToCart={addToCart}
                search={search}
                setSearch={setSearch}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <Cart
                cart={cart}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                removeItem={removeItem}
                clearCart={clearCart}
                total={total}
                totalItems={totalItems}
                setToast={setToast}
                setCart={setCart}
            />

            <Footer />
            <WhatsAppFloat />
            <BackToTop />
        </>
    );
}

export default Catalogue;
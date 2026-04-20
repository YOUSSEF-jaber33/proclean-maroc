import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

function ProductList({
    products,
    addToCart,
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
}) {
    return (
        <section id="catalogue" className="mx-auto max-w-7xl px-6 py-10">
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                    <h3 className="text-3xl font-bold text-slate-900">Nos Produits</h3>
                    <p className="mt-2 text-slate-600">
                        Parcourez notre catalogue et ajoutez vos articles au panier.
                    </p>
                </div>

                <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
                    <SearchBar search={search} setSearch={setSearch} />
                    <CategoryFilter
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                    <ProductCard
                        key={product._id || product.id}
                        product={product}
                        addToCart={addToCart}
                        index={index}
                    />
                ))}
            </div>

            {products.length === 0 && (
                <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white py-10 text-center text-slate-500">
                    Aucun produit ne correspond à votre recherche.
                </div>
            )}
        </section>
    );
}

export default ProductList;
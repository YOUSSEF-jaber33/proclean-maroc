import { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catalogue from "./pages/catalogue";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Admin from "./pages/Admin";
import Faq from "./pages/Faq";
import AdminLogin from "./pages/AdminLogin";
import QuoteRequest from "./pages/QuoteRequest";

import {
  fetchProducts,
  createProduct,
  removeProduct,
  getAdminProfile,
} from "./services/api";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [toast, setToast] = useState("");
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("proclean-cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    loadProducts();
    verifyAdminSession();
  }, []);

  async function loadProducts() {
    try {
      const result = await fetchProducts();
      setProducts(result.data);
    } catch (error) {
      console.error(error);
      setToast("Erreur chargement produits");
    }
  }

  async function verifyAdminSession() {
    const token = localStorage.getItem("proclean-admin-token");

    if (!token) return;

    try {
      await getAdminProfile();
      setIsAdminLoggedIn(true);
    } catch {
      localStorage.removeItem("proclean-admin-token");
      setIsAdminLoggedIn(false);
    }
  }

  useEffect(() => {
    localStorage.setItem("proclean-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast("");
    }, 2200);

    return () => clearTimeout(timer);
  }, [toast]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Tous" || product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, search, selectedCategory]);

  const addToCart = (product) => {
    const existing = cart.find(
      (item) => String(item._id || item.id) === String(product._id || product.id)
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          String(item._id || item.id) === String(product._id || product.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      setToast(`${product.name} ajouté au panier`);
      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
    setToast(`${product.name} ajouté au panier`);
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        String(item._id || item.id) === String(id)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          String(item._id || item.id) === String(id)
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(
      cart.filter((item) => String(item._id || item.id) !== String(id))
    );
    setToast("Produit supprimé du panier");
  };

  const clearCart = () => {
    setCart([]);
    setToast("Panier vidé");
  };

  const addProduct = async (newProduct) => {
    try {
      const created = await createProduct(newProduct);
      setProducts((prev) => [created, ...prev]);
      setToast("Produit ajouté");
    } catch (error) {
      console.error(error);
      setToast(error.message);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await removeProduct(id);
      setProducts((prev) =>
        prev.filter((item) => String(item._id || item.id) !== String(id))
      );
      setToast("Produit supprimé");
    } catch (error) {
      console.error(error);
      setToast(error.message);
    }
  };

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const sharedProps = {
    products: filteredProducts,
    allProducts: products,
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
    isAdminLoggedIn,
    setIsAdminLoggedIn,
    addProduct,
    deleteProduct,
    setToast,
    setCart,
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {toast && (
        <div className="fixed right-4 top-24 z-[100] rounded-2xl border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 shadow-xl">
          {toast}
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home totalItems={totalItems} />} />
        <Route path="/catalogue" element={<Catalogue {...sharedProps} />} />
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              totalItems={totalItems}
              allProducts={products}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/devis-pro"
          element={<QuoteRequest totalItems={totalItems} setToast={setToast} />}
        />
        <Route path="/about" element={<About totalItems={totalItems} />} />
        <Route
          path="/contact"
          element={<Contact totalItems={totalItems} setToast={setToast} />}
        />
        <Route path="/faq" element={<Faq totalItems={totalItems} />} />
        <Route
          path="/admin-login"
          element={
            <AdminLogin
              totalItems={totalItems}
              setToast={setToast}
              setIsAdminLoggedIn={setIsAdminLoggedIn}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <Admin
              totalItems={totalItems}
              products={products}
              addProduct={addProduct}
              deleteProduct={deleteProduct}
              isAdminLoggedIn={isAdminLoggedIn}
              setIsAdminLoggedIn={setIsAdminLoggedIn}
              setToast={setToast}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
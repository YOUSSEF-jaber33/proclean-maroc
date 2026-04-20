import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PromoBanner from "../components/PromoBanner";
import AdminPanel from "../components/AdminPanel";
import AdminStats from "../components/AdminStats";
import AdminPasswordForm from "../components/AdminPasswordForm";
import AdminContacts from "../components/AdminContacts";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import WhatsAppFloat from "../components/WhatsAppFloat";
import {
    fetchOrders,
    updateOrderStatus,
    fetchAdminStats,
    exportOrders,
} from "../services/api";

function Admin({
    totalItems,
    products,
    addProduct,
    deleteProduct,
    isAdminLoggedIn,
    setIsAdminLoggedIn,
    setToast,
}) {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [ordersError, setOrdersError] = useState("");
    const [stats, setStats] = useState(null);
    const [statusFilter, setStatusFilter] = useState("tous");
    const [searchOrder, setSearchOrder] = useState("");
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState(null);

    useEffect(() => {
        if (!isAdminLoggedIn) {
            navigate("/admin-login");
            return;
        }

        loadOrders(page);
        loadStats();
    }, [isAdminLoggedIn, page]);

    const loadOrders = async (currentPage) => {
        try {
            const result = await fetchOrders(currentPage, 5);
            setOrders(result.data);
            setPagination(result.pagination);
            setOrdersError("");
        } catch (error) {
            setOrdersError(error.message);
        }
    };

    const loadStats = async () => {
        try {
            const data = await fetchAdminStats();
            setStats(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("proclean-admin-token");
        setIsAdminLoggedIn(false);
        navigate("/admin-login");
    };

    const handleStatusChange = async (id, status) => {
        try {
            const result = await updateOrderStatus(id, status);
            setOrders((prev) =>
                prev.map((order) => (order._id === id ? result.order : order))
            );
            loadStats();
            setToast("Statut mis à jour");
        } catch (error) {
            setOrdersError(error.message);
        }
    };

    const handleExport = async () => {
        try {
            const data = await exportOrders();
            const blob = new Blob([JSON.stringify(data, null, 2)], {
                type: "application/json",
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "orders-export.json";
            a.click();
            URL.revokeObjectURL(url);
            setToast("Export téléchargé");
        } catch (error) {
            setOrdersError(error.message);
        }
    };

    const filteredOrders = useMemo(() => {
        return orders.filter((order) => {
            const matchesStatus =
                statusFilter === "tous" || order.status === statusFilter;

            const text = `${order.customerName} ${order.customerPhone}`.toLowerCase();
            const matchesSearch = text.includes(searchOrder.toLowerCase());

            return matchesStatus && matchesSearch;
        });
    }, [orders, statusFilter, searchOrder]);

    if (!isAdminLoggedIn) return null;

    return (
        <>
            <Navbar totalItems={totalItems} />
            <PromoBanner />

            <section className="mx-auto max-w-7xl px-6 pt-12">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-4xl font-extrabold text-slate-900">Admin</h2>
                        <p className="mt-3 max-w-2xl text-slate-600">
                            Gérez les produits, la sécurité, les commandes et les messages.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={handleExport}
                            className="rounded-xl border border-emerald-200 bg-white px-4 py-2 font-semibold text-emerald-700 transition hover:bg-emerald-50"
                        >
                            Export commandes
                        </button>

                        <button
                            onClick={handleLogout}
                            className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 font-semibold text-red-600 transition hover:bg-red-500 hover:text-white"
                        >
                            Déconnexion
                        </button>
                    </div>
                </div>
            </section>

            <AdminStats stats={stats} />
            <AdminPasswordForm setToast={setToast} />
            <AdminPanel
                products={products}
                addProduct={addProduct}
                deleteProduct={deleteProduct}
            />

            <section className="mx-auto max-w-7xl px-6 pb-12">
                <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <h2 className="text-3xl font-extrabold text-slate-900">
                            Commandes clients
                        </h2>

                        <div className="flex flex-col gap-3 md:flex-row">
                            <input
                                type="text"
                                value={searchOrder}
                                onChange={(e) => setSearchOrder(e.target.value)}
                                placeholder="Rechercher client ou téléphone"
                                className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-400"
                            />

                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-400"
                            >
                                <option value="tous">Tous</option>
                                <option value="nouvelle">Nouvelle</option>
                                <option value="en cours">En cours</option>
                                <option value="traitée">Traitée</option>
                                <option value="livrée">Livrée</option>
                            </select>
                        </div>
                    </div>

                    {ordersError && (
                        <p className="mt-4 text-sm text-red-600">{ordersError}</p>
                    )}

                    {filteredOrders.length === 0 ? (
                        <p className="mt-6 text-slate-600">Aucune commande pour le moment.</p>
                    ) : (
                        <div className="mt-6 space-y-4">
                            {filteredOrders.map((order) => (
                                <div
                                    key={order._id}
                                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                                >
                                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900">
                                                {order.customerName}
                                            </h3>
                                            <p className="text-sm text-slate-600">
                                                {order.customerPhone}
                                            </p>
                                            <p className="mt-2 text-sm text-emerald-600">
                                                Total : {order.total} MAD
                                            </p>
                                            <p className="mt-1 text-xs text-slate-500">
                                                {new Date(order.createdAt).toLocaleString()}
                                            </p>
                                        </div>

                                        <select
                                            value={order.status}
                                            onChange={(e) =>
                                                handleStatusChange(order._id, e.target.value)
                                            }
                                            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-900 outline-none focus:border-emerald-400"
                                        >
                                            <option value="nouvelle">Nouvelle</option>
                                            <option value="en cours">En cours</option>
                                            <option value="traitée">Traitée</option>
                                            <option value="livrée">Livrée</option>
                                        </select>
                                    </div>

                                    <div className="mt-4 border-t border-slate-200 pt-4">
                                        <p className="mb-2 font-semibold text-slate-700">Produits :</p>
                                        <ul className="space-y-1 text-sm text-slate-600">
                                            {order.items.map((item, index) => (
                                                <li key={`${order._id}-${item.productId || index}`}>
                                                    {item.name} — {item.quantity} × {item.price} MAD
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <Pagination
                        page={pagination?.page || 1}
                        totalPages={pagination?.totalPages || 1}
                        onChange={setPage}
                    />
                </div>
            </section>

            <AdminContacts />
            <Footer />
            <WhatsAppFloat />
            <BackToTop />
        </>
    );
}

export default Admin;
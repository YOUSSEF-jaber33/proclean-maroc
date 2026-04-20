function AdminStats({ stats }) {
    if (!stats) return null;

    return (
        <section className="mx-auto max-w-7xl px-6 pb-8">
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
                <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Produits</p>
                    <h3 className="mt-2 text-2xl font-extrabold text-emerald-600">
                        {stats.productsCount}
                    </h3>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Commandes</p>
                    <h3 className="mt-2 text-2xl font-extrabold text-emerald-600">
                        {stats.ordersCount}
                    </h3>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Contacts</p>
                    <h3 className="mt-2 text-2xl font-extrabold text-emerald-600">
                        {stats.contactsCount}
                    </h3>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Chiffre</p>
                    <h3 className="mt-2 text-2xl font-extrabold text-emerald-600">
                        {stats.totalRevenue} MAD
                    </h3>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Nouvelles</p>
                    <h3 className="mt-2 text-2xl font-extrabold text-emerald-600">
                        {stats.statusCounts?.nouvelle || 0}
                    </h3>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Livrées</p>
                    <h3 className="mt-2 text-2xl font-extrabold text-emerald-600">
                        {stats.statusCounts?.livrée || 0}
                    </h3>
                </div>
            </div>
        </section>
    );
}

export default AdminStats;
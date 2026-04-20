function Pagination({ page, totalPages, onChange }) {
    if (!totalPages || totalPages <= 1) return null;

    return (
        <div className="mt-6 flex items-center justify-center gap-3">
            <button
                onClick={() => onChange(page - 1)}
                disabled={page <= 1}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
                Précédent
            </button>

            <span className="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                Page {page} / {totalPages}
            </span>

            <button
                onClick={() => onChange(page + 1)}
                disabled={page >= totalPages}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
                Suivant
            </button>
        </div>
    );
}

export default Pagination;
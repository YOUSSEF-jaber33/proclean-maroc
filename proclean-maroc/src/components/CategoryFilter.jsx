function CategoryFilter({ selectedCategory, setSelectedCategory }) {
    return (
        <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-2xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-emerald-400"
        >
            <option value="Tous">Tous</option>
            <option value="Maison">Maison</option>
            <option value="Cuisine">Cuisine</option>
            <option value="Industriel">Industriel</option>
            <option value="Hygiène">Hygiène</option>
        </select>
    );
}

export default CategoryFilter;
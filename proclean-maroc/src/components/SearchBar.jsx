function SearchBar({ search, setSearch }) {
    return (
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un produit..."
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-yellow-400 md:w-[340px]"
        />
    );
}

export default SearchBar;
function DeliveryZones() {
    const cities = [
        "Casablanca",
        "Rabat",
        "Salé",
        "Tanger",
        "Marrakech",
        "Fès",
        "Agadir",
        "Meknès",
        "Oujda",
        "Kénitra",
        "Tétouan",
        "El Jadida",
    ];

    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="rounded-[2rem] border border-yellow-500/10 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-2xl">
                <div className="max-w-3xl">
                    <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                        Livraison au Maroc
                    </span>

                    <h2 className="mt-5 text-4xl font-extrabold text-white">
                        Un service pensé pour vos besoins partout au Maroc
                    </h2>

                    <p className="mt-4 leading-8 text-zinc-400">
                        Nous accompagnons les professionnels dans plusieurs villes du Maroc
                        avec une approche souple, rapide et adaptée aux commandes
                        ponctuelles ou récurrentes.
                    </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    {cities.map((city) => (
                        <span
                            key={city}
                            className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-200"
                        >
                            {city}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DeliveryZones;
function FaqSection() {
    const items = [
        {
            question: "Quels types de produits proposez-vous ?",
            answer:
                "Nous proposons des produits de nettoyage professionnels pour cuisines, surfaces, sols industriels et hygiène.",
        },
        {
            question: "Puis-je commander via WhatsApp ?",
            answer:
                "Oui, vous pouvez ajouter vos produits au panier puis envoyer votre commande via WhatsApp.",
        },
        {
            question: "Livrez-vous pour les professionnels ?",
            answer:
                "Oui, nous pouvons traiter des demandes pour commerces, restaurants, bureaux et entreprises.",
        },
        {
            question: "Puis-je demander un devis ?",
            answer:
                "Oui, la page Contact vous permet d'envoyer une demande pour un devis ou une commande en volume.",
        },
    ];

    return (
        <section className="mx-auto max-w-5xl px-6 py-12">
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
                    >
                        <h3 className="text-lg font-bold text-yellow-400">
                            {item.question}
                        </h3>
                        <p className="mt-2 text-zinc-400">{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FaqSection;
import { useEffect, useState } from "react";
import { fetchContacts } from "../services/api";
import Pagination from "./Pagination";

function AdminContacts() {
    const [contacts, setContacts] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [page, setPage] = useState(1);
    const [error, setError] = useState("");

    useEffect(() => {
        loadContacts(page);
    }, [page]);

    const loadContacts = async (currentPage) => {
        try {
            const result = await fetchContacts(currentPage, 5);
            setContacts(result.data);
            setPagination(result.pagination);
            setError("");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="mx-auto max-w-7xl px-6 pb-12">
            <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
                <h2 className="text-3xl font-extrabold text-slate-900">Messages contact</h2>

                {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

                {contacts.length === 0 ? (
                    <p className="mt-6 text-slate-600">Aucun message pour le moment.</p>
                ) : (
                    <div className="mt-6 space-y-4">
                        {contacts.map((contact) => (
                            <div
                                key={contact._id}
                                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                            >
                                <h3 className="font-bold text-slate-900">{contact.name}</h3>
                                <p className="text-sm text-emerald-600">{contact.email}</p>
                                <p className="mt-3 text-slate-700">{contact.message}</p>
                                <p className="mt-3 text-xs text-slate-500">
                                    {new Date(contact.createdAt).toLocaleString()}
                                </p>
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
    );
}

export default AdminContacts;
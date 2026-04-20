const API_URL = import.meta.env.VITE_API_URL;

function getAuthHeaders() {
    const token = localStorage.getItem("proclean-admin-token");

    return token
        ? {
            Authorization: `Bearer ${token}`,
        }
        : {};
}

async function handleResponse(res, defaultMessage) {
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
        throw new Error(data.message || defaultMessage);
    }

    return data;
}

/* =========================
   PRODUCTS
========================= */

export async function fetchProducts(page = 1, limit = 100) {
    const res = await fetch(`${API_URL}/products?page=${page}&limit=${limit}`);
    return handleResponse(res, "Erreur chargement produits");
}

export async function fetchProductById(id) {
    const res = await fetch(`${API_URL}/products/${id}`);
    return handleResponse(res, "Erreur chargement produit");
}

export async function createProduct(product) {
    const res = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders(),
        },
        body: JSON.stringify(product),
    });

    return handleResponse(res, "Erreur ajout produit");
}

export async function removeProduct(id) {
    const res = await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE",
        headers: {
            ...getAuthHeaders(),
        },
    });

    return handleResponse(res, "Erreur suppression produit");
}

/* =========================
   IMAGE UPLOAD
========================= */

export async function uploadImage(file) {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(`${API_URL}/upload`, {
        method: "POST",
        headers: {
            ...getAuthHeaders(),
        },
        body: formData,
    });

    return handleResponse(res, "Erreur upload image");
}

/* =========================
   AUTH ADMIN
========================= */

export async function loginAdmin(credentials) {
    const res = await fetch(`${API_URL}/admin/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });

    return handleResponse(res, "Erreur connexion admin");
}

export async function getAdminProfile() {
    const res = await fetch(`${API_URL}/admin/me`, {
        method: "GET",
        headers: {
            ...getAuthHeaders(),
        },
    });

    return handleResponse(res, "Session invalide");
}

export async function changeAdminPassword(payload) {
    const res = await fetch(`${API_URL}/admin/change-password`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders(),
        },
        body: JSON.stringify(payload),
    });

    return handleResponse(res, "Erreur changement mot de passe");
}

/* =========================
   ADMIN STATS
========================= */

export async function fetchAdminStats() {
    const res = await fetch(`${API_URL}/admin/stats`, {
        method: "GET",
        headers: {
            ...getAuthHeaders(),
        },
    });

    return handleResponse(res, "Erreur chargement stats");
}

/* =========================
   CONTACTS
========================= */

export async function sendContact(contact) {
    const res = await fetch(`${API_URL}/contacts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
    });

    return handleResponse(res, "Erreur envoi contact");
}

export async function fetchContacts(page = 1, limit = 10) {
    const res = await fetch(`${API_URL}/contacts?page=${page}&limit=${limit}`, {
        method: "GET",
        headers: {
            ...getAuthHeaders(),
        },
    });

    return handleResponse(res, "Erreur chargement contacts");
}

/* =========================
   ORDERS
========================= */

export async function createOrder(order) {
    const res = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    });

    return handleResponse(res, "Erreur création commande");
}

export async function fetchOrders(page = 1, limit = 10) {
    const res = await fetch(`${API_URL}/orders?page=${page}&limit=${limit}`, {
        method: "GET",
        headers: {
            ...getAuthHeaders(),
        },
    });

    return handleResponse(res, "Erreur chargement commandes");
}

export async function updateOrderStatus(id, status) {
    const res = await fetch(`${API_URL}/orders/${id}/status`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders(),
        },
        body: JSON.stringify({ status }),
    });

    return handleResponse(res, "Erreur statut commande");
}

export async function exportOrders() {
    const res = await fetch(`${API_URL}/orders/export/all`, {
        method: "GET",
        headers: {
            ...getAuthHeaders(),
        },
    });

    return handleResponse(res, "Erreur export commandes");
}
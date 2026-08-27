const API_URL = import.meta.env.VITE_API_URL;

async function handleResponse(response) {
    if (response.status === 401) {
        localStorage.removeItem("access_token");

        throw new Error("Session expired");
    }

    if (!response.ok) {
        const errorData = await response.json();

        throw new Error(
            errorData.detail || "Request failed"
        );
    }

    // 204 No Content
    if (response.status === 204) {
        return true;
    }

    return response.json();
}

export async function login(email, password) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    return handleResponse(response);
}

function getAuthHeaders() {
    const token = localStorage.getItem("access_token");

    if (!token) {
        throw new Error("Not authenticated");
    }

    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };
}

export async function getPosts() {
    const response = await fetch(`${API_URL}/posts`);

    return handleResponse(response);
}

export async function createPost(post) {
    const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(post)
    });

    return handleResponse(response);
}

export async function deletePost(post_id) {
    const response = await fetch(`${API_URL}/posts/${post_id}`, {
        method: "DELETE",
        headers: getAuthHeaders()
    });

    return handleResponse(response);
}
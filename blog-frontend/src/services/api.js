const API_URL = "http://localhost:8000";

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

    if (!response.ok) {
        throw new Error("Login failed");
    }

    return await response.json();
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

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    return await response.json();
}

export async function createPost(post) {
    const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(post)
    });

    if (!response.ok) {
        throw new Error("Failed to create post");
    }

    return await response.json();
}

export async function deletePost(post_id) {
    const response = await fetch(`${API_URL}/posts/${post_id}`, {
        method: "DELETE",
        headers: getAuthHeaders()
    });

    if (!response.ok) {
        const errorData = await response.json();

        console.error("Delete error:", errorData);

        throw new Error("Failed to delete post");
    }

    return true;
}
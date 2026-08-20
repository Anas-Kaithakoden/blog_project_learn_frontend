const API_URL = "http://localhost:8000";

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
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    });

    if (!response.ok) {
        throw new Error("Failed to create post");
    }

    return await response.json();
}
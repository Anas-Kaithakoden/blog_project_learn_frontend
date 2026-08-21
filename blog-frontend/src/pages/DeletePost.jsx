import { useState } from "react";
import { deletePost } from "../services/api";
import "./DeletePost.css";

function DeletePost({ onPostDeleted }) {
    const [postId, setPostId] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        setMessage("");
        setError("");

        try {
            await deletePost(postId);
            onPostDeleted();

            setMessage("Post deleted successfully!");
            setPostId("");

        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="delete-post-container">
            <form
                className="delete-post-form"
                onSubmit={handleSubmit}
            >
                <h1>Delete Post</h1>

                <input
                    type="number"
                    value={postId}
                    onChange={(event) => setPostId(event.target.value)}
                    placeholder="Enter Post ID"
                    required
                />

                {error && (
                    <p className="delete-error">
                        {error}
                    </p>
                )}

                {message && (
                    <p className="delete-success">
                        {message}
                    </p>
                )}

                <button type="submit">
                    Delete Post
                </button>
            </form>
        </div>
    );
}

export default DeletePost;
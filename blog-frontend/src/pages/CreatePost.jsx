import { useState } from "react";
import { createPost } from "../services/api";
import "./CreatePost.css";

function CreatePost({ onPostCreated }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const published = true

    async function handleSubmit(event) {
        event.preventDefault();

        const post = {
            title,
            content,
            published
        };

        try {
            await createPost(post);
            onPostCreated();
        } catch (error) {
            console.error(error);
        }
    }
    

    return (
        <form className="create-post-form" onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={event => setTitle(event.target.value)}
                placeholder="Title"
            />

            <textarea
                value={content}
                onChange={event => setContent(event.target.value)}
                placeholder="Content"
            />

            <button type="submit">
                Create Post
            </button>
        </form>
    );
}

export default CreatePost;
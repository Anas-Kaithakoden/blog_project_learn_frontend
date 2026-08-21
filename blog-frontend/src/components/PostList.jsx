import { useEffect, useState } from "react";
import { getPosts } from "../services/api";
import PostCard from "./PostCard";

function PostList({ refreshPosts }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadPosts() {
            try {
                const data = await getPosts();
                setPosts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        loadPosts();
    }, [refreshPosts]);
    
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section>
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    post={post}
                />
            ))}
        </section>
    );
}

export default PostList;
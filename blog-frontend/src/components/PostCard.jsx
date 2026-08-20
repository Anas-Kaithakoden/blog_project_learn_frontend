import "./PostCard.css";

function PostCard({ post }) {
    return (
        <article className="post-card">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </article>
    );
}

export default PostCard;
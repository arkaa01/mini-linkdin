// src/components/PostCard.jsx
export default function PostCard({ post }) {
  return (
    <div className="post-card" style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
      <p>{post.text}</p>
      <small>{post.author?.name} • {new Date(post.createdAt).toLocaleString()}</small>
    </div>
  );
}

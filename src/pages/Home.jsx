// pages/Home.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h2>Public Feed</h2>
      {posts.map((post) => (
        <div key={post._id}>
          <p>{post.text}</p>
          <small>{post.author.name} • {new Date(post.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}

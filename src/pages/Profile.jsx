// src/pages/Profile.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setProfile(res.data);
        return axios.get(`http://localhost:5000/api/posts/${res.data._id}`);
      })
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error loading profile/posts:", err));
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div>
      <h2>👤 Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>

      <h3>📝 Your Posts</h3>
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <p>No posts created yet.</p>
      )}
    </div>
  );
}

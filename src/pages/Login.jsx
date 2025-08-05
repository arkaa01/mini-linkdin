// pages/Login.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/login", form);
    localStorage.setItem("token", res.data.token);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" />
      <input type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

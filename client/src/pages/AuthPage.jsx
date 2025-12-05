import { useState } from "react";
import api from "../api/axiosConfig";

export default function AuthPage({ setUser }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin ? "/auth/login" : "/auth/register";
      const res = await api.post(url, form);
      localStorage.setItem("token", res.data.token);
      setUser(true);
    } catch (err) {
      setError(err.response?.data?.message || "Error");
    }
  };

  return (
    <div>
      <h3>{isLogin ? "Login" : "Register"}</h3>
      <form onSubmit={submitHandler}>
        {!isLogin && (
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        )}
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">
          {isLogin ? "Login" : "Create Account"}
        </button>
      </form>
      <p style={{ color: "red" }}>{error}</p>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create Account" : "Already have account?"}
      </button>
    </div>
  );
}

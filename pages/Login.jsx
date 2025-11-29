import React, {useState} from "react";
import { loginUser } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try{
      const res = await loginUser({ email, password });
      const data = res.data;
      localStorage.setItem("token", data.token || "");
      localStorage.setItem("user", JSON.stringify(data.user || {}));
      navigate("/");
    }catch(err){ alert(err.response?.data?.message || err.message); }
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={submit} className="card">
        <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  );
}

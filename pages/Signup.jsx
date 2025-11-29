import React, {useState} from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Signup(){
  const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try{
      await registerUser({ name, email, password });
      navigate("/login");
    }catch(err){ alert(err.response?.data?.message || err.message); }
  };
  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={submit} className="card">
        <input className="input" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn" type="submit">Create account</button>
      </form>
    </div>
  );
}

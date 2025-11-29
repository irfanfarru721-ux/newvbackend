import React, {useState} from "react";
export default function Cart(){
  const [cart,setCart] = useState(JSON.parse(localStorage.getItem("cart")||"[]"));
  const remove = (idx) => {
    const c = [...cart]; c.splice(idx,1); setCart(c); localStorage.setItem("cart", JSON.stringify(c));
  };
  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.length===0 ? <p>Cart is empty</p> : cart.map((it,idx)=>(
        <div key={idx} className="card" style={{marginBottom:10}}>
          <h4>{it.name}</h4>
          <p>₹{it.price} x {it.quantity||1}</p>
          <button onClick={()=>remove(idx)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

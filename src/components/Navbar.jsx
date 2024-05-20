import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="nav-bar">
        <img src={"main.jpg"} alt="image is here" className="logo"></img>
        <Link to="/" className="a1"><i class="fa-solid fa-house-chimney"></i>Home</Link>
        <Link to="/about"className="a2"><i class="fa-solid fa-address-card"></i>About</Link>
        <Link to="/contact"className="a3"><i class="fa-solid fa-square-phone"></i>Contact</Link>
        
      </div>
    </>
  );
}

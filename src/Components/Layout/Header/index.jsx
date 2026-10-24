
import React,{useState} from "react";
import { Link, Links } from "react-router-dom";
import "./header.css";
import { LogoutOutlined } from "@ant-design/icons";
import {
  SearchOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";

const Header = () => {
  
const userToken =localStorage.getItem("userToken");
const logout= ()=>{
  localStorage.removeItem("userToken");
  window.location.pathname="/sign-in"
}


  return (
    <header className="header">

      {/* LEFT SIDE */}
      <div className="left-side">
        <div className="logo"></div>
        <h4 className="logo-name">ROSELIA</h4>
      </div>

      {/* RIGHT SIDE */}
      <nav className="right-side">

<Link to={"/home"}>Home</Link>
<Link to={"/about"}>About</Link>
<Link to={"/shop"}>Collection</Link>
<Link to={"/favourites"}>Favourites</Link>

        

        <div className="search-icon">
          <SearchOutlined />
        </div>

        <div className="cart-icon">
          <ShoppingCartOutlined />
        </div>

{

  userToken ?
  <div className="logout" onClick={()=>logout()}>
  <LogoutOutlined /> 
        &nbsp; Logout
  </div>
        
        
      :  

 
  <Link to ={"/sign-in"} className="login-btn">
        Login
        </Link>
        
        
}



        {/* Login Button */}
        

      </nav>
    </header>
  );
};

export default Header;
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { userContext } from "../App";

const Navbar = () => {
  const { isLogin } = useContext(userContext);

  return (
    <nav className="App-navbar">
      <NavLink to="/home" className="logo">
        E-SHOP.COM
      </NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/products">Product</NavLink>
      <NavLink to="/orders">Order</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/login">{isLogin ? "Logout" : "Login"}</NavLink>
    </nav>
  );
};

export default Navbar;

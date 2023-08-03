import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../style/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "./StateProvider";
import {auth} from "../firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user){
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_icon" />
      </div>
      <div className="header_nav">
        
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_options">
            <span className="header_option1">Hello Guest</span>
            <span className="header_option2">{user ? 'Sign Out': 'Sign In'}</span>
          </div>
        </Link>

        <div className="header_options">
          <span className="header_option1">Returns</span>
          <span className="header_option2">& Order</span>
        </div>

        <div className="header_options">
          <span className="header_option1">Your</span>
          <span className="header_option2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="cart-icon">
            <ShoppingCartIcon />
            <span className="header_option2 cart-count">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

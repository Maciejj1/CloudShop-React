import React, { useContext, useEffect } from "react";
import logo from "../Assets/logo.png";
import "./Navbar.scss";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/Config";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "./BurgerMenu";
import { ShoppingCart, Home } from "@material-ui/icons";
import { IconButton, Badge } from "@material-ui/core";
import LoginIcon from "@mui/icons-material/Login";
import AddIcon from "@mui/icons-material/Add";
import "./Navbar.scss";
import { CartContext } from "../Cart/CartContext";
const Navbar = ({ user }) => {
  const { totalQty } = useContext(CartContext);
  const Phone = useMediaQuery({
    query: "(max-width: 1023px)",
  });
  const Desktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  
  const history = useNavigate();
  const handleLogout = () => {
    auth.signOut().then(() => {
      history("/");
    });
  };
  return (
    <div className="navbar-container">
      <div className="navbar-container-desktop">
        <div className="navbar-container-desktop-content">
          <img
            src={logo}
            className="navbar-container-desktop-content-image"
            alt="default"
          />
          <h2 className="navbar-container-desktop-content-title">CLOUDSHOP</h2>
        </div>
        <ul className="navbar-container-desktop-table">
        {user && (
  <li id="user" className="navbar-container-desktop-table-list">
    <button
      className="navbar-container-desktop-table-list-logout"
      onClick={handleLogout}
    >
      Wyloguj
    </button>
  </li>
)}

{!user && (
  <li id="nuser" className="navbar-container-desktop-table-list">
    <Link
      to="login"
      className="navbar-container-desktop-table-list-button2"
    >
      Logowanie
    </Link>
    <Link
      to="register"
      className="navbar-container-desktop-table-list-button2"
    >
      Rejestracja
    </Link>
  </li>
)}

          <li className="navbar-container-desktop-table-list">
            <Link
              component={Link}
              to="/cartproducts"
              className="navbar-container-desktop-table-list-button"
              aria-label="Show-cart-items"
            >
              <Badge
                className="Badge"
                badgeContent={totalQty}
                color="secondary"
              >
                <ShoppingCart />
              </Badge>
            </Link>
          </li>

          <li className="navbar-container-desktop-table-list">
            <Link
              component={Link}
              to="/"
              className="navbar-container-desktop-table-list-button"
              aria-label="Home-page"
            >
              <div className="burger-items-table-buttons-home-container">
                <Home />
              </div>
            </Link>
          </li>

          <li className="navbar-container-desktop-table-list">
            <Link
              to="/addproducts"
              className="navbar-container-desktop-table-list-button"
            >
              <AddIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
// {
//   /* {!user && (
//           <div className="appBar">
//             <Link to="login/register" className="navlinkss">
//               Zarejestruj się
//             </Link>
//             <Link to="login" className="navlinks">
//               Zaloguj się
//             </Link>
//           </div>
//         )}
//         {user && (
//           <div className="appBar">
//             <span>
//               <Navigation />
//             </span>
//             <span>
//               <button className="logout-btn" onClick={handleLogout}>
//                 Wyloguj
//               </button>
//             </span>
//           </div>
//         )} */
// }

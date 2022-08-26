import React, { useState, useContext } from "react";
import righty from "../Assets/righty.png";
import lefty from "../Assets/lefty.png";
import logo from "../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/Config";
import "./Burger.scss";
import { ShoppingCart, Home } from "@material-ui/icons";
import { IconButton, Badge } from "@material-ui/core";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../Cart/CartContext";
import AddIcon from "@mui/icons-material/Add";
import Navigation from "../Navigation/Navigation";
const BurgerMenu = ({ user }) => {
  const history = useNavigate();
  const handleLogout = () => {
    auth.signOut().then(() => {
      history("/");
    });
  };
  const { totalQty } = useContext(CartContext);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbr">
      <div className="burger">
        <div className="burger-title">
          <img src={logo} className="burger-title-image" alt="default" />
          <h2 className="burger-title-title">CLOUDSHOP</h2>
        </div>

        {open ? (
          <div className="burger-control">
            <img
              src={righty}
              alt="xdd"
              onClick={() => setOpen(!open)}
              className="burger-control-close"
            />
          </div>
        ) : (
          <div className="burger-control">
            <img
              src={lefty}
              alt="xdD"
              onClick={() => setOpen(true)}
              className="burger-control-open"
            />
          </div>
        )}
      </div>
      {open && (
        <div className="burger-items">
          <ul className="burger-items-table">
            {user ? (
              <button
                className="burger-items-table-logout"
                onClick={handleLogout}
              >
                Wyloguj
              </button>
            ) : (
              <li id="nuser" className="burger-items-table-list">
                <Link to="login" className="burger-items-table-list-button">
                  Zaloguj
                </Link>
              </li>
            )}

            <div className="burger-items-table-buttons">
              <Link
                component={Link}
                to="/cartproducts"
                className="burger-items-table-buttons-cart"
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

              <Link
                component={Link}
                to="/"
                className="burger-items-table-buttons-home"
                aria-label="Home-page"
              >
                <div className="burger-items-table-buttons-home-container">
                  <Home />
                </div>
              </Link>

              <div className="burger-items-table-buttons-add">
                <Link to="/addproducts">
                  <AddIcon />
                </Link>
              </div>
            </div>
            <div className="burger-items-table-sidebar">
              <button className="burger-items-table-sidebar-promotions">
                Promocje
              </button>
              <button className="burger-items-table-sidebar-promotions">
                Boxy
              </button>
              <button className="burger-items-table-sidebar-promotions">
                Premixy
              </button>
              <button className="burger-items-table-sidebar-promotions">
                Kity Startowe
              </button>
            </div>
          </ul>
        </div>
      )}
      {!open && <div></div>}
    </nav>
  );
};

export default BurgerMenu;

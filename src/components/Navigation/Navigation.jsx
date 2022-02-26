import React from "react";
import { ShoppingCart, Home } from "@material-ui/icons";
import { IconButton, Badge } from "@material-ui/core";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.scss";
import AddIcon from "@mui/icons-material/Add";
const Navigation = () => {
  const location = useLocation();

  return (
    <div>
      <div className="buttton">
        <button
          component={Link}
          to="/Cart"
          className="IconButton"
          aria-label="Show-cart-items"
        >
          <Badge className="Badge" badgeContent={2} color="secondary">
            <ShoppingCart />
          </Badge>
        </button>
        {location.pathname === "/" && (
          <button
            component={Link}
            to="/"
            className="HomeButton"
            aria-label="Home-page"
          >
            <div className="Home">
              <Home />
            </div>
          </button>
        )}
        <button
          component={Link}
          to="/Login"
          type="button"
          className="LoginButton"
        >
          <div className="Login">
            <LoginIcon />
          </div>
        </button>
        <div className="Add">
          <Link to="/addproducts">
            <AddIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

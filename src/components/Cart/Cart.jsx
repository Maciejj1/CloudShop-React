import React, { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";

import { ic_add } from "react-icons-kit/md/ic_add";
import { ic_remove } from "react-icons-kit/md/ic_remove";
import { iosTrashOutline } from "react-icons-kit/ionicons/iosTrashOutline";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/Config.js";
import { Icon } from "react-icons-kit";
import Navbar from "../NavBar/Navbar";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "../NavBar/BurgerMenu";
import "./Cart.scss";
const Cart = ({ user }) => {
  const { shoppingCart, dispatch, totalPrice, totalQty } =
    useContext(CartContext);
  const history = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history("/login");
      }
    });
  });
  const Phone = useMediaQuery({
    query: "(max-width: 1023px)",
  });
  const Desktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <div className="cart">
      {Phone && <BurgerMenu user={user} />}
      {Desktop && <Navbar user={user} />}

      <div className="cart-base">
        {shoppingCart.length !== 0 && <h1>Koszyk</h1>}
        {shoppingCart.length === 0 && (
          <>
            <div className="cart-base-error">
              <h2 className="cart-base-error-text">
                Nie ma nic? Zaloguj się lub odśwież stronę
              </h2>
            </div>
            <div className="cart-base-link">
              <Link to="/" className="cart-base-link-link">
                Wróć na główną stronę
              </Link>
            </div>
          </>
        )}
        {shoppingCart &&
          shoppingCart.map((cart) => (
            <div className="cart-base-content" key={cart.ProductID}>
              <div className="cart-base-content-image">
                <img
                  src={cart.ProductImg}
                  alt="nie wczytało :("
                  className="cart-base-content-image-picture"
                />
              </div>
              <div className="cart-base-content-name">
                {cart.ProductName}
                <div className="cart-base-content-name-items">
                  <div
                    className="cart-base-content-name-items-inc"
                    onClick={() =>
                      dispatch({ type: "INC", id: cart.ProductID, cart })
                    }
                  >
                    <Icon icon={ic_add} size={23} />
                  </div>

                  <div
                    className="cart-base-content-name-items-dec"
                    onClick={() =>
                      dispatch({ type: "DEC", id: cart.ProductID, cart })
                    }
                  >
                    <Icon
                      icon={ic_remove}
                      size={23}
                      className="cart-base-content-name-items-dec-icon"
                    />
                  </div>
                </div>
              </div>
              <div className="cart-base-content-price">
                Cena: {cart.ProductPrice} PLN
                <div className="cart-base-cotent-price-cancel"></div>
              </div>

              <div className="cart-base-content-cart">
                {/* Cena Finalna: {cart.TotaslProductPrice} PLN */}
              </div>
              <button
                className="cart-base-content-cart-button"
                onClick={() =>
                  dispatch({ type: "DELETE", id: cart.ProductID, cart })
                }
              >
                <Icon
                  icon={iosTrashOutline}
                  size={30}
                  className="cart-base-content-name-items-cart-button-icon"
                />
              </button>
            </div>
          ))}
        {shoppingCart.length > 0 && (
          <div className="cart-base-summary">
            <div className="cart-base-summary-heading">Podsumowanie</div>
            <div className="cart-base-summary-promotion">
              <input
                type="text"
                placeholder="Kod Rabatowy"
                className="cart-base-summary-promotion-input"
              />
              <button className="cart-base-summary-promotion-button">
                Zatwierdz
              </button>
            </div>
            <div className="cart-base-summary-price">
              <span className="cart-base-summary-price-text">Całość: </span>
              <span className="cart-base-summary-price-text">
                {totalPrice} PLN
              </span>
            </div>
            <div className="cart-base-summary-price">
              <span className="cart-base-summary-price-text">Ilość: </span>
              <span className="cart-base-summary-price-text">{totalQty}</span>
            </div>
            <Link to="cashout" className="cart-base-summary-cashout">
              <button className="btn btn-succes btn-md">Kupuj</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

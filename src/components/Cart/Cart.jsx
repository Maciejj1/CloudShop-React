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
export const Cart = ({ user }) => {
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
  return (
    <div className="cart">
      <Navbar />
      <div className="cart-base">
        {shoppingCart.length !== 0 && <h1>Koszyk</h1>}
        {shoppingCart.length === 0 && (
          <>
            <div className="cart-base-error">
              Nie ma nic? Zaloguj się lub odśwież stronę
            </div>
            <div className="cart-base-link">
              <Link to="/">Wróć na główną stronę</Link>
            </div>
          </>
        )}
        {shoppingCart &&
          shoppingCart.map((cart) => (
            <div className="cart-base-content" key={cart.ProductID}>
              <div className="cart-base-content-image">
                <img src={cart.ProductImg} alt="nie wczytało :(" />
              </div>
              <div className="cart-base-content-name">{cart.ProductName}</div>
              <div className="cart-base-content-price">
                {cart.ProductAmount}
              </div>
              <div
                className="cart-base-content-inc"
                onClick={() =>
                  dispatch({ type: "INC", id: cart.ProductID, cart })
                }
              >
                <Icon icon={ic_add} size={23} />
              </div>
              <div
                className="cart-base-content-dec"
                onClick={() =>
                  dispatch({ type: "DEC", id: cart.ProductID, cart })
                }
              >
                <Icon icon={ic_remove} size={23} />
              </div>
              <div className="cart-base-content-cart">
                {cart.TotaProductPrice}
              </div>
              <button
                className="cart-base-content-cart-button"
                onClick={() =>
                  dispatch({ type: "DELETE", id: cart.ProductID, cart })
                }
              >
                <Icon icon={iosTrashOutline} size={24} />
              </button>
            </div>
          ))}
        {shoppingCart.length > 0 && (
          <div className="cart-base-summary">
            <div className="cart-base-summary-heading">Podsumowanie</div>
            <div className="cart-base-summary-price">
              <span className="cart-base-summary-price-text">Całość: </span>
              <span className="cart-base-summary-price-text">{totalPrice}</span>
            </div>
            <div className="cart-base-summary-price">
              <span className="cart-base-summary-price-text">Items: </span>
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

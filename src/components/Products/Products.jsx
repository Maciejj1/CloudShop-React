import React, { useContext, useState } from "react";
import { Grid } from "@material-ui/core";
import { ProductsContext } from "../ProductsContext/ProductsContext";
import { IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@material-ui/core";
import Particles from "react-tsparticles";
import up from "../Assets/up.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import down from "../Assets/down.png";
import { useNavigate } from "react-router-dom";

import Popup from "../Popup/Popup";
import "./Products.scss";
import { CartContext } from "../Cart/CartContext";
const notify = () => toast("Produkt dodany do koszyka!");
const Products = (e) => {
  const { products } = useContext(ProductsContext);
  const [open, setOpen] = useState(false);
  const [openProduct, setOpenProduct] = useState(1);
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {products.length !== 0 && <h2 className="for-u">Wybrane dla ciebie</h2>}
      <div className="products">
        {/* {isOpen && (
          <Popup
            content={
              <div key={products.ProductID}>
                <b>{products.ProductName}</b>
                <img src={products.ProductImg} alt="xdd" />
              </div>
            }
            handleClose={togglePopup}
          />
        )} */}
        {products.length === 0 && <div>Wolny net lub nie ma produktów</div>}
        {products.map((product, i) => (
          <div className="products-card" key={product.ProductId}>
            <div className="products-card-name">{product.ProductName}</div>
            <div className="products-card-img">
              <img
                src={product.ProductImg}
                alt="not found"
                className="products-card-img-image"
                onClick={togglePopup}
              />
            </div>
            <div className="products-card-price">{product.ProductPrice}$</div>
            <div className="products-card-buttons">
              <button
                src={up}
                alt="xdd"
                onClick={() => {
                  navigate(`/product/${product.ProductID}`);
                }}
                key={i}
                className="products-card-buttons-more"
                value={products}
              >
                <h4>Więcej</h4>
              </button>
            </div>

            <div className="products-card-description">
              {product.ProductDescription}
            </div>
            <div></div>

            <div className="products-card-buttons">
              <button to="" className="products-card-buttons-buy">
                <h4>KUP TERAZ</h4>
              </button>

              <button
                to=""
                className="products-card-buttons-cart"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    id: product.ProductId,
                    product,
                  })
                }
              >
                <h4>DO KOSZYKA</h4>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Products;

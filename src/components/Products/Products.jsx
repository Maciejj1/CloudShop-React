import React, { useContext, useState } from "react";
import { ProductsContext } from "../ProductsContext/ProductsContext";
import up from "../Assets/up.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import down from "../Assets/down.png";
import { useNavigate } from "react-router-dom";

import Popup from "../Popup/Popup";
import "./Products.scss";
import { CartContext } from "../Cart/CartContext";

const notify = () => toast("Produkt dodany do koszyka!");

const Products = ({ input }) => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const filteredProducts = products.filter((product) =>
    product.ProductName.toLowerCase().includes(input.toLowerCase())
  );

  const handleBuyNow = () => {
    navigate("/checkout");
  };

  return (
    <>
      {filteredProducts.length !== 0 && <h2 className="for-u">Wybrane dla ciebie</h2>}
      <div className="products">
        {filteredProducts.length === 0 && <div>Brak produktów spełniających kryteria wyszukiwania</div>}
        {filteredProducts.map((product, i) => (
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
            <div className="products-card-price">
              {product.ProductPrice} PLN
            </div>
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
              <button to="" className="products-card-buttons-buy" onClick={handleBuyNow}>
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

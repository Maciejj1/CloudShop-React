import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import { ProductsContext } from "../ProductsContext/ProductsContext";
import "./DetailProduct.scss";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "../NavBar/BurgerMenu";
import { CartContext } from "../Cart/CartContext";
const DetailProduct = () => {
  const { dispatch } = useContext(CartContext);
  const { ProductID } = useParams();
  const { products } = useContext(ProductsContext);
  const product = products.find((p) => p.ProductID === ProductID);
  if (product) {
    return (
      <div>
        {products.length === 0 && <div>Wolny net lub brak produktów</div>}

        <div className="detail-base" key={product.ProductID}>
          <div className="detail-base-nav">
          </div>
          <div className="detail-base-title">
            <h2>{product.ProductName}</h2>
          </div>
          <div className="detail-base-image">
            <img src={product.ProductImg} alt="Product" />
          </div>
          <div className="detail-base-content">
            <div className="detail-base-name">
              <h2>{product.ProductName}</h2>
            </div>
            <div className="detail-base-content-price">
              <h2>{product.ProductPrice} PLN</h2>
            </div>
            <div className="detail-base-content-description">
              <p>{product.ProductDescription}</p>
            </div>
            <div className="detail-base-content-buttons">
              {/* <button onClick={
                ()=> 
              }>KUP TERAZ</button> */}
              <button
                to=""
               
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    id: product.ProductId,
                    product,
                  })
                }
              >
                DO KOSZYKA
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="error">
        <div className="error-alert">
          <div className="error-alert-error">
            <h2 className="error-alert-error-text">
              Strona, której szukasz, nie istnieje lub wystąpił problem. Wróć na
              stronę główną.
            </h2>
          </div>
        </div>
      </div>
    );
  }
};

export default DetailProduct;

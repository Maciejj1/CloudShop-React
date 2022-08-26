import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import { ProductsContext } from "../ProductsContext/ProductsContext";
import "./DetailProduct.scss";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "../NavBar/BurgerMenu";
const DetailProducts = ({ props }) => {
  const { ProductID } = useParams();
  const { products } = useContext(ProductsContext);
  const product = products.find((p) => p._id === Number(ProductID));
  const Phone = useMediaQuery({
    query: "(max-width: 1023px)",
  });
  const Desktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  console.log("dupa", props);
  if (product) {
    return (
      <div>
        {products.length === 0 && <div>Wolny net lub nie ma produktów</div>}

        <div className="detail-base" key={products.ProductID}>
          <div className="detail-base-nav">
            {Phone && <BurgerMenu />}
            {Desktop && <Navbar />}
          </div>
          <div className="detail-base-title">
            <h2>{products.ProductImg}</h2>
          </div>
          <div className="detail-base-image"></div>
          <div className="detail-base-content">
            <div className="detail-base-name">
              <h2>Name</h2>
            </div>
            <div className="detail-base-content-price">
              <h2>CENA</h2>
            </div>
            <div className="detail-base-content-description">
              <p>DUPA</p>
            </div>
            <div className="detail-base-content-buttons">
              <button>KUP TERAZ</button>
              <button>DO KOSZYKA</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="error">
        {Phone && <BurgerMenu />}
        {Desktop && <Navbar />}
        <div className="error-alert">
          <div className="error-alert-error">
            <h2 className="error-alert-error-text">
              Strona której szukasz nie istnieje lub pojawił się problem Wróć na
              stronę główną :D
            </h2>
          </div>
        </div>
      </div>
    );
  }
};

export default DetailProducts;

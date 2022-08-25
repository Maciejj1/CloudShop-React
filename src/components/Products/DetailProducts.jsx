import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import { ProductsContext } from "../ProductsContext/ProductsContext";
import "./DetailProduct.scss";
const DetailProducts = ({ props }) => {
  const { ProductID } = useParams();
  const { products } = useContext(ProductsContext);
  const product = products.find((p) => p._id === Number(ProductID));

  console.log("dupa", props);
  if (product) {
    return (
      <div>
        {products.length === 0 && <div>Wolny net lub nie ma produktów</div>}

        <div className="detail-base" key={products.ProductID}>
          <div className="detail-base-nav">
            {ProductID}
            <Navbar />
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
      <div>
        <Navbar />
        <div className="alert">
          <h2 className="alert-text">
            Strona której szukasz nie istnieje lub pojawił się problem Wróć na
            stronę główną :D
          </h2>
        </div>
      </div>
    );
  }
};

export default DetailProducts;

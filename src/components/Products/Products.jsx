import React, { useContext, useState } from "react";
import { Grid } from "@material-ui/core";
import { ProductsContext } from "../ProductsContext/ProductsContext";
import { IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@material-ui/core";
import Particles from "react-tsparticles";
import up from "../Assets/up.png";
import down from "../Assets/down.png";
import "./Products.scss";
const Products = () => {
  const { products } = useContext(ProductsContext);
  const [open, setOpen] = useState(false);
  return (
    <>
      {products.length !== 0 && <h2 className="for-u">Wybrane dla ciebie</h2>}
      <div className="products">
        {products.length === 0 && <div>Wolny net lub nie ma produktów</div>}
        {products.map((product) => (
          <div className="products-card" key={product.ProductID}>
            <div className="products-card-name">{product.ProductName}</div>

            <div className="products-card-img">
              <img
                src={product.ProductImg}
                alt="not found"
                className="products-card-img-image"
              />
            </div>

            <div className="products-card-price">{product.ProductPrice}$</div>
            {open ? (
              <img
                src={up}
                alt="xdd"
                onClick={() => setOpen(!open)}
                className="products-card-up"
              />
            ) : (
              <img
                src={down}
                alt="xdd"
                onClick={(product) => setOpen(true)}
                className="products-card-up"
              />
            )}

            {open ? (
              <div
                className="products-card-description"
                key={product.ProductID}
              >
                {product.ProductDescription}
              </div>
            ) : (
              <div></div>
            )}
            <div className="products-card-buttons">
              <Link to="" className="products-card-buttons-buy">
                <h4>KUP TERAZ</h4>
              </Link>

              <Link to="" className="products-card-buttons-cart">
                <h4>DO KOSZYKA</h4>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Products;

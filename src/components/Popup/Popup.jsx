import React, { useContext } from "react";
import { ProductsContext } from "../ProductsContext/ProductsContext";
const Popup = (props) => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="popup">
      <div className="popup-base">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;

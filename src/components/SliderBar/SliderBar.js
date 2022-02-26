import React from "react";
import "./SliderBar.scss";
const SliderBar = () => {
  return (
    <div className="slider-bar">
      <label htmlFor="search">Szukaj</label>
      <input type="text" id="search" name="search" className="searchh" />
      <div className="sliderbar-buttons">
        <button className="Promotions">Promocje</button>
        <button className="Boxs">Boxy</button>
        <button className="Premix">Premixy</button>
        <button className="Kity">Kity Startowe</button>
      </div>
    </div>
  );
};

export default SliderBar;

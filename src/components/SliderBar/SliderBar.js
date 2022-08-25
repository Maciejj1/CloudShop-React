import React from "react";
import "./SliderBar.scss";
import { db } from "../../config/Config";
const SliderBar = (props) => {
  return (
    <div className="slider">
      <div className="slider-base">
        <div className="slider-base-buttons">
          <button className="slider-base-buttons-button">Promocje</button>
          <button className="slider-base-buttons-button">Boxy</button>
        </div>
        <div className="slider-base-search">
          <label htmlFor="search" />
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Wyszukaj..."
            className="slider-base-search-input"
          />
        </div>

        <div className="slider-base-buttons">
          <button className="slider-base-buttons-button">Premixy</button>
          <button className="slider-base-buttons-button">Kity Startowe</button>
        </div>
      </div>
    </div>
  );
};

export default SliderBar;

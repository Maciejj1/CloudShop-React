import React, { useState } from "react";
import "./SliderBar.scss";

const SliderBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="slider">
      <div className="slider-base">
        {/* <div className="slider-base-buttons">
          <button className="slider-base-buttons-button">Promocje</button>
          <button className="slider-base-buttons-button">Boxy</button>
        </div> */}
        <div className="slider-base-search">
          <label htmlFor="search" />
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Wyszukaj..."
            className="slider-base-search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="slider-base-buttons-button" onClick={handleSearch}>
            Szukaj
          </button>
        </div>

        {/* <div className="slider-base-buttons">
          <button className="slider-base-buttons-button">Premixy</button>
          <button className="slider-base-buttons-button">Kity Startowe</button>
        </div> */}
      </div>
    </div>
  );
};

export default SliderBar;

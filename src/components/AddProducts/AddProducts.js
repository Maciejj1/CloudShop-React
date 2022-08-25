import React, { useState } from "react";
import "./AddProducts.scss";
import { storage, db } from "../../config/Config";
import { Link, useNavigate } from "react-router-dom";
const AddProducts = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productImg, setProductImg] = useState(null);
  const [error, setError] = useState("");
  const history = useNavigate();
  const types = ["image/png", "image/jpeg"];

  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      setError("");
    } else {
      setProductImg(null);
      setError("Ten typ pliku nie jest obsługiwany , Wybierz PNG lub JPEG");
    }
  };

  const addProduct = (e) => {
    e.preventDefault();
    const uploadTask = storage
      .ref(`product-images/${productImg.name}`)
      .put(productImg);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => setError(err.message),
      () => {
        storage
          .ref(`product-images`)
          .child(productImg.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("Products")
              .add({
                ProductName: productName,
                ProductPrice: Number(productPrice),
                ProductDescription: productDescription,
                ProductImg: url,
              })
              .then(() => {
                setProductName("");
                setProductPrice(0);
                setProductDescription("");
                setProductImg("");
                setError("");
                history("/");
                document.getElementById("file").value = "";
              })
              .catch((err) => setError(err.message));
          });
      }
    );
  };

  return (
    <div className="container">
      <div className="container-base">
        <div className="container-base-title">
          <h2 className="container-base-title-text">Dodaj Produkt</h2>
        </div>

        <hr className="container-base-hr" />
        <form
          autoComplete="off"
          className="container-base-form"
          onSubmit={addProduct}
        >
          <label htmlFor="product-name" />

          <input
            type="text"
            className="container-base-form-control"
            required
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
            placeholder="Nazwa"
          />

          <label htmlFor="product-price" />

          <input
            type="number"
            className="container-base-form-control"
            required
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
            placeholder="Cena"
          />

          <label htmlFor="product-description" />

          <input
            type="text"
            className="container-base-form-control"
            required
            onChange={(e) => setProductDescription(e.target.value)}
            value={productDescription}
            placeholder="Opis"
          />

          <label htmlFor="file" className="container-base-form-picture">
            Wybierz Zdjęcie
          </label>

          <input
            type="file"
            className="container-base-form-control"
            onChange={productImgHandler}
            id="file"
            placeholder="Zdjęcie"
          />

          <button className="container-base-button">
            <h2>Dodaj</h2>
          </button>
          <div className="container-base-button">
            <Link to="/" className="container-base-button-link">
              <h2>Powrót</h2>
            </Link>
          </div>
        </form>

        {error && <span>{error}</span>}
      </div>
    </div>
  );
};

export default AddProducts;

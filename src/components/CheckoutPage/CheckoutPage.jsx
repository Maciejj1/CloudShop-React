import React, { useState } from "react";
import Map from "./Map.js";
import "./CheckoutPage.scss"; // Importowanie arkusza stylów

const CheckoutPage = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [selectedPaczkomat, setSelectedPaczkomat] = useState("");

  const handleDeliveryMethodChange = (event) => {
    setDeliveryMethod(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleDiscountCodeChange = (event) => {
    setDiscountCode(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  const handleCardExpiryChange = (event) => {
    setCardExpiry(event.target.value);
  };

  const handleCardCVCChange = (event) => {
    setCardCVC(event.target.value);
  };

  const handlePlaceOrder = () => {
    // Logika przetwarzania zamówienia
    // Możesz wykorzystać wartości deliveryMethod, paymentMethod i discountCode do przetwarzania zamówienia

    // Przykładowa logika:
    const totalPrice = 100; // Kwota produktów
    let deliveryPrice = 10; // Kwota dostawy
    const discount = 0.5; // Rabat 50%

    if (deliveryMethod === "delivery2") {
      // Metoda dostawy 2
      // Możesz dodać własną logikę dla każdej metody dostawy
      deliveryPrice = 15;
    }

    let finalPrice = totalPrice + deliveryPrice;

    if (discountCode === "CLOUDSHOP") {
      // Kod rabatowy "CLOUDSHOP"
      finalPrice *= 1 - discount;
    }

    // Przetwarzanie zamówienia...

    // Wyświetlanie informacji o złożonym zamówieniu
    setOrderPlaced(true);
  };

  const handlePaczkomatSelect = (paczkomat) => {
    setSelectedPaczkomat(paczkomat);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <h2>Udało się złożyć zamówienie!</h2>
        <p>Dziękujemy za dokonanie zakupu. Zamówienie zostało złożone pomyślnie.</p>
        <button onClick={() => (window.location.href = "/home")}>
          Wróć do strony głównej
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Podsumowanie zakupu</h2>

      <div>
        <h3>Wybór dostawy</h3>
        <select
          className="auth-container-items-inputs-form-input"
          value={deliveryMethod}
          onChange={handleDeliveryMethodChange}
        >
          <option value="">Wybierz metodę dostawy</option>
          <option value="delivery1">Inpost</option>
          <option value="delivery2">Orlenpaczka</option>
          <option value="delivery3">Mapa</option>
        </select>
      </div>

      {deliveryMethod === "delivery3" && (
        <div>
          <Map />
        </div>
      )}

      <div>
        <h3>Wybór płatności</h3>
        <select
          className="auth-container-items-inputs-form-input"
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
        >
          <option value="">Wybierz metodę płatności</option>
          <option value="payment1">PayPal</option>
          <option value="payment2">Karta</option>
        </select>
      </div>

   

      {paymentMethod === "payment2" && (
        <div>
          {/* Logika dla karty */}
          <h3>Dane karty</h3>
          <input
            className="auth-container-items-inputs-form-input"
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="Numer karty"
          />
          <input
            className="auth-container-items-inputs-form-input"
            type="text"
            value={cardName}
            onChange={handleCardNameChange}
            placeholder="Imię i nazwisko na karcie"
          />
          <input
            className="auth-container-items-inputs-form-input"
            type="text"
            value={cardExpiry}
            onChange={handleCardExpiryChange}
            placeholder="Data ważności (MM/RR)"
          />
          <input
            className="auth-container-items-inputs-form-input"
            type="text"
            value={cardCVC}
            onChange={handleCardCVCChange}
            placeholder="Kod CVC"
          />
        </div>
      )}

      <div>
        <h3>Kod rabatowy</h3>
        <input
          className="auth-container-items-inputs-form-input"
          type="text"
          value={discountCode}
          onChange={handleDiscountCodeChange}
          placeholder="Wpisz kod rabatowy"
        />
      </div>

      {paymentMethod === "payment2" && (
        <div>
          {/* Logika dla karty */}
          <button    className="auth-container-items-inputs-form-button"
          type="submit"onClick={handlePlaceOrder}>
          <h2>Złóż zamówienie</h2>
          </button>
        </div>
      )}
   {paymentMethod === "payment1" && (
        <div>
          {/* Logika dla PayPal */}
          <button
          className="auth-container-items-inputs-form-button"
          type="submit"
            onClick={() => (window.location.href = "https://www.paypal.com")}
          >
                   <h2>Złóż zamówienie</h2>
          </button>
        </div>
      )}
      {!paymentMethod && (
        <>
          <button className="auth-container-items-inputs-form-button"
type="submit" disabled onClick={handlePlaceOrder}>
          <h2>Złóż zamówienie</h2>
          </button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
<button
className="auth-container-items-inputs-form-button"
type="submit"
>
<h2>Złóż zamówienie</h2>
</button>
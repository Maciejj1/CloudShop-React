import React, { useEffect, useState } from "react";
import { Home, AddProducts, Register, Login } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductsContextProvider } from "./components/ProductsContext/ProductsContext";
import "./App.scss";
import Particles from "react-tsparticles";
import { auth, db } from "./config/Config";
import DetailProducts from "./components/Products/DetailProducts";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/NavBar/Navbar.jsx";
import BurgerMenu from "./components/NavBar/BurgerMenu";
import { CartContextProvider } from "./components/Cart/CartContext";
import { useMediaQuery } from "react-responsive";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
const App = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 1023px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("UsersData")
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            setUser(snapshot.data().Name);
          });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <Router basename="/CloudShop">
            {isPhone && <BurgerMenu user={user} />}
            {isDesktop && <Navbar user={user} />}

            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/addproducts" element={<AddProducts />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/checkout" element={<CheckoutPage/>}/>
              <Route path="/product/:ProductID" element={<DetailProducts />} />
              <Route path="/cartproducts" element={<Cart />} />
            </Routes>
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
};

export default App;

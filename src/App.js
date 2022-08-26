import React, { Component } from "react";
import { Home, AddProducts, Register, Login } from "./components";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductsContextProvider } from "./components/ProductsContext/ProductsContext";
import "./App.scss";
import Particles from "react-tsparticles";
import { auth, db } from "./config/Config";
import DetailProducts from "./components/Products/DetailProducts";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "../src/components/Cart/CartContext";
class App extends React.Component {
  state = {
    user: null,
  };
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("RegisterDataBase")
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            this.setState({
              user: snapshot.data().Name,
            });
          });
      } else {
        this.setState({
          user: null,
        });
      }
    });
  }
  // user={this.state.user}
  render() {
    return (
      <div className="App">
        <ProductsContextProvider>
          <CartContextProvider>
            <Router basename="/CloudShop" user={this.state.user}>
              <Routes>
                <Route path="/" element={<Home user={this.state.user} />} />
                <Route path="/addproducts" element={<AddProducts />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login />} />
                <Route
                  path="/product/:ProductID"
                  element={<DetailProducts />}
                />
                <Route path="/cartproducts" element={<Cart />} />
              </Routes>
            </Router>
          </CartContextProvider>
        </ProductsContextProvider>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Home, AddProducts, Register, Login } from "./components";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductsContextProvider } from "./components/ProductsContext/ProductsContext";
import "./App.scss";
import Particles from "react-tsparticles";
import { auth, db } from "./config/Config";

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

  render() {
    return (
      <div className="App">
        <ProductsContextProvider>
          <Router>
            <Routes>
              <Route
                path="/CloudShop/"
                element={<Home user={this.state.user} />}
              />
              <Route path="/addproducts" element={<AddProducts />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </Router>
        </ProductsContextProvider>
      </div>
    );
  }
}

export default App;

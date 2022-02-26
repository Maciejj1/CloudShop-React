import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Products from "../Products/Products";
import AddProducts from "../AddProducts/AddProducts";
import SliderBar from "../SliderBar/SliderBar";
import Particles from "react-tsparticles";
import { auth } from "../../config/Config";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
const Home = ({ user }) => {
  const history = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history("/login");
      }
    });
  });

  return (
    <div className="home">
      <Navbar user={user} />
      <SliderBar />
      <Products />
    </div>
  );
};

export default Home;

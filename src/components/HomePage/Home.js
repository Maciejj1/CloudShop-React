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
import BurgerMenu from "../NavBar/BurgerMenu";
import { useMediaQuery } from "react-responsive";
const Home = ({ user }) => {
  const history = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history("/login");
      }
    });
  });
  const Phone = useMediaQuery({
    query: "(max-width: 1023px)",
  });
  const Desktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <div className="home">
      {Phone && <BurgerMenu user={user} />}
      {Desktop && <Navbar user={user} />}
      {Desktop && <SliderBar />}

      <Products />
    </div>
  );
};

export default Home;

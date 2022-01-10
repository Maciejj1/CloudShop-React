import React from 'react'
import {Link} from 'react-router-dom'
import  Navbar  from '../NavBar/Navbar'
import Products from '../Products/Products'
import  AddProducts  from '../AddProducts/AddProducts'
import SliderBar from '../SliderBar/SliderBar'
import Particles from 'react-tsparticles'
import './Home.scss'
const Home = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

    return (
        <div className='home'>
          
            <Navbar />
            <SliderBar />
            <Products />
            <div className='particle'>
            <Particles 

style={{
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%"
}}


id="tsparticles"
init={particlesInit}
loaded={particlesLoaded}
options={{

fpsLimit: 60,
interactivity: {
events: {
  onClick: {
    enable: true,
    mode: "",
  },
  onHover: {
    enable: true,
    mode: "repulse",
  },
  resize: false,
},
modes: {
  bubble: {
    distance: 200,
    duration: 2,
    opacity: 0.8,
    size: 40,
  },
  push: {
    quantity: 4,
  },
  repulse: {
    distance: 100,
    duration: 0.4,
  },
},
},
particles: {
color: {
  value: "#ffffff",
},
links: {
  color: "#ffffff",
  distance: 150,
  enable: true,
  opacity: 0.5,
  width: 1,
},
collisions: {
  enable: true,
},
move: {
  direction: "bottom",
  enable: true,
  outMode: "bounce",
  random: true,
  speed: 2,
  straight: false,
},
number: {
  density: {
    enable: true,
    area: 1000,
  },
  value: 50,
},
opacity: {
  value: 0.5,
},
shape: {
  type: "pogylon",
},
size: {
  random: true,
  value: 3,
},
},
detectRetina: true,
}}
/>
            </div>
        </div>
    )
}

export default Home;

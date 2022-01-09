import React from 'react'
import {Link} from 'react-router-dom'
import  Navbar  from '../NavBar/Navbar'
import Products from '../Products/Products'
import  AddProducts  from '../AddProducts/AddProducts'
import SliderBar from '../SliderBar/SliderBar'
const Home = () => {
    return (
        <div>
            <Navbar />
            <SliderBar />
            <Products />
        </div>
    )
}

export default Home;

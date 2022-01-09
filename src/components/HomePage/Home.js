import React from 'react'
import {Link} from 'react-router-dom'
import  Navbar  from '../NavBar/Navbar'
import Products from '../Products/Products'
import  AddProducts  from '../AddProducts/AddProducts'
const Home = () => {
    return (
        <div>
            <Navbar />
            <Products />
        </div>
    )
}

export default Home;

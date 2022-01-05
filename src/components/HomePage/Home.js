import React from 'react'
import {Link} from 'react-router-dom'
import  Navbar  from '../NavBar/Navbar'
import  Products  from '../Products/Products'
import  AddProducts  from '../AddProducts/AddProducts'
const Home = () => {
    return (
        <div>
            <Navbar />
            <Products />
            <AddProducts />
            <Link to="Products">Click me </Link>
        </div>
    )
}

export default Home

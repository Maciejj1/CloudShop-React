import React , {Component}from 'react'
import {Navbar, Products } from './components';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.scss'
const App = () => {
    debugger
    return (
        <Router>
        <div className='App'>  
        <Navbar />
           <Routes>
               <Route exact path="/cart">

               </Route>

                </Routes>
           <Products />
        </div>
        </Router>
    )
}
export default App;
import React , {Component}from 'react'
import {Navbar, Products , Home , AddProducts} from './components';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { ProductsContextProvider } from './components/ProductsContext/ProductsContext';
import './App.scss'
import Particles from 'react-tsparticles';
class App extends Component {





render() {
    return (
        <div className='App'>
         
            <ProductsContextProvider>
            <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addproducts" element={<AddProducts/>} />
 

            </Routes>
            </Router>
            </ProductsContextProvider>

        </div>
            
    );
}
}

export default App;
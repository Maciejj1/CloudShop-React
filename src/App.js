import React , {Component}from 'react'
import {Navbar, Products , Home , AddProducts} from './components';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import './App.scss'

class App extends Component {
render() {
    return (
        <div className='App'>
            <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            </Router>
        </div>
            
    );
}
}

export default App;
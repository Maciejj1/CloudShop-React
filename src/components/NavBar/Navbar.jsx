import React from 'react'
import { ShoppingCart , Home ,} from '@material-ui/icons';
import { IconButton, Badge } from '@material-ui/core'
import LoginIcon from '@mui/icons-material/Login';
import logo from '../../photos/logo.png'
import  './Navbar.scss'
import Navigation  from '../Navigation/Navigation';


const Navbar = () => {
    return (
        
        <div className="navbarr">
            <div  className="appBar"  >
                <Navigation />
                <div className="Toolbar">
                    <span  className="title" >
                        <img src={logo} alt="XD" className="image" />
                    </span>
                    <div className="grow" />
                    
                </div>

            </div>
        </div>
    )
}

export default Navbar

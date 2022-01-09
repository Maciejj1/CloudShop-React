import React from 'react'
import { ShoppingCart , Home ,} from '@material-ui/icons';
import { IconButton, Badge } from '@material-ui/core'
import LoginIcon from '@mui/icons-material/Login';
import logo from '../../photos/logo.png'
import  './Navbar.scss'
import Navigation  from '../Navigation/Navigation';
import Particles from 'react-tsparticles';

const Navbar = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
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

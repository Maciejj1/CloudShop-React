import React from 'react'
import logo from '../../photos/logo.png'
import  './Navbar.scss'
import Navigation  from '../Navigation/Navigation';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { auth } from '../../config/Config';

const Navbar = ({user}) => {
    const history = useNavigate();

    const handleLogout= () =>{
        auth.signOut().then(()=>{
            history('/login')
        })
    }

    return (

        <div className="navbarr">
            <div  className="appBar"  >

                <div className="Toolbar">
                    <span  className="title" >
                        <img src={logo} alt="XD" className="image" />
                    </span>
                    <div className="grow" />
                </div>
            </div>
            <div className='login-register-bar'>
            {!user && <div className='appBar'>
                <Link to='login/register' className='navlinkss'>Zarejestruj się</Link>
                <Link to='login' className='navlinks'>Zaloguj się</Link>
            </div>}
            {user && <div className='appBar'>
                <span><Navigation /></span>
                <span><button className='logout-btn' onClick={handleLogout}>Wyloguj</button></span>
            </div>}
            </div>
        </div>
    )
}

export default Navbar
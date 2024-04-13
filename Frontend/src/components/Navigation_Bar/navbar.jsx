import React from 'react';
import {  Link } from 'react-router-dom';
//import Login from '../login/login';
import reactLogo from '../assets/logo.svg';
import './navbar.css';
function Navbar() {
    return (
            <div className='navbar'>
                <img className='logo' src={reactLogo} alt="React Logo" />
                <nav>
                <ul className='link-pro'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/services'>Services</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contactus'>Contact US</Link>
                    </li>
                </ul>
                </nav>
                <div className='search-bar'>
                    <input type='text' placeholder='Search for items to recycle' />
                    <button>Search</button>
                </div>
                <div className='login-btn'>
                    <Link to='/login'><button>Login</button></Link>
               </div>
            </div>
    );
}

export default Navbar;
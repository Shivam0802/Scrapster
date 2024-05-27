import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import Login from '../login/login';
import reactLogo from '../assets/logo.svg';
import './navbar.css';
function Navbar() {

    const [isLoggedIn,setLoggedin] = useState(localStorage.getItem("token") != null ? true : false);
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('token');
      setLoggedin(false);
        window.location.href = '/';
    }

    const handleCustomerDetails = () => {
        try{
            let conn = new XMLHttpRequest();
            conn.open("GET","http://localhost:3000/customer/getCustomer",true);
            conn.setRequestHeader("Content-Type","application/json");
            conn.setRequestHeader("Authorization","Bearer "+localStorage.getItem('token'));
            conn.send();
            conn.onreadystatechange = function(){
                if(this.status === 200){
                    console.log("Fetched");
                    navigate('/customer',{state:JSON.parse(this.responseText)});
                }else{
                    console.log("Error");
                }
            };
        }
        catch(err){
            console.log(err);
        }
    };

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
                <div className='rightbtn'>
                <div className='profile'>
                    <Link to='/customer'><button onClick={handleCustomerDetails}>Profile</button></Link>
                </div>
                <div className='login-btn'>
                    {isLoggedIn ? <button onClick={handleLogout} >Logout</button> : <Link to='/login'><button >Login</button></Link>}
               </div>
               </div>
            </div>
    );
}

export default Navbar;
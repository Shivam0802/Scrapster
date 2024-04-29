import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signup.css'


function Signup() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        repeatpassword: '',
        type: 'customer',
        address: '',
        city: '',
        pincode: '',
        state:''
      });

    const handleChange = (e) => { 
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    
    // You can add your form submission logic here
    if (formData.type === 'customer'){
    let conn = new XMLHttpRequest();
    conn.open("POST", "http://localhost:3000/customer/registerCustomer", true);
    conn.setRequestHeader("Content-Type", "application/json");
    conn.send(JSON.stringify(formData));
    conn.onreadystatechange = function() {
        console.log(this.status);
      if (this.status === 200) {
        // let data = JSON.parse(this.responseText);
        // console.log(data);
        // toast.remove()
        toast.success("Registered Successfully");
        window.location.href = "/login";
        
      }
      else{
        toast.error("Error");
      }
    };
    }else{
        let conn = new XMLHttpRequest();
        conn.open("POST", "http://localhost:3000/collectionAgent/registerCollectionAgent", true);
        conn.setRequestHeader("Content-Type", "application/json");
        conn.send(JSON.stringify(formData));
        conn.onreadystatechange = function() {
            console.log(this.status);
          if (this.status === 200) {
            // let data = JSON.parse(this.responseText);
            // console.log(data);
            // toast.remove()
            toast.success("Registered Successfully");
            window.location.href = "/login";
            
          }
          else{
            toast.error("Error");
          }
        };
    }
}
 
    return (
        <div className="container-signup">
            <div className="App-signup">
                <div className="inner-left">
                    <ToastContainer />
                    <div className="overlay">
                        <h1>
                            Scrapster!!!
                        </h1>
                        <h2>
                            Reduce, Reuse, Recycle
                        </h2>
                        <p>
                            Welcome to the world of recycling.
                            Protect the environment and get the best price for your scrap materials.
                        </p>
                        <h2>
                            Welcome to Scrapster!!!
                        </h2>
                        <hr />
                        <h2>Or</h2>
                        <p>
                            SignUp with your social media account
                        </p>
                        <div className="social">
                            <Link to={'https://www.google.com/'} target="_blank" rel="noreferrer" ><FontAwesomeIcon className='googleIcon' icon={faGoogle} /></Link>
                            <Link to={"https://www.facebook.com/"} target="_blank" rel="noreferrer" ><FontAwesomeIcon className='facebookIcon' icon={faFacebook} /></Link>
                            <Link to={"https://www.instagram.com/"} target="_blank" rel="noreferrer" ><FontAwesomeIcon className='instagramIcon' icon={faInstagram} /></Link>
                            <Link to={"https://www.twitter.com/"} target="_blank" rel="noreferrer" ><FontAwesomeIcon className='twitterIcon' icon={faTwitter} /></Link>
                        </div>
                    </div>
                </div>
                <div className="inner-right">
                    <form className='form-container'>
                        <h2>SIGN IN</h2>
                        <p>
                            Welcome to Scrapster........😊
                            <br />Please Register to your account.

                            <br />
                            <br />
                            Already have an account?<Link to="/login">Login</Link>
                        </p>
                        <hr />
                        <div className='form-wrapper'>
                        <label htmlFor='role'>Role</label>
                        <select name="role" className='form-control'>
                            <option value="customer" className='form-option'>Customer</option>
                            <option value="admin" className='form-option'>Collector</option>
                        </select>
                        </div>
                        <label htmlFor='firstName,lastName'>Name</label>
                        <div className="form-group">
                            <input type="text" name="firstName" value={formData.firstName ?? ""} onChange={handleChange} placeholder='First Name' className='form-control' />
                            <input type="text" name="lastName" value={formData.lastName ?? ""} onChange={handleChange} placeholder='Last Name' className='form-control' />
                        </div>
                        <label htmlFor='email'>Email</label>
                        <div className="form-wrapper">
                            <input type="email" name="email" value={formData.email ?? ""} onChange={handleChange} placeholder='Email' className='form-control' />
                        </div>
                        <label htmlFor='phone'>Contact</label>
                        <div className="form-wrapper">
                            <input type="tel" name="mobile" value={formData.mobile ?? ""} onChange={handleChange} placeholder='Contact' className='form-control' />
                        </div>
                        <label htmlFor='address'>Address</label>
                        <div className="form-wrapper">
                            <input type="text" name="address" value={formData.address ?? ""} onChange={handleChange} placeholder='Address' className='form-control' />
                        </div>
                        <label htmlFor='city,zip'>City</label>
                        <div className="form-group">
                            <input type="text" name="city" value={formData.city ?? ""} onChange={handleChange} placeholder='City' className='form-control' />
                            <input type="text" name="pincode" value={formData.pincode ?? ""} onChange={handleChange} placeholder='Pincode' className='form-control' />
                        </div>
                        <label htmlFor='state'>State</label>
                        <div className="form-wrapper">
                            <input type="text" name="state" value={formData.state ?? ""} onChange={handleChange} placeholder='State' className='form-control' />
                        </div>
                        <label htmlFor='password'>Password</label>
                        <div className="form-group">
                            <input type="password" name="password" value={formData.password ?? ""} onChange={handleChange} placeholder='Password' className='form-control' />
                            <input type="password" name="repeatpassword" value={formData.repeatpassword ?? ""} onChange={handleChange} placeholder='Confirm Password' className='form-control' />
                        </div>
                        <br />
                        <div className="form-check">
                            <input type="checkbox" name="terms" checked />
                            <label htmlFor="terms">I agree to the <a>Terms and Conditions</a></label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="privacy"  checked />
                            <label htmlFor="privacy">I agree to the <a>Privacy Policy</a></label>
                        </div>
                        <br />
                        <div className="form-group">
                            <button type='submit' className="btn" onClick={(e)=>{handleSubmit(e)}}>SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
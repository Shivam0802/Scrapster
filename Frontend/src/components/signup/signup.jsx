import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './signup.css'
import { Axios } from 'axios';
import { toast } from 'react-hot-toast';

function Signup() {

    const [fname,setfname] = useState('');
    const [lname,setlname] = useState('');
    const [email,setemail] = useState('');
    const [phone,setphone] = useState('');
    const [address,setaddress] = useState('');
    const [city,setcity] = useState('');
    const [pincode,setpincode] = useState('');
    const [state,setstate] = useState('');
    const [password,setpassword] = useState('');
    const [cpassword,setcpassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:3000/customer/signup', {
                firstName: fname,
                lastName: lname,
                email: email,
                contact: phone,
                houseNo: address,
                city: city,
                pincode: pincode,
                state: state,
                password: password,
        }).then((response) => {
            console.log(response);
        })

        if(response.status === 200){
            toast.success('Registered Successfully...!!!');
            window.location.href = '/login';
        }else{
            toast.error('Invalid Credentials...Please try again...!!!');
            window.location.href = '/signup';
        }
    } catch (err) {
        toast.error("Error in SignUp");
    }
}

    const handleGoogleLogin = async () => {
        try {
            const response = await Axios.get('http://localhost:3000/customer/google');

            if (response.data) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                toast.success('Login successful');
                window.location.href = '/';
            }
        } catch (err) {
            toast.error("Error in SignUp");
        }
    }

    const handleFacebookLogin = async () => {
        try {
            const response = await Axios.get('http://localhost:3000/customer/facebook');
            if (response.data) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                toast.success('Login successful');
                window.location.href = '/';
            }
        } catch (err) {
            toast.error("Error in SignUp");
        }
    }

    const handleInstagramLogin = async () => {
        try {
            const response = await Axios.get('http://localhost:3000/customer/instagram');
            if (response.data) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                toast.success('Login successful');
                window.location.href = '/';
            }
        } catch (err) {
            toast.error("Error in SignUp");
        }
    }

    const handleTwitterLogin = async () => {
        try {
            const response = await Axios.get('http://localhost:3000/customer/twitter');
            if (response.data) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                toast.success('Login successful');
                window.location.href = '/';
            }
        } catch (err) {
            toast.error("Error in SignUp");
        }
    }

    return (
        <div className="container-signup">
            <div className="App-signup">
                <div className="inner-left">
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
                            <Link to={'https://www.google.com/'} target="_blank" rel="noreferrer" onSubmit={handleGoogleLogin}><FontAwesomeIcon className='googleIcon' icon={faGoogle} /></Link>
                            <Link to={"https://www.facebook.com/"} target="_blank" rel="noreferrer" onSubmit={handleFacebookLogin}><FontAwesomeIcon className='facebookIcon' icon={faFacebook} /></Link>
                            <Link to={"https://www.instagram.com/"} target="_blank" rel="noreferrer" onSubmit={handleInstagramLogin}><FontAwesomeIcon className='instagramIcon' icon={faInstagram} /></Link>
                            <Link to={"https://www.twitter.com/"} target="_blank" rel="noreferrer" onSubmit={handleTwitterLogin}><FontAwesomeIcon className='twitterIcon' icon={faTwitter} /></Link>
                        </div>
                    </div>
                </div>
                <div className="inner-right">
                    <form className='form-container' onSubmit={handleSubmit}>
                        <h2>SIGN IN</h2>
                        <p>
                            Welcome to Scrapster........😊
                            <br />Please Register to your account.

                            <br />
                            <br />
                            Already have an account?<Link to="/login">Login</Link>
                        </p>
                        <hr />
                        <label htmlFor='fname,lname'>Name</label>
                        <div className="form-group">
                            <input type="text" name="fname" value={fname} onChange={(e) => setfname(e.target.value)} placeholder='First Name' className='form-control' />
                            <input type="text" name="lname" value={lname} onChange={(e) => setlname(e.target.value)} placeholder='Last Name' className='form-control' />
                        </div>
                        <label htmlFor='email'>Email</label>
                        <div className="form-wrapper">
                            <input type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email' className='form-control' />
                        </div>
                        <label htmlFor='phone'>Contact</label>
                        <div className="form-wrapper">
                            <input type="tel" name="phone" value={phone} onChange={(e) => setphone(e.target.value)} placeholder='Contact' className='form-control' />
                        </div>
                        <label htmlFor='address'>Address</label>
                        <div className="form-wrapper">
                            <input type="text" name="address" value={address} onChange={(e) => setaddress(e.target.value)} placeholder='Address' className='form-control' />
                        </div>
                        <label htmlFor='city,zip'>City</label>
                        <div className="form-group">
                            <input type="text" name="city" value={city} onChange={(e) => setcity(e.target.value)} placeholder='City' className='form-control' />
                            <input type="text" name="zip" value={pincode} onChange={(e) => setpincode(e.target.value)} placeholder='Pincode' className='form-control' />
                        </div>
                        <label htmlFor='state'>State</label>
                        <div className="form-wrapper">
                            <input type="text" name="state" value={state} onChange={(e) => setstate(e.target.value)} placeholder='State' className='form-control' />
                        </div>
                        <label htmlFor='password'>Password</label>
                        <div className="form-group">
                            <input type="password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Password' className='form-control' />
                            <input type="password" name="password" value={cpassword} onChange={(e) => setcpassword(e.target.value)} placeholder='Confirm Password' className='form-control' />
                        </div>
                        <br />
                        <div className="form-check">
                            <input type="checkbox" name="terms" className='form-control' checked />
                            <label htmlFor="terms">I agree to the <a>Terms and Conditions</a></label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="privacy" className='form-control' checked />
                            <label htmlFor="privacy">I agree to the <a>Privacy Policy</a></label>
                        </div>
                        <br />
                        <div className="form-group">
                            <button type='submit' className="btn">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
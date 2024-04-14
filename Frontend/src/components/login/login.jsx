import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { toast } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import './login.css';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:3000/customer/loginCustomer', {
        email,
        password
      });

      if (response.data) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        toast.success('Login successful');
        window.location.href = '/';
      }
    } catch (err) {
      toast.error(err.response.data);
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
      toast.error(err.response.data);
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
      toast.error(err.response.data);
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
      toast.error(err.response.data);
    }
  }

  const handleTwitterLogin = async () => {
    try {
      const response = await Axios.get('http://localhost:3000/customer/twitter');
      if (response.data) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        toast.success('Login successful');
        window.location.href = '/customer';
      }
    } catch (err) {
      toast.error(err.response.data);
    }
  }



  return (
    <div className="container-login">
      <div className="App-Login">
        <div className="inner-left-login">
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
              Login with your social media account
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
          <form className='form-container' onSubmit={handleLogin}>
            <h2>Login</h2>
            <p>
              Welcome back to Scrapster........😊
              <br/>Please login to your account.
            </p>
            <hr />
            <div className="form-wrapper">
              <label htmlFor='role'>Role</label>
              <select name="role" className='form-control'>
                <option value="customer" className='form-option'>Customer</option>
                <option value="admin" className='form-option'>Collector</option>
              </select>
              <label htmlFor='username'>Email</label>
              <input type="text" name="username"  placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' required />
              <br />
              <label htmlFor='password'>Password</label>
              <input type="password" name="password"  placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' required/>
              <br />
            </div>
            
            <div className='Fgtpwd'>
            <input type="checkbox" name="remember" id='Remember' checked /><label>Remember me</label>
              <Link to="/fgtpwd">Forgot Password?</Link>
            </div>

            <br />
            {/* <input type="hidden" name="_token" id="_token" /> */}
            <button type='submit' className="btn" name='login'>Login</button>
            <p>
              Don't have an account? <Link to ="/Signup">Sign up</Link>
            </p>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
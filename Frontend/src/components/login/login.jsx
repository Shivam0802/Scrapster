import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

const emailRegex = RegExp(
  /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z]+.[a-zA-Z]/
);


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    type: 'customer'
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
    if (handleValidation()) {
      // You can add your form submission logic here
      if (formData.type === 'customer') {
        let conn = new XMLHttpRequest();
        conn.open("POST", "http://localhost:3000/customer/loginCustomer", true);
        conn.setRequestHeader("Content-Type", "application/json");
        conn.send(JSON.stringify(formData));
        conn.onreadystatechange = function () {
          if (this.status === 200) {
            //let data = JSON.parse(this.responseText);
            let data = this.responseText;
            console.log(data);
            localStorage.setItem("token", data);
            if (localStorage.getItem("token") != null) {
              console.log("Success");
              //isLoggedIn = true;
              window.location.href = "/";
            } else {
              toast.error('Invalid credentials');
            }
          };
        }
      
    } else {
      let conn = new XMLHttpRequest();
      conn.open("POST", "http://localhost:3000/collectionAgent/loginCollectionAgent", true);
      conn.setRequestHeader("Content-Type", "application/json");
      conn.send(JSON.stringify(formData));
      conn.onreadystatechange = function () {
        if (this.status === 200) {
          //let data = JSON.parse(this.responseText);
          let data = this.responseText;
          console.log(data);
          localStorage.setItem("token", data);
          if (localStorage.getItem("token") != null) {
            console.log("Success");
            //isLoggedIn = true;
            window.location.href = "/";
          } else {
            toast.error('Invalid credentials');
          }
        };
      }
    }
  }
  }

  const handleValidation = () => {
    if (formData.email === '' || formData.password === '') {
      toast.error('Please fill all the fields');
      return false;
    }
    else if (!emailRegex.test(formData.email)) {
      toast.error('Invalid email');
      return false;
    }
    else if (formData.password.length < 8) {
      toast.error('Password should be atleast 8 characters long');
      return false;
    }
    return true;
  }

  return (
    <div className="container-login">
      <div className="App-Login">
        <div className="inner-left-login">
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
              Login with your social media account
            </p>
            <div className="social">
              <Link to={'https://www.google.com/'} target="_blank" rel="noreferrer" ><FontAwesomeIcon className='googleIcon' icon={faGoogle} /></Link>
              <Link to={"https://www.facebook.com/"} target="_blank" rel="noreferrer" ><FontAwesomeIcon className='facebookIcon' icon={faFacebook} /></Link>
              <Link to={"https://www.instagram.com/"} target="_blank" rel="noreferrer" ><FontAwesomeIcon className='instagramIcon' icon={faInstagram} /></Link>
              <Link to={"https://www.twitter.com/"} target="_blank" rel="noreferrer"><FontAwesomeIcon className='twitterIcon' icon={faTwitter} /></Link>
            </div>
          </div>
        </div>
        <div className="inner-right">
          <form className='form-container' onSubmit={handleSubmit}>
            <h2>Login</h2>
            <p>
              Welcome back to Scrapster........😊
              <br />Please login to your account.
            </p>
            <hr />
            <div className="form-wrapper">
              <label htmlFor='role'>Role</label>
              <select name="role" className='form-control'>
                <option value="customer" className='form-option'>Customer</option>
                <option value="admin" className='form-option'>Collector</option>
              </select>

              <label htmlFor='username'>Email</label>
              <input type="text" name="email" placeholder='Email' value={formData.email} onChange={handleChange} className='form-control' />
              <label htmlFor='password'>Password</label>
              <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} className='form-control' />
              <br />
            </div>

            <div className='Fgtpwd'>
              <input type="checkbox" name="remember" id='Remember' checked /><label>Remember me</label>
              <Link to="/fgtpwd">Forgot Password?</Link>
            </div>

            <br />
            {/* <input type="hidden" name="_token" id="_token" /> */}
            <button type='submit' className="btn" name='login' onClick={handleSubmit}>Login</button>
            <p>
              Don't have an account? <Link to="/Signup">Sign up</Link>
            </p>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
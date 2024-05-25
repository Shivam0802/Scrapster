import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navigation_Bar/navbar';
import Homepage from './components/Pages/Homepage';
import Login from './components/login/login'
import Signup from './components/signup/signup'
import About from './components/Pages/aboutPage/About'
import Services from './components/Pages/ServicePage/Services'
import Contactus from './components/Pages/ContactPage/ContactUs'
import Custumer from './components/dashboard/custumer/customer';
import TicketGenerationModal from './components/dashboard/Modals/TicketGeneration';
//import Footer from './components/Footer/Footer';
import './App.css';

//import { useEffect, useState } from 'react'

function App() {
   return (
      <>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" element={<Homepage />} />
               <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/about" element={<About />} />
               <Route path="/services" element={<Services />} />
               <Route path="/contactus" element={<Contactus />} />
               <Route path="/customer" element={<Custumer />} />
               <Route path="/ticket" element={ localStorage.getItem('token') ? <TicketGenerationModal /> : <Login />} />
            </Routes>
            
         </BrowserRouter >
      </>
   );
}

export default App;

import React from 'react'
import Footer from '../Footer/Footer';
import Faq from '../HomepageComponent/FAQ/FAQ'
import Newsletter from '../HomepageComponent/Newsletter/newsletter';
import ServiceProvide from '../HomepageComponent/ServiceProvide/ServiceProvide';
import Contact from '../HomepageComponent/Contact/Contact';
import Aboutus from '../HomepageComponent/AboutUs/AboutUs';
import Company from '../HomepageComponent/CompanyName/Company';
import './page.css'


function Home() {
  return (
    <>
      <div className='container'>
        <div className='home'>
          <div className='home-content-left'>
            <h1>Scrapster</h1>
            <h2>Reduce,Reuse,Recycle</h2>
            <p>
              Welcome to Scrapster, your ultimate destination for transforming discarded items into valuable treasures! Dive into a world where creativity meets sustainability, where old becomes new, and where every scrap has a story to tell. Together, let's breathe new life into forgotten objects and pave the way for a brighter, greener future.
            </p>
            <div className='search-bar'>
              <input type='text' placeholder='Search for items to recycle' />
              <button>Search</button>
            </div>
          </div>
          <div className='home-content-right'>
            <div className='home-image'></div>
          </div>
        </div>
      </div>
      <Company />
      <Aboutus />
      <ServiceProvide />
      <Faq />
      <Contact />
      <Newsletter />
      <Footer />
      </>
  );
}

export default Home;
import React from "react";
import img1 from '/images/Company6.png';
import img2 from '/images/Company2.png';
import img3 from '/images/BinBag.png';
import img4 from '/images/Company4.png';
import img5 from '/images/technogreen.png';
import img6 from '/images/Company5.png';
import './Company.css';

function Company() {
  return (
    <div class="Company" >
      <div className="Company-content">
        <div className="Company-header">
          <hr />
          <h1>Associated Company</h1>
          <hr />
        </div>
        <p>
          We are Associated with the following companies
        </p>
      </div>
      <div class="Company-header">
        <div class="client-logo">
          <img src={img4} class="img-fluid" alt="Cans" />
        </div>
        <div class="client-logo">
          <img src={img6} class="img-fluid" alt="RedRock" />
        </div>
        <div class="client-logo">
          <img src={img5} class="img-fluid" alt="Technogreen" />
        </div>
        <div class="client-logo">
          <img src={img1} class="img-fluid" alt="Recyclang" />
        </div>
        <div class="client-logo">
          <img src={img3} class="img-fluid" alt="BinBag" />
        </div>
        <div class="client-logo">
          <img src={img2} class="img-fluid" alt="Shaahs" />
        </div>
      </div>
    </div>
  );
}

export default Company;
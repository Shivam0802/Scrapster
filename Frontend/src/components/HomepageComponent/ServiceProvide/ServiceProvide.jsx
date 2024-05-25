import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ServiceProvide.css';
import { faDumpster, faRecycle, faTruck } from "@fortawesome/free-solid-svg-icons";

function ServiceProvide() {
    return (
        <div className='service'>
            <div className='service-content'>
                <div className='service-header'>
                    <hr />
                    <h1>Services</h1>
                    <hr />
                </div>
                <p>
                    Scrapster offers a wide range of services to cater to your recycling needs. From e-waste disposal to metal recycling, we provide a one-stop solution for all your recycling requirements.
                </p>
            </div>
            <div className='service-image'>
                <div className='service-image-left'>
                    <FontAwesomeIcon icon={faDumpster} size='3x' style={{color:"burlywood"}} />
                    <Link to="/services"><h2>Collection</h2></Link>
                    <p>
                        Scrapster offers doorstep collection services for electronic waste. Our team of professionals will pick up your e-waste and ensure that it is disposed of in an environmentally friendly manner.
                    </p>
                </div>
                <div className='service-image-middle'>
                    <FontAwesomeIcon icon={faTruck} size='3x' style={{color:"salmon"}} />
                    <Link to="/services"><h2>Transportation</h2></Link>
                    <p>
                        Scrapster provides transportation services for the collection and disposal of recyclable materials. Our fleet of vehicles ensures safe and efficient transportation of waste to recycling facilities.
                    </p>
                </div>
                <div className='service-image-right'>
                    <FontAwesomeIcon icon={faRecycle} size='3x' style={{color:"seagreen"}} />
                    <Link to="/services"><h2>Disposal</h2></Link>
                    <p>
                        Dispose of your electronic waste responsibly with Scrapster. We collect, recycle, and refurbish electronic items to reduce environmental impact and promote sustainability.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ServiceProvide;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import img1 from "/images/image19.png";
import img2 from "/images/image8.jpg";
import img3 from "/images/image5.jpg";
import img4 from "/images/image10.jpg";
import './Service.css';

function Services() {

    const [activeImage, setActiveImage] = useState(0);

    function handleService() {
        if (localStorage.getItem('token') !== null) {
            window.location.href = '/customer';
        } else {
            window.location.href = '/login';
        }
    }

    const imageData = [
        {
            id: 1,
            img: img1
        },
        {
            id: 2,
            img: img2
        },
        {
            id: 3,
            img: img3
        },
        {
            id: 4,
            img: img4
        }
    ];

    const slideLength = imageData.length;

    const autoSlide = true;
    let slideInterval;
    let slideTimeout = 5000;

    function autoSlideStart() {
        slideInterval = setInterval(() => {
            setActiveImage((prevActiveImage) => (prevActiveImage + 1) % slideLength);
        }, slideTimeout);
    }

    useEffect(() => {
        if (autoSlide) {
            autoSlideStart();
        }
        return () => {
            clearInterval(slideInterval);
        };
    }, [activeImage]);


    return (
        <>
            <div className="ServiceP">
                <div className="ServiceP-container">
                    <div className="ServiceP-container-left">
                        <div className="ServiceP-content">
                            <h1>Scrapster</h1>
                            <h3>Recycle, Reuse, Reduce</h3>
                            <hr />
                            <p>
                                Scrapster offers a wide range of services to help you recycle, reuse, and
                                reduce waste.
                            </p>
                        </div>
                    </div>
                    <div className="ServiceP-container-right">
                        <div className="ServiceP__image">
                            {imageData.map((image, index) => {
                                return (
                                    <div className={index === activeImage ? "slide current" : "slide"} key={image.id}>
                                        {index === activeImage && (
                                            <img src={image.img} alt="aboutus" />
                                        )}
                                    </div>
                                );
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="ServiceP__dots">
                <div className="ServiceP__dots-header">
                    <hr />
                    <h2>Our Services</h2>
                    <hr />
                </div>
                <div className="ServiceP__dots-transport">
                    <div className="ServiceP__dots-transport-left">
                        <div className="ServiceP__dots-transport-left-content">
                            <h3>Transportation</h3>
                            <hr />
                            <p>
                                Scrapster provides transportation services for the collection and disposal of recyclable materials.
                                Our fleet of vehicles ensures safe and efficient transportation of waste to recycling facilities.
                                We provide transportation services to help you get rid of your waste.
                                <br />
                                <br />
                                Lets schedule your transportation services for the collection and disposal of recyclable materials.
                            </p>
                            <br />
                            <Link to="/customer"><buttun className="Transport-btn" onClick={handleService}>Need Service ?</buttun></Link>
                        </div>
                    </div>
                    <div className="ServiceP__dots-transport-right">
                        <img src="/images/image21.png" alt="Transport" />
                    </div>
                </div>
                <div className="ServiceP__dots-Collection">
                    <div className="ServiceP__dots-Collection-right">
                        <h3>Collection</h3>
                        <hr />
                        <p>
                            Scrapster offers doorstep collection services for electronic waste.
                            Our team of professionals will pick up your e-waste and ensure that it is disposed of in an environmentally friendly manner.
                            <br />
                            <br />
                            We provide collection services to help you recycle your waste.
                            Our collection services are designed to help you recycle your waste in a safe and efficient manner.
                        </p>
                        <br />
                        <Link to="/customer"><buttun className="Transport-btn" onClick={handleService}>Need Service ?</buttun></Link>
                    </div>
                    <div className="ServiceP__dots-Collection-left">
                        <img src="/images/image23.jpeg" alt="Collection" />
                    </div>
                </div>
                <div className="ServiceP__dots-Disposal">
                    <div className="ServiceP__dots-Disposal-right">
                        <h3>Disposal</h3>
                        <hr />
                        <p>
                            Dispose of your electronic waste responsibly with Scrapster.
                            We collect, recycle, and refurbish electronic items to reduce environmental impact and promote sustainability.
                            <br />
                            <br />
                            Our disposal services are designed to help you recycle your waste in a safe and efficient manner.
                            We provide disposal services to help you get rid of your waste in an environmentally friendly manner.
                        </p>
                        <br />
                        <Link to="/customer"><buttun className="Transport-btn" onClick={handleService}>Need Service ?</buttun></Link>
                    </div>
                    <div className="ServiceP__dots-Disposal-left">
                        <img src="/images/image22.jpeg" alt="Disposal" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Services;
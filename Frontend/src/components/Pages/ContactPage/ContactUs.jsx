import React from "react";
import Footer from "../../Footer/Footer";
import Contact from "../../HomepageComponent/Contact/Contact";
import img1 from "/images/image20.png";
import img2 from "/images/image10.jpg";
import img3 from "/images/image17.png";
import img4 from "/images/image18.png";
import { useState, useEffect } from "react";
import './ContactUs.css';

function ContactUs() {

    const [activeImage, setActiveImage] = useState(0);

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
            <div className="contactUs">
                <div className="contactUs__container">
                    <div className="contactUs__image-left">
                    <div className="contactUs__content">
                        <h1>Scrapster</h1>
                        <h3>Recycle, Reuse, Reduce</h3>
                        <hr />
                        <p>
                            Scrapster is a platform that connects you with the nearest scrap dealer.
                            It is an online platform that helps you to sell your scrap at the best price.
                        </p>
                    </div>
                    </div>
                    <div className="contactUs__image-right">
                    <div className="contactUs__image">
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
            <Contact />
            <Footer />
        </>
    );
}

export default ContactUs;
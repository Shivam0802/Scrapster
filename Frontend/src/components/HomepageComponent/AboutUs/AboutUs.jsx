import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "/images/image8.jpg";
import img2 from "/images/image5.jpg";
import img4 from "/images/image10.jpg";
import './AboutUs.css';

function AboutUs() {

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
        <div className="aboutus">
            <div className="aboutus-content">
                <div className="aboutus-header">
                    <hr />
                    <h1>About Us</h1>
                    <hr />
                </div>
                <p>
                    Welcome to Scrapster, Dive into a world where creativity meets sustainability, where old becomes new, and where every scrap has a story to tell.
                </p>
            </div>
            <div className="aboutus-image">
                <div className="aboutus-image-left">
                    <div className="aboutus-image-content">
                        <h2>Scrapster</h2>
                        <div className="aboutus-image-header">
                            <hr />
                            <h3>Reduce, Reuse, Recycle</h3>
                            <hr />
                        </div>
                        <p>
                            Scrapster is a platform that connects individuals who wish to recycle their old items with those who are looking for materials to create new products. Our goal is to promote sustainability and reduce waste by giving discarded items a second life. Whether you're a crafter, artist, or simply someone who wants to declutter your home, Scrapster is the place for you. Join our community today and be a part of the recycling revolution!
                        </p>
                    </div>
                    <div className="aboutus-image-dots">
                        <Link to="/about"><button className="dot-btn">Read More</button></Link>
                    </div>
                </div>
                <div className="aboutus-image-right">
                    <div className="aboutus-image-image">
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
    );
}

export default AboutUs;

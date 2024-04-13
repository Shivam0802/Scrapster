import React,{useState,useEffect} from "react";
import img1 from "/images/image25.png";
import img2 from "/images/image29.jpg";
import img3 from "/images/image28.jpg";
import img4 from "/images/image27.jpg";
import Footer from "../../Footer/Footer";
import './About.css';

function About() {

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
            <div className="about-container">
            <div className="about_head_container">
                    <div className="about__image-left">
                    <div className="about__content">
                        <h1>Scrapster</h1>
                        <h3>Recycle, Reuse, Reduce</h3>
                        <hr />
                        <p>
                            Scrapster is a platform that connects you with the nearest scrap dealer.
                            It is an online platform that helps you to sell your scrap at the best price.
                        </p>
                    </div>
                    </div>
                    <div className="about__image-right">
                    <div className="about__image">
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
                <div className="page-header">
                    <hr />
                    <h1>About Us</h1>
                    <hr />
                </div>
                <div className="page-content">
                    <div className="about-image">
                        <div className="about-company">
                            <div className="about-company-left">
                                <h2>Our Company</h2>
                                <hr style={{ width: "270px" }} />
                                <br />
                                <p>
                                    <strong>Scrapster</strong> is a platform that aims to promote recycling and
                                    sustainability by connecting users with local recycling centers and
                                    scrap collectors.
                                </p>
                                <br />
                                <p>
                                    Our user-friendly website makes it easy to find recycling centers
                                    near you, learn about sustainable practices, and discover new ways
                                    to reduce your carbon footprint.
                                </p>
                                <br />
                                <p>
                                    Whether you're looking to recycle old electronics, scrap metal, or
                                    other unwanted items, Scrapster is here to help. Together, let's
                                    work towards a cleaner, greener future for all.
                                </p>
                                <br />
                            </div>
                            <div className="about-company-right">
                                <img src={"/images/LOGO.jpg"} alt="About Company" />
                            </div>
                        </div>
                        <div className="about-mission">
                            <div className="about-mission-left">
                                <img src={"/images/image11.png"} alt="about Mission" />
                            </div>
                            <div className="about-mission-right">
                                <h2>Our Mission</h2>
                                <hr style={{ width: "240px" }} />
                                <p>
                                    Our mission is to reduce waste, conserve natural
                                    resources, and create a cleaner, greener environment for future
                                    generations. By providing a convenient way to recycle unwanted items
                                    and materials, we hope to inspire positive change and encourage
                                    responsible consumption habits.
                                </p>
                                <p>
                                    At <strong>Scrapster</strong>, we believe that every small action counts and that
                                    together, we can make a big difference. Join us in our mission to
                                    promote recycling and sustainability, and help create a more
                                    sustainable future for all.
                                <br />
                                <br />
                                    Together, let's work towards a cleaner, greener future for all.
                                </p>
                            </div>
                        </div>
                        <div className="about-vision">
                        <div className="about-vision-left">
                            <h2>Our Vision</h2>
                            <hr style={{ width: "200px" }} />
                            <p>
                                At Scrapster, we believe that every scrap has value and that every
                                effort to recycle counts. Whether you're looking to dispose of old
                                electronics, recycle scrap metal, or find a local recycling center,
                                we're here to help.  
                            </p>
                            <p>
                                Together, let's work towards a more sustainable future and create a world where waste
                                is minimized, resources are conserved, and the environment is
                                protected.
                            </p>
                            <p>
                                Our vision is to create a world where recycling is easy, convenient,
                                and accessible to all. By providing valuable information, resources,
                                and tips on sustainable living, we hope to inspire positive change and
                                encourage responsible consumption habits.
                            </p>
                            <p>
                                Join us in our mission to
                                promote recycling and sustainability, and help create a cleaner,
                                greener future for all.
                            </p>
                            </div>
                            <div className="about-vision-right">
                                <img src={"/images/image12.png"} alt="about Vision" />
                            </div>
                        </div>
                        <div className="about-awareness">
                        <div className="about-awareness-left">
                            <img src={"/images/image13.png"} alt="about Awareness" />
                        </div>
                        <div className="about-awareness-right">
                            <h2>Creating Awareness</h2>
                            <hr style={{ width: "400px" }} />
                            <p>
                                At Scrapster, we're committed to raising awareness about the importance
                                of recycling and sustainability.Through our platform, we aim to
                                educate users about the benefits of recycling, the impact of waste on
                                the environment, and the role that each of us can play in creating a
                                cleaner, greener future. 
                            </p>
                            <p>
                                By providing valuable information, resources,
                                and tips on sustainable living, we hope to inspire positive change and
                                encourage responsible consumption habits.
                            </p>
                            <p>
                                Together, let's work towards
                                a more sustainable future and create a world where waste is minimized,
                                resources are conserved, and the environment is protected.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
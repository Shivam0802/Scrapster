import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="left-footer-content">
                        <h3>Scrapster</h3>
                        <p>
                            Reduce, Reuse, Recycle
                            <br />
                            Welcome to Scrapster, your ultimate destination for transforming discarded items into valuable treasures! Dive into a world where creativity meets sustainability, where old becomes new, and where every scrap has a story to tell. Together, let's breathe new life into forgotten objects and pave the way for a brighter, greener future.
                        </p>
                    </div>
                    <div className="left-footer-content">
                        <h3>Connect</h3>
                        <div className="left-footer-icons">
                            <Link to="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="facebook" icon={faFacebook} size="2x" />
                            </Link>
                            <Link to="https://www.twitter.com/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="twitter" icon={faTwitter} size="2x" />
                            </Link>
                            <Link to="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="instagram" icon={faInstagram} size="2x" />
                            </Link>
                            <Link to="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="linkedin" icon={faLinkedin} size="2x" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="center-left">
                        <div className="center-footer-content">
                            <h3>Explore</h3>
                            <Link to="/"><p style={{color:"white"}}>Home</p></Link>
                            <Link to="/about"><p style={{color:"white"}}>About</p></Link>
                            <Link to="/services"><p style={{color:"white"}}>Services</p></Link>
                            <Link to="/contactus"><p style={{color:"white"}}>Contact</p></Link>
                        </div>
                    </div>
                    <div className="center-right">
                        <div className="center-footer-content">
                            <h3>Legal</h3>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>Disclaimer</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-footer-content">
                        <h3>Address:
                            <p>
                                123 Green Street, Eco City
                                Green Land, GL 12345
                            </p>
                        </h3>

                        <h3>Contact:
                            <p>
                                +91-8763189623
                                <br />
                                +91-5487563214
                            </p>
                        </h3>
                        <h3>Email:
                            <p>
                                scrapster2024@gmail.org
                            </p>
                        </h3>
                    </div>
                </div>
            </div>
            <hr />
            <p>Scrapster &copy; 2024</p>
        </div>
    );
};

export default Footer;
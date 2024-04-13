import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Contact.css';
import { faAddressBook, faClock, faEnvelopesBulk, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return (
        <div className='contact'>
            <div className='contact-p'>
                <div className='contact-header'>
                    <hr />
                    <h1>Contact Us</h1>
                    <hr />
                </div>
                <p>
                    Have a question or feedback? We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
                </p>
            </div>
            <div className='contact-content'>
                <div className='contact-left'>
                    <div className="contact-left-left">
                        <div className='contact-info-item'>
                            <FontAwesomeIcon icon={faEnvelopesBulk} size='2x' />
                            <h3>Email Us</h3>
                            <p>
                                scrapster2024@gmail.org
                            </p>
                        </div>
                        <div className='contact-info-item'>
                            <FontAwesomeIcon icon={faPhoneSquare} size='2x' />
                            <h3>Contact Us</h3>
                            <p>
                                +91-8763189623
                                <br />
                                +91-5487563214
                            </p>
                        </div>
                    </div>
                    <div className="contact-left-right">
                        <div className='contact-info-item'>
                            <FontAwesomeIcon icon={faAddressBook} size='2x' />
                            <h3>Address</h3>
                            <p>
                                123 Green Street, Eco City
                                <br />
                                Green Land, GL 12345
                            </p>
                        </div>
                        <div className='contact-info-item'>
                            <FontAwesomeIcon icon={faClock} size='2x' />
                            <h3>Hours</h3>
                            <p>Monday - Friday: <br />9:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                </div>

                <div className='contact-right'>
                    <form>
                        <div className='contact-form-flex'>
                            <div className='contact-form-group-flex'>
                                <label htmlFor='name'>Name</label>
                                <input placeholder="Name" type='text' id='name' name='name' required />
                            </div>

                            <div className='contact-form-group-flex'>
                                <label htmlFor='email'>Email</label>
                                <input placeholder="Email" type='email' id='email' name='email' required />
                            </div>
                        </div>
                        <div className='contact-form-group'>
                            <label htmlFor='subject'>Subject</label>
                            <input placeholder="Subject" type='text' id='subject' name='subject' required />
                        </div>

                        <div className='contact-form-group'>
                            <label htmlFor='message'>Message</label>
                            <textarea placeholder="Message" id='message' name='message' required />
                        </div>
                        <div className='contact-form-group-button'>
                            <button type='submit' className="Contact-btn">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
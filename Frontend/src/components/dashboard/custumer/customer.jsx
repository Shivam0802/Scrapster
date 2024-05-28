import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { Link } from 'react-router-dom';
import TicketGenerationModal from '../Modals/TicketGeneration';
import './customer.css';
import { faCheckCircle, faUser } from '@fortawesome/free-solid-svg-icons';

const Custumer = () => {

    const location = useLocation();
    const {firstName,lastName,email,contact} = location.state || {};


    const [showTicketModal, setShowTicketModal] = useState(false);

    if (!localStorage.getItem('token')) {
        window.location.href = '/login';
    }

    const handleDelete = () => {
        try{
            let conn = new XMLHttpRequest();
            conn.open("DELETE", "http://localhost:3000/customer/deleteCustomer", true);
            conn.setRequestHeader("Content-Type", "application/json");
            conn.setRequestHeader("Authorization", "Bearer " + localStorage.getItem('token'));
            conn.send();
            conn.onreadystatechange = function () {
                if (this.status === 200) {
                    console.log("Deleted");
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                } else {
                    console.log("Error");
                }
            };
        }
        catch(err){
            console.log(err);
        }
    };

    // useEffect(() => {
    //     const fetchDetails = async () => {
    //         try {
    //             let conn = new XMLHttpRequest();
    //             conn.open("GET", "http://localhost:3000/customer/getCustomer", true);
    //             conn.setRequestHeader("Content-Type", "application/json");
    //             conn.setRequestHeader("Authorization", "Bearer " + localStorage.getItem('token'));
    //             conn.send();
    //             conn.onreadystatechange = function () {
    //                 if (this.status === 200) {
    //                     let data = JSON.parse(this.responseText);
    //                     console.log(data);
    //                     setuser(data);
    //                 } else {
    //                     console.log("Error");
    //                 }
    //             };
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };

    //     fetchDetails();
    // }, []);



    return (
        <>
            <div className='Customer-Dashboard'>
                <div className='Customer-Background'>
                    <div className='Customer-Header'>
                        <div className='Customer-Title'>
                            <h3>Abhimanyu Singh</h3>
                            <div className='setting-button'>
                                <FontAwesomeIcon icon={faUser} size='lg' />
                            </div>
                        </div>
                        <div className='Customer-Profile-wrap'>
                            <div className='Profile-Picture'>
                                <img src="/images/image24.jpeg" alt="Profile pic" />
                            </div>
                        </div>
                        <div className='Profile-left'>
                            <hr />
                            <div className='Profile-Details'>
                                <div className='Profile-Name'>
                                    <div className='Profile-Name-text'>
                                        <h3>Name:</h3>
                                        {/* <p>{user.firstName + " " + user.lastName}</p> */}
                                        <p>{firstName ?? "Name"+ " " + (lastName ?? "")}</p>
                                    </div>
                                    <div className='Profile-Name-Check'>
                                        <FontAwesomeIcon className='Font-Check' icon={faCheckCircle} size='lg' />
                                    </div>
                                </div>
                                <div className='Profile-Email'>
                                    <h3>Email:</h3>
                                    <p>{email ?? "email"}</p>
                                </div>
                                <div className='Profile-Contact'>
                                    <h3>Contact:</h3>
                                    <p>{contact ?? "Phone Number"}</p>
                                </div>
                            </div>
                        </div>
                        <div className='Profile-button'>
                            <button className='btn-Edit'>Edit</button>
                            <button className='btn-Delete' onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                    <div className='Profile-Content'>
                        <div className='Profile-Container'>
                            <div className='Profile-center'>
                                <div className='Profile-Ticket'>
                                    <h3>Ticket </h3>
                                    <hr />
                                    <div className='Ticket-number'>
                                        <p><strong>TicketId:</strong>TR2571YU36 </p>
                                        <p><strong>Date:</strong>20-03-2024</p>
                                        <p><strong>Status:</strong>Completed</p>
                                    </div>
                                    <div className='Ticket-number'>
                                        <p><strong>TicketId:</strong>RJ684DE584</p>
                                        <p><strong>Date: </strong>25-05-2024</p>
                                        <p><strong>Status: </strong>Pending</p>
                                    </div>
                                    <div className='Ticket-number'>
                                        <p><strong>TicketId:</strong>RJ684DE584</p>
                                        <p><strong>Date: </strong>31-07-2024</p>
                                        <p><strong>Status: </strong>Pending</p>
                                    </div>
                                    <button className='btn-View'>View All</button>
                                </div>
                                <div className='button-Ticket'>
                                    <button className='btn-Ticket' onClick={() => setShowTicketModal(true)}>Generate Ticket</button>
                                </div>
                                {showTicketModal && <TicketGenerationModal closeTicket={() => setShowTicketModal(false)} />}
                            </div>
                            <div className='Profile-right'>
                                <div className='notification'>
                                    <h3>Notification</h3>
                                    <hr />
                                    <div className='notification-number'>
                                        <div className='notification-content'>
                                            <p>Your ticket has been accepted
                                                by the agent on </p>
                                            <p><strong>Date:</strong> 06-12-2023</p>
                                        </div>
                                        <div className='notification-content'>
                                            <p>Your ticket has been generated on </p>
                                            <p><strong>Date:</strong> 20-04-2024</p>
                                        </div>
                                        <div className='notification-content'>
                                            <p>Your ticket is Pending generated on </p>
                                            <p><strong>Date:</strong> 18-04-2024</p>
                                        </div>
                                        <div className='notification-content'>
                                            <p>Your ticket is Pending generated on </p>
                                            <p><strong>Date:</strong> 20-05-2024</p>
                                        </div>
                                        <div className='notification-content'>
                                            <p>Your ticket is accepted generated on </p>
                                            <p><strong>Date:</strong> 7-04-2024</p>
                                        </div>
                                        <button className='btn-View'>View All</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Custumer;
import React,{useState} from 'react';
import Footer from '../../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { Link } from 'react-router-dom';
import TicketGenerationModal from '../Modals/TicketGeneration';
import './customer.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Custumer = () => {

    const [showTicketModal, setShowTicketModal] = useState(false);

    return (
        <>
            <div className='Customer-Dashboard'>
                <div className='Customer-Background'>
                <div className='Customer-Header'>
                    <div className='Customer-Title'>
                        <h3>UserName</h3>
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
                        <h1>Profile</h1>
                        <p>Username: </p>
                        <p>Email: </p>
                        <p>Phone Number: </p>
                        <p>Address: </p>
                    </div>
                    <div className='Profile-button'>
                        <button className='btn-Edit'>Edit</button>
                        <button className='btn-Delete'>Delete</button>
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
                                <button className='btn-Ticket' onClick={()=>setShowTicketModal(true)}>Generate Ticket</button>
                            </div>
                            {showTicketModal && <TicketGenerationModal closeTicket={setShowTicketModal}/>}
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
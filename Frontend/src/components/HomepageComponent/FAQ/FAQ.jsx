import React,{useState} from "react";
import './Faq.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

function FAQ() {

    const [show, setShow] = useState(false);

    const faqData = [
        {
            Ques: "What is Scrapster?",
            Ans: "Scrapster is a platform that connects individuals who have unwanted items with those who can repurpose them. We believe that every item has value, and we aim to reduce waste by facilitating the exchange of goods between users. Whether you're looking to get rid of old furniture or searching for materials for your next DIY project, Scrapster has you covered."
        },
        {
            Ques: "How does Scrapster work?",
            Ans: "Scrapster operates on a simple principle: one person's trash is another person's treasure. Users can post listings for items they no longer need, which can then be claimed by other users. By giving away unwanted items, you can help reduce waste and contribute to a more sustainable future."
        },
        {
            Ques: "Is Scrapster free to use?",
            Ans: "Yes, Scrapster is completely free to use. There are no fees or charges associated with posting listings or claiming items. Our goal is to promote sustainability and reduce waste, and we believe that everyone should have access to the resources they need to make a positive impact on the environment."
        },
        {
            Ques: "How can I get involved with Scrapster?",
            Ans: "Getting involved with Scrapster is easy! Simply create an account on our platform and start browsing listings in your area. If you have items to give away, you can post them on the site for other users to claim. You can also connect with other users in your community and collaborate on projects to repurpose items and reduce waste."
        },
    ];

    return (
        <div className='faq'>
            <div className="faq-left">
                <h1>Frequently Asked Question</h1>
                <hr className="faq-hr" />
                <p>Here are some common questions about Scrapster. If you have any other questions, feel free to contact us.</p>
            </div>
            <div className="faq-right">
                <div className='faq-content'>
                    {faqData.map((data, index) => {
                        return (
                            <div key={index} className='faq-card'>
                                <div className="faq-Ques">
                                    <h3>{data.Ques}</h3>
                                    <div className="faq-icon" onClick={() =>setShow(!show)}>
                                        <FontAwesomeIcon  icon={faChevronCircleDown} />
                                    </div>
                                </div>
                                {
                                    show && <p className="Answer">{data.Ans}</p>
                                }
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
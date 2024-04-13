import React from "react";
import "./newsletter.css";

function Newsletter() {
    return (
        <>
            <div className="newsletter">
                <h1>Subscribe to our newsletter</h1>
                <p>
                    Stay up-to-date with the latest news, trends, and tips in the world of
                    recycling and sustainability.
                </p>
                <div className='search-bar-newsletter'>
                    <input type='text' placeholder='Enter your E-mail address' />
                    <button>Subscribe</button>
                </div>
            </div>
        </>
    );
}

export default Newsletter;
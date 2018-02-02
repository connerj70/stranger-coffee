import React from 'react';
import "./Footer.css";

export default function Footer(props) {
    return (
        <div className="footer">
            <div>© StrangerCoffee, Inc.</div>
            <div>
                <span>Terms</span>
                <span>Privacy</span>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram" aria-hidden="true"></i>
            </div>
        </div>
    )
}
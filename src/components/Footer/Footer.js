import React from 'react';
import "./Footer.css";

export default function Footer(props) {
    return (
        <div className="footer">
            <div>© StrangerCoffee, Inc.</div>
            <div>
                <span>Terms</span>
                <span>Privacy</span>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
        </div>
    )
}
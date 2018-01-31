import React from 'react';
import "./InfoCard.css";

export default function InfoCard(props) {
    return (
        <div className="info-card">
            <div>{props.icon}</div>
            <div>{props.heading}</div>
            <div id="info-card_text">{props.text}</div>
        </div>
    )
}
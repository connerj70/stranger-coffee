import React, {Component} from 'react';
import "./Notification.css";
import {Link} from 'react-router-dom';

class Notification extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        console.log(this.props.notifications);
        let notificationsToDisplay = this.props.notifications.map(value => {
            return (
                <Link to='/profile'><div className="notification_notification-container">
                    <h1>MATCH</h1>
                    <h2>Location: {value.location}</h2>
                    <h2>Date: {value.date}</h2>
                    <h2>Match: {value.name}</h2>
                </div>
                </Link>
            )
        })

        return (
            <div className="notification">
            {
                this.props.open 
                ? 
                <div className="notification_inner-container">
                    {notificationsToDisplay}
                </div>
                :
                null
            }
            </div>
        )
    }
}

export default Notification;
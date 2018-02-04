import React, {Component} from 'react';
import "./Notification.css";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteNotification} from '../../ducks/reducer';

class Notification extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let notificationsToDisplay
        if(this.props.notifications) {
        notificationsToDisplay = this.props.notifications.map((value,i) => {
            console.log(value);
            return (
                <Link onClick={()=> this.props.deleteNotification(value.notification_id)} key={i} to='/profile'><div className="notification_notification-container">
                    <h1>MATCH</h1>
                    <h2>Location: {value.location}</h2>
                    <h2>Date: {value.date}</h2>
                    <h2>Match: {value.name}</h2>
                </div>
                </Link>
            )
        })
        } else {
            notificationsToDisplay = <div className="notification_notification-container"></div>;
        }

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

export default connect(null, {deleteNotification})(Notification);
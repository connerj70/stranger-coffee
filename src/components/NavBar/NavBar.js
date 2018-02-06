import React, {Component} from 'react';
import "./NavBar.css";
import axios from 'axios';
import {getUserInfo, getCurrentMatch, getNotifications} from '../../ducks/reducer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Notification from '../Notification/Notification';


class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {open: false};
    }

    componentDidMount() {
        this.props.getUserInfo();
        this.props.getCurrentMatch(this.props.user.id);
        this.props.getNotifications(this.props.user.id);
    }

    toggleOpen() {
        this.setState((prevState) => {
            return {
                open: !prevState.open
            };
        });
    }

    render() {
        return (
            <div className={this.props.background ? 'navbar_wrapper navbar_wrapper-background' : "navbar_wrapper"}>
                <div className="navbar_left-div">
                    <Link to="/"><h1>StrangerCoffee</h1></Link>
                </div>
                <div className="navbar_right-div">
                    <Notification notifications={this.props.notifications} open={this.state.open}/>
                    {
                    !this.props.user.name ? 
                    <a href={process.env.REACT_APP_LOGIN}>Login/Signup</a>
                    :
                    <div className='navbar_flex'>
                        <div className="navbar_notification-div-container">
                        {
                            this.props.notifications.length
                            ?
                            <div className="navbar_notification-div">1</div>
                             :
                            null
                        }
                        </div>
                        <div onClick={()=>this.toggleOpen()}>
                            <i className="fas fa-bell"></i>
                        </div>
                        <div>About</div>
                        <Link to="/profile"><div>Profile</div></Link>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        currentMatch: state.currentMatch,
        notifications: state.notifications
    }
}

export default connect(mapStateToProps, {getUserInfo, getCurrentMatch, getNotifications})(NavBar)
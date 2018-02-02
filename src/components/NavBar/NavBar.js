import React, {Component} from 'react';
import "./NavBar.css";
import axios from 'axios';
import {getUserInfo, getCurrentMatch} from '../../ducks/reducer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.props.getUserInfo();
        this.props.getCurrentMatch(this.props.user.id);
    }

    render() {
        return (
            <div className={this.props.background ? 'navbar_wrapper navbar_wrapper-background' : "navbar_wrapper"}>
                <div className="navbar_left-div">
                    <Link to="/"><h1>StrangerCoffee</h1></Link>
                </div>
                <div className="navbar_right-div">
                    {
                    !this.props.user.name ? 
                    <a href={process.env.REACT_APP_LOGIN}>Login/Signup</a>
                    :
                    <div className='navbar_flex'>
                        {/* {
                            this.props.currentMatch.location
                            ? */}
                            <div className="navbar_notification-div">1</div>
                            {/* :
                            null
                        } */}
                        <i className="fas fa-bell"></i>
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
        currentMatch: state.currentMatch
    }
}

export default connect(mapStateToProps, {getUserInfo, getCurrentMatch})(NavBar)
import React, {Component} from 'react';
import "./NavBar.css";
import axios from 'axios';
import {getUserInfo} from '../../ducks/reducer';
import {connect} from 'react-redux';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        return (
            <div className="navbar_wrapper">
                <div className="navbar_left-div">
                    <h1>StrangerCoffee</h1>
                </div>
                <div className="navbar_right-div">
                    {
                    !this.props.user.name ? 
                    <a href={process.env.REACT_APP_LOGIN}>Login/Signup</a>
                    :
                    <div className='navbar_flex'>
                        <div>About</div>
                        <div>Profile</div>
                        <div>Browse</div>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUserInfo})(NavBar)
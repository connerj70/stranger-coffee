import React, {Component} from 'react';
import "./Profile.css";
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import {connect} from 'react-redux';

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="profile">
                <NavBar background={true} />
                <div className="profile_card">
                    <div className="profile_card-image-container">
                        <img alt="user profile" src={this.props.user.image} />
                    </div>
                    <div className="profile_card-user-info-container">
                        <div className="profile_card-user-sub-info-container">
                            <div className="profile_card-bold">Name: </div>
                            <div>{this.props.user.name}</div>
                        </div>
                        <div className="profile_card-user-sub-info-container">
                            <div className="profile_card-bold">Nickname: </div>
                            <div>{this.props.user.nickname}</div>
                        </div>
                        <div className="profile_card-user-sub-info-container">
                            <div className="profile_card-bold">City: </div>
                            <div>{this.props.user.city}</div>
                        </div>
                        <div className="profile_card-user-sub-info-container">
                            <div className="profile_card-bold">State: </div>
                            <div>{this.props.user.state}</div>
                        </div>
                        <div className="profile_card-user-sub-info-container">
                            <div className="profile_card-bold">Hobby: </div>
                            <div>{this.props.user.hobby}</div>
                        </div>
                    </div>
                </div>
                <div className="profile_button-container">
                    <button className="profile_edit-button">EDIT</button>
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps({user}) {
    return {
        user
    }
}

export default connect(mapStateToProps, null)(Profile);
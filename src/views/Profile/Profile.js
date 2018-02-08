import React, {Component} from 'react';
import "./Profile.css";
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import {connect} from 'react-redux';
import {getUserInfo} from '../../ducks/reducer';
import {Link} from 'react-router-dom';
import Match from '../../components/Match/Match';

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        return (
            <div className="profile">
            {
            this.props.user.username ? 
                <div className='profile_inner-container'>
                    <NavBar background={true} />
                    <div className="profile_card-and-button-container">
                        <div className="profile_card">
                            <div className="profile_card-image-container">
                                <img alt="user profile" src={this.props.user.profile_pic} />
                            </div>
                            <div className="profile_card-user-info-container">
                                <div className="profile_card-user-sub-info-container">
                                    <div className="profile_card-bold">Username: </div>
                                    <div>{this.props.user.username}</div>
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
                            <Link to="/editprofile"><button className="profile_edit-button">EDIT</button></Link>
                        </div>
                    </div>
                    <Match title="Current Match" id={this.props.user.id} city={this.props.user.city}/>
                   
                    <div className="profile_review-button-container">
                        <Link to="/createreview"><button id="profile_review-match-button">Review Previous Match</button></Link>
                    </div>
                    <Footer />
                </div>
                :
                <div>
                    Unauthorized
                    <Link to="/">Return to home page.</Link>
                </div>
            }
            </div>
        )
    }
}

function mapStateToProps({user}) {
    return {
        user
    }
}

export default connect(mapStateToProps, {getUserInfo})(Profile);
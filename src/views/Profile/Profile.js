import React, {Component} from 'react';
import "./Profile.css";
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import {connect} from 'react-redux';
import {getUserInfo, deleteMatch, getNotifications} from '../../ducks/reducer';
import {Link} from 'react-router-dom';
import Match from '../../components/Match/Match';
import Modal from '../../components/Modal/Modal';
import {ToastContainer, toast} from 'react-toastify';


class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {modal: false}
        this.handleTrashClick = this.handleTrashClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
    }

    componentDidMount() {
        this.props.getUserInfo();
        this.props.getNotifications(this.props.user.id);
    }

    handleTrashClick() {
        this.setState((prevState) => {
            return {
                modal: !prevState.modal
            };
        });
    }

    handleDeleteClick() {
        this.props.deleteMatch(this.props.currentMatch.match_id);
        this.setState({
            modal: false
        });
        toast.success('Match deleted');
    }

    handleCancelClick() {
        this.setState({
            modal: false
        });
    }

    render() {
        return (
            <div className="profile">
            {
            this.props.user.username ? 
                <div className='profile_inner-container'>
                    <NavBar background={true} />
                    <div className="profile_card-and-button-container">
                        <div className="profile_card-header">
                            <h1>Profile</h1>
                        </div>
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
                    <Match handleTrashClick={this.handleTrashClick} title="Current Match" id={this.props.user.id} city={this.props.user.city}/>
                   
                    <div className="profile_review-button-container">
                        <Link to="/createreview"><button id="profile_review-match-button">Review Previous Match</button></Link>
                    </div>
                    <Footer />
                    {
                        this.state.modal ?
                    <Modal  handleDeleteClick={this.handleDeleteClick} handleCancelClick={this.handleCancelClick} title="Delete" text="Are you sure you want to delete this match?" button1Text="Delete" button2Text="Cancel"/>
                    :
                    null
                    }
                </div>
                :
                <div>
                    Unauthorized
                    <Link to="/">Return to home page.</Link>
                </div>
            }
            <ToastContainer autoClose={1000} />
            </div>
        )
    }
}

function mapStateToProps({user, currentMatch}) {
    return {
        user,
        currentMatch
    }
}

export default connect(mapStateToProps, {getUserInfo, deleteMatch, getNotifications})(Profile);
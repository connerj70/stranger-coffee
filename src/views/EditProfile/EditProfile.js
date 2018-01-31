import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import "./EditProfile.css";
import {connect} from 'react-redux';

class EditProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            city: "",
            state: "",
            bio: "",
            hobby: "",
            nickname: ""
        };
    }

    handleChange(e) {
        var {name, value} = e.target;
        this.setState({
            [name]:value
        }, () => console.log(this.state))
    }

    render() {
        console.log(this.props.user)
        return (
            <div className="edit-profile">
                <NavBar background={true}/>
                <h1 className="edit-profile_heading">Edit Your Profile Information</h1>
                <div className="edit-profile_input-container">
                    <div for="city">City</div>
                    <input className="edit-profile_input" name="city" type="text" placeholder="City" onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className="edit-profile_input-container">
                    <div for="state">State</div>
                    <input className="edit-profile_input" name="state" type="text" placeholder="State" onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className="edit-profile_input-container">
                    <div for="state">Bio</div>
                    <input className="edit-profile_input" name="bio" type="text" placeholder="Bio" onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className="edit-profile_input-container">
                    <div for="state">Favorite Hobby</div>
                    <input className="edit-profile_input" name="hobby" type="text" placeholder="Favorite Hobby" onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className="edit-profile_input-container">
                    <div for="state">Nickname</div>
                    <input className="edit-profile_input" name="nickname" type="text" placeholder="Nickname" onChange={(e) => this.handleChange(e)}/>
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

export default connect(mapStateToProps, null)(EditProfile);
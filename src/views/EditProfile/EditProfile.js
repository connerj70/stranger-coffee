import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import "./EditProfile.css";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        var {user} = this.props
       this.setState({
           city: user.city,
           state: user.state,
           bio: user.bio,
           hobby: user.hobby,
           nickname: user.nickname,
           id: user.id
       })
    }

    handleChange(e) {
        var {name, value} = e.target;
        this.setState({
            [name]:value
        });
    }

    handleSave() {
        axios.put('/api/users', this.state).then(resp => {
            if(resp.status === 200) {
                alert("updated successfully!");
                    this.props.history.push('/profile');
            } else {
                alert('Failed to update.');
            }
        });
    }

    render() {
        return (
            <div className="edit-profile">
            { this.props.user.name ?
                <div>
                    <NavBar background={true}/>
                    <h1 className="edit-profile_heading">Edit Your Profile Information</h1>
                    <div className="edit-profile_input-container">
                        <div for="city">City</div>
                        <input className="edit-profile_input" value={this.state.city} name="city" type="text" placeholder="City" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="edit-profile_input-container">
                        <div for="state">State</div>
                        <input className="edit-profile_input" value={this.state.state} name="state" type="text" placeholder="State" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="edit-profile_input-container">
                        <div for="state">Bio</div>
                        <input className="edit-profile_input" value={this.state.bio} name="bio" type="text" placeholder="Bio" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="edit-profile_input-container">
                        <div for="state">Favorite Hobby</div>
                        <input className="edit-profile_input" value={this.state.hobby} name="hobby" type="text" placeholder="Favorite Hobby" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="edit-profile_input-container">
                        <div for="state">Nickname</div>
                        <input className="edit-profile_input" value={this.state.nickname} name="nickname" type="text" placeholder="Nickname" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="edit-profile_button-container">
                        <button className="edit-profile_button" onClick={this.handleSave}>SAVE</button>
                        <Link to="/profile"><button className="edit-profile_button edit-profile_cancel-button">CANCEL</button></Link>
                    </div>
                    <Footer />
                </div>
                :
                <div>
                    <h1>unauthorized</h1>
                    <a style={{color: "orange", marginTop: "30px"}} href="/auth/me">Log In/Signup</a>
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

export default connect(mapStateToProps, null)(EditProfile);
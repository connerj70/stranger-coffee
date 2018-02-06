import React, {Component} from 'react';
import './Match.css';
import axios from 'axios';
import {getCurrentMatch} from '../../ducks/reducer';
import {connect} from 'react-redux';

class Match extends Component {
    constructor(props) {
        super(props);

        this.state = {match: {location:"", user2_id: 0}};
    }

    componentDidMount() {
        this.props.getCurrentMatch(this.props.id).then(resp => {
            this.setState({
                match: resp.value
            });
        });
    }

    handleNewMatch() {
        axios.post('/api/match', {id: this.props.id, city: this.props.city}).then(resp => {
            this.setState({
                match: resp.data
            });
        }).catch(err => {
            alert('Sorry no matches available in your area');
        });
    }

    handleAccept() {
        axios.put(`/api/match/${this.state.match.match_id}`).then(resp => {
            let tempMatch = Object.assign({},this.state.match);
            tempMatch.pending = false;
           this.setState({
               match: tempMatch
           });
        });
    }

    render() {
        console.log(this.state.match)
        return (
            <div className="match">
            <span className="match_cancel-match"><i className="fas fa-trash-alt"></i></span>
            {
                !this.state.match.location
                ?
                <div className="match_no-new-match">
                    <h1>No New Match</h1>
                    <button onClick={() => this.handleNewMatch()}>Click To Generate</button>
                </div>
                :
                <div className="match_matched">
                    {
                        this.state.match.user2_id === this.props.user.id 
                        ?
                        this.state.match.pending ?
                        <span className="match_accept-span" onClick={() => this.handleAccept()}>Accept</span>
                        : null
                        :
                        null
                    }
                    <h1>Current Match</h1>
                    <div className='match_matched-sub-container'>
                        <h3>Status: </h3>
                        <span id="pending">{this.state.match.pending ? <span>Pending <i className="fas fa-spinner"></i></span> : <span>Accepted <i className="fas fa-check"></i></span>}</span>
                    </div>
                    <div className='match_matched-sub-container'>
                        <h3>Place:</h3>
                        <span>{this.state.match.location_name}</span>
                    </div>
                    <div className='match_matched-sub-container'>
                        <h3>Location:</h3>
                        <span id="match_matched-location">{this.state.match.location}</span>
                    </div>
                    <div className='match_matched-sub-container'>
                        <h3>Time:</h3>
                        {
                            this.state.match.date
                            ?
                        <span id="match_matched-date">{this.state.match.date.split("T0")[0]} {this.state.match.date.split("T0")[1].slice(0,4)}PM</span>
                            :
                            null
                        }
                    </div>
                    <div className='match_matched-sub-container'>
                        <h3>Match:</h3>
                        <span id="match_matched-match">{this.state.match.username}</span>
                    </div>
                </div>
            }
            </div>
            
        )
    }
}

function mapStateToProps({currentMatch, user}) {
    return {
        currentMatch,
        user
    }
}

export default connect(mapStateToProps, {getCurrentMatch})(Match);
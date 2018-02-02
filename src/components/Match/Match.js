import React, {Component} from 'react';
import './Match.css';
import axios from 'axios';

class Match extends Component {
    constructor(props) {
        super(props);

        this.state = {match: {}};
    }

    handleNewMatch() {
        axios.post('/api/match', {id: this.props.id, city: this.props.city}).then(resp => {
            this.setState({
                match: resp.data
            }, ()=>console.log(this.state.match))
        });
    }

    render() {
        return (
            <div className="match">
            {
                !this.state.match.locationName
                ?
                <div className="match_no-new-match">
                    <h1>No New Match</h1>
                    <button onClick={() => this.handleNewMatch()}>Click To Generate</button>
                </div>
                :
                <div className="match_matched">
                    <h1>Current Match</h1>
                    <div className='match_matched-sub-container'>
                        <h3>Place:</h3>
                        <span>{this.state.match.locationName}</span>
                    </div>
                    <div className='match_matched-sub-container'>
                        <h3>Location:</h3>
                        <span id="match_matched-location">{this.state.match.locationVicinity}</span>
                    </div>
                    <div className='match_matched-sub-container'>
                        <h3>Match:</h3>
                        <span id="match_matched-match">{this.state.match.matchedUser.username}</span>
                    </div>
                </div>
            }
            </div>
            
        )
    }
}

export default Match;
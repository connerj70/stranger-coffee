import React, {Component} from 'react';
import './Match.css';
import axios from 'axios';
import {getCurrentMatch} from '../../ducks/reducer';
import {connect} from 'react-redux';

class Match extends Component {
    constructor(props) {
        super(props);

        this.state = {match: {location:""}};
    }

    componentDidMount() {
        this.props.getCurrentMatch(this.props.id).then(resp => {
            console.log(resp);
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
        });
    }

    render() {
        return (
            <div className="match">
            {
                !this.state.match.location
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
                        <span>{this.state.match.location_name}</span>
                    </div>
                    <div className='match_matched-sub-container'>
                        <h3>Location:</h3>
                        <span id="match_matched-location">{this.state.match.location}</span>
                    </div>
                    <div className='match_matched-sub-container'>
                        <h3>Time:</h3>
                        <span id="match_matched-date">{this.state.match.date}</span>
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

function mapStateToProps({currentMatch}) {
    return {
        currentMatch
    }
}

export default connect(mapStateToProps, {getCurrentMatch})(Match);
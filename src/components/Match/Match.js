import React, {Component} from 'react';
import './Match.css';
import axios from 'axios';

class Match extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleNewMatch() {
        axios.post('/api/match', {id: this.props.id, city: this.props.city}).then(resp => {
            console.log(resp);
        });
    }

    render() {
        return (
            <div className="match">
                <div className="match_no-new-match">
                    <h1>No New Match</h1>
                    <button onClick={() => this.handleNewMatch()}>Click To Generate</button>
                </div>
            </div>
        )
    }
}

export default Match;
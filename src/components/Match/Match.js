import React, { Component } from "react";
import "./Match.css";
import axios from "axios";
import { getCurrentMatch } from "../../ducks/reducer";
import { connect } from "react-redux";

class Match extends Component {
  constructor(props) {
    super(props);

    this.state = { match: { location: "", user2_id: 0 }, modal: false };
    this.deleteMatch = this.deleteMatch.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentMatch(this.props.id).then(resp => {
      // this.setState({
      //     match: resp.value
      // });
    });
  }

  handleNewMatch() {
    if (!this.props.city) {
      alert("Please edit your profile and fill in which city you are from");
    } else {
      axios
        .post("/api/match", { id: this.props.id, city: this.props.city })
        .then(resp => {
          // this.setState({
          //     match: resp.data
          // });
          this.props.getCurrentMatch(this.props.id);
          //this.props.getNotifications(this.props.id);
        })
        .catch(err => {
          alert("Sorry no matches available in your area");
        });
    }
  }

  handleAccept() {
    axios.put(`/api/match/${this.props.currentMatch.match_id}`).then(resp => {
      let tempMatch = Object.assign({}, this.props.currentMatch);
      tempMatch.pending = false;
      //    this.setState({
      //        match: tempMatch
      //    });
      this.props.getCurrentMatch(this.props.id);
    });
  }

  deleteMatch() {
    console.log("deleteMatch triggered");
    this.props.handleTrashClick();
  }

  render() {
    console.log(this.state.match);
    return (
      <div className="match">
        {!this.props.currentMatch.location ? (
          <div className="match_no-new-match">
            <h1>No New Match</h1>
            <button onClick={() => this.handleNewMatch()}>
              Click To Generate
            </button>
          </div>
        ) : (
          <div className="match_matched">
            {this.props.currentMatch.user2_id === this.props.user.id ? (
              this.props.currentMatch.pending ? (
                <div className="match_accept-span-container">
                  {/* <span onClick={()=> this.deleteMatch()} className="match_cancel-match"><i className="fas fa-trash-alt"></i></span> */}
                  <div
                    className="match_accept-span"
                    onClick={() => this.handleAccept()}
                  >
                    Accept
                  </div>
                </div>
              ) : null
            ) : null}
            <div className="match_header-container">
              <span
                onClick={() => this.deleteMatch()}
                className="match_cancel-match"
              >
                <i className="fas fa-trash-alt" />
              </span>
              <h1>
                {this.props.title}:{" "}
                <span className="match_current-match-username">
                  {this.props.currentMatch.username}
                </span>
              </h1>
            </div>
            <div className="match_matched-sub-container">
              <h3>Status: </h3>
              <span id="pending">
                {this.props.currentMatch.pending ? (
                  <span>
                    Pending <i className="fas fa-spinner" />
                  </span>
                ) : (
                  <span>
                    Accepted <i className="fas fa-check" />
                  </span>
                )}
              </span>
            </div>
            <div className="match_matched-sub-container">
              <h3>Place:</h3>
              <span>{this.props.currentMatch.location_name}</span>
            </div>
            <div className="match_matched-sub-container">
              <h3>Location:</h3>
              <span id="match_matched-location">
                {this.props.currentMatch.location}
              </span>
            </div>
            <div className="match_matched-sub-container">
              <h3>Time:</h3>
              {this.props.currentMatch.date ? (
                <span id="match_matched-date">
                  {this.props.currentMatch.date.split("T0")[0]} 7PM
                </span>
              ) : // {this.props.currentMatch.date.split("T0")[1].slice(0,4)}
              null}
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ currentMatch, user }) {
  return {
    currentMatch,
    user
  };
}

export default connect(mapStateToProps, { getCurrentMatch })(Match);

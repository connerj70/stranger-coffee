import React, {Component} from 'react';
import "./ReviewCard.css";
import functions from '../../reuse/functions/functions';




export default class ReviewCard extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
   

    render() {
      let starsToDisplay = functions.createStars(this.props.stars)

        return (
            <div className="review-card_wrapper">
                <div className="review-card_background-image">
                    <img alt="main" src={this.props.backgroundImage} />
                </div>
                    <span>
                        {starsToDisplay} 
                    </span>
                <div id="review-card-text">
                    {this.props.text}
                </div>
                <div className="review-card_user-container">
                    <img alt="user" src={this.props.userImage}/>
                    <div>
                        <div className="review-card_user-username">{this.props.userName}</div>
                    </div>
                </div>
            </div>
        )
    }
}
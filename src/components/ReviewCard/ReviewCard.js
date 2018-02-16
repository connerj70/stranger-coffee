import React, {Component} from 'react';
import "./ReviewCard.css";




export default class ReviewCard extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
   

    render() {
        let key = 1;
        var starsToDisplay = [];
        for(var i=0; i < this.props.stars; i++) {
            starsToDisplay.push(<i style={{color: "#F4D35E"}} className="fas fa-star" key={key}></i>)
            key++
        }

        while(starsToDisplay.length < 5) {
            starsToDisplay.push(<i key={key} className="far fa-star" style={{color: "#EBEBD3"}}></i>)
            key++
        }

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
                        <div>{this.props.userName}</div>
                    </div>
                </div>
            </div>
        )
    }
}
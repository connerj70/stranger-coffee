import React, {Component} from 'react';
import functions from '../../reuse/functions/functions';
import defaultImage from '../../assets/300.png';
import axios from 'axios';
import './ReviewDetails.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

class ReviewDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {review: {image_urls: []}};
    }

    componentDidMount() {
        axios.get(`/api/review/${this.props.match.params.id}`).then(resp => {
            this.setState({
                review: resp.data[0]
            });
        });
    }

    render() {
        let starsToDisplay;
        if(this.state.review.stars) {
            starsToDisplay = functions.createStars(this.state.review.stars);
        }
        let imageUrl;
        if(this.state.review.image_urls) {
            imageUrl = this.state.review.image_urls[0];
        } else {
            imageUrl = defaultImage;
        }
        return (
            <div className="review-details">
                <NavBar background={true}/>
                <div className="review-details_inner-container">
                    <div className="review-details_image-container">
                        <img alt="user submitted" src={imageUrl} />
                    </div>
                    <div className="review-details_star-container">
                        <span>
                            {starsToDisplay}
                        </span>
                    </div>
                    <div className="review-details_user-info-container">
                        <div>
                            {this.state.review.username}
                        </div>
                        <img alt='profile' src={this.state.review.profile_pic}/>
                    </div>
                    <div className="review-details_review-container">
                        <p>
                            {this.state.review.review}
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default ReviewDetails;
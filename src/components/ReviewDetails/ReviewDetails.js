import React, {Component} from 'react';
import functions from '../../reuse/functions/functions';
import axios from 'axios';

class ReviewDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {review: {}};
    }

    componentDidMount() {
        axios.get(`/api/review/${this.props.match.params.id}`).then(resp => {
            console.log(resp.data);
            this.setState({
                review: resp.data[0]
            });
        });
    }

    render() {
        let starsToDisplay = functions.createStars(1);
        return (
            <div>
                <div className="review-details_image-container">
                    <img src="" />
                </div>
                <div className="review-details_star-container">
                    <span>
                        {starsToDisplay}
                    </span>
                </div>
                <div className="review-details_user-info-container">
                    <img />
                    <div>

                    </div>
                </div>
                <div className="review-details_review-container">
                    <p>
                        hi
                    </p>
                </div>
            </div>
        )
    }
}
export default ReviewDetails;
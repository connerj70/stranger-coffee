import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    render() {
        return (
        <div className="reuse_card">
            <div className="reuse_card-image-container">
                <img alt="user reuse" src={this.props.picture} />
            </div>
            <div className="reuse_card-user-info-container">
                <div className="reuse_card-user-sub-info-container">
                    <div className="reuse_card-bold">Username: </div>
                    <div>{this.props.username}</div>
                </div>
                <div className="reuse_card-user-sub-info-container">
                    <div className="reuse_card-bold">Nickname: </div>
                    <div>{this.props.nickname}</div>
                </div>
                <div className="reuse_card-user-sub-info-container">
                    <div className="reuse_card-bold">City: </div>
                    <div>{this.props.city}</div>
                </div>
                <div className="reuse_card-user-sub-info-container">
                    <div className="reuse_card-bold">State: </div>
                    <div>{this.props.state}</div>
                </div>
                <div className="reuse_card-user-sub-info-container">
                    <div className="reuse_card-bold">Hobby: </div>
                    <div>{this.props.hobby}</div>
                </div>
            </div>
        </div>
        )
    }
}

Card.propTypes = {
    picture: PropTypes.string,
    username: PropTypes.string,
    nickname: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    hobby: PropTypes.string
}

export default Card;


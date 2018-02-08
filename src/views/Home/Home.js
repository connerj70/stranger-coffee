import React, {Component} from 'react';
import './Home.css';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import InfoCard from '../../components/InfoCard/InfoCard';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import axios from 'axios';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {reviews: []};
    }

    componentDidMount() {
        axios.get('/api/reviews').then(resp => {
            this.setState({
                reviews: resp.data
            });
        });
    }

    render() {
        
        let reviews = 
            this.state.reviews.length ?
            this.state.reviews.map((value, i) => {
            return (
                <ReviewCard 
                key={i}
                backgroundImage={value.image_urls[0]}
                stars={value.stars}
                text={value.review}
                   userImage={value.profile_pic}
                   userName={value.username}
                />
            )
        })
        :
        null

        return (
            <div className="home">
                <NavBar background={false}/>
                <div className="home_hero-container"></div>
                <div className="home_hero-captions">
                    <h2>Strangers Become Friends</h2>
                    <h3>Discover friends while enjoying a great drink</h3>
                    <a href={process.env.REACT_APP_LOGIN}><button className="home_join-now-button">JOIN NOW</button></a>
                </div>
                <h3 className="home_heading">See What Friendships Have Been Made</h3>
                <div className="home_review-card-container">
                    {reviews}
                </div>

                <h3 className="home_heading less_heading">Meet Amazing People</h3>

                <div className="home_info-card-container">
                    <InfoCard icon={<i className="fa fa-users" aria-hidden="true"></i>} heading="Matching" text="We match you with other users and set up a time and place for you to meet"/>
                    <InfoCard icon={<i className="far fa-smile"></i>} heading="Meet up" text="Help spread joy to others by sharing coffee and conversation"/>
                    <InfoCard icon={<i className="fa fa-share-alt" aria-hidden="true"></i>} heading="Networking" text="Build your network by sharing your story and connecting with others"/>
                </div>
                <Footer />
            </div>
        )
    }
}
import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './About.css';
import background from '../../assets/morgan-mcdonald-401172.jpg';

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <NavBar background={true}/>
                <div className="about-sub-container">
                    <img className="about-hero-image" src={background} />
                    <h1 className='about_hero-heading'>Strangers in coffeeshops getting coffee</h1>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;
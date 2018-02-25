import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './About.css';
import background from '../../assets/compressed-cut-about.jpg';

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <NavBar background={true}/>
                <div className="about-sub-container">
                    <img alt="two hands holding coffee" className="about-hero-image" src={background} />
                    <h1 className='about_hero-heading'><span className='strangers-in'>Strangers in coffeeshops</span><br /> <span className='getting-coffee'>getting coffee</span></h1>
                        <p>StrangerCoffee is all about breaking down barriers between people and finding adventure.</p>
                        <div className='about_icon-container'>
                            <i class="fas fa-bullhorn about-fa"></i>
                        </div>
                        <p>
                            You can create an account, navigate to your profile and click to generate a new match.
                            This will find another user and a coffee shop in your city, then match you with them!
                        </p>
                        <div className='about_icon-container'>
                            <i className="fas fa-user about-fa"></i>
                        </div>
                        <p>
                            You are purposely shown little to no information about your match. Only their username and a
                            time and place to meet them.
                        </p>
                        <div className='about_icon-container'>
                            <i className="fas fa-question about-fa"></i>
                        </div>
                        <p>
                            Your next step is to mark down the time and place of your match in your calendar and make sure not to leave your potential new friend hanging. If you cannot
                            make the set time you can reschedule.
                        </p>
                        <div className='about_icon-container'>
                            <i className="fas fa-calendar-alt about-fa"></i>
                        </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;
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
                    <h1 className='about_hero-heading'><span className='strangers-in'>Strangers in coffeeshops</span><br /> <span className='getting-coffee'>getting coffee</span></h1>
                        <p>StrangerCoffee is all about breaking down barriers between people and finding adventure.</p>
                        <i class="fas fa-bullhorn about-fa"></i>
                        <p>
                            You can create an account, navigate to your profile and click to generate a new match.
                            This will find another user and a coffee shop in your city, then match you with them!
                        </p>
                        <i className="fas fa-user about-fa"></i>
                        <p>
                            You are purposely shown little to no information about your match. Only their username and a
                            time and place to meet them.
                        </p>
                        <i className="fas fa-question about-fa"></i>
                        <p>
                            Your next step is to mark down the time and place of your match in your calendar and make sure not to leave your potential new friend hanging. If you cannot
                            make the set time you can reschedule.
                        </p>
                        <i className="fas fa-calendar-alt about-fa"></i>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;
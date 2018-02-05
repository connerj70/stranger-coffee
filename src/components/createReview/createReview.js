import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Dropzone from 'react-dropzone';
import './createReview.css';

class createReview extends Component {
    constructor(props) {
        super(props);

        this.state = {review: "", stars: 0};

    }

    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        }, ()=> console.log(this.state));
    }

    handleStar(star) {
        console.log(star);
        this.setState({
            stars: star
        });
    }

    onDrop(files) {
        console.log('dropped!');
        console.log(files);
        

    }

    render() {
        console.log(this.state.stars);
        return (
            <div className="create-review">
                <NavBar background={true}/>
                <div className="create-review_input-container">
                    <h1>Review: </h1>
                    <textarea rows="12" name="review" onChange={(e) => this.handleChange(e)} type="text"/>
                </div>
                <div className="create-review_input-container">
                    <h1>Stars: </h1>
                    <select name='stars' onChange={(e)=> this.handleChange(e)}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <div className="create-review_input-container">
                    <h1>Images: </h1>
                    <Dropzone onDrop={(file)=> this.onDrop(file)}>Upload Images</Dropzone>
                </div>
            </div>
        );
    }
}

export default createReview;
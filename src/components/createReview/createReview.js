import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Dropzone from 'react-dropzone';
import './createReview.css';
import axios from 'axios';
import Button from '../../reuse/buttons';
import {ToastContainer, toast} from 'react-toastify';

class createReview extends Component {
    constructor(props) {
        super(props);

        this.state = {review: "", stars: 0, imageUrls: []};

    }

    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    handleStar(star) {
        this.setState({
            stars: star
        });
    }

    onDrop(files) {
            const reader = new FileReader()
            , file = files[0]
            // , file = event.target.files[0]
        
        reader.onload = photo => {
            // this.setState({
            //     file: photo.target.result,
            //     filename: file.name,
            //     filetype: file.type
            // });
            axios.post('/api/newreview', {name: files[0].name, preview: photo.target.result, fileType: files[0].type }).then(resp => {
                let imageUrlsTemp = this.state.imageUrls.slice();
                imageUrlsTemp.push(resp.data);
                this.setState({
                    imageUrls: imageUrlsTemp
                });
                toast.success("Success", {position: toast.POSITION.BOTTOM_RIGHT})
            });
        };
        reader.readAsDataURL(file);
    }

    handleSubmit() {
        axios.post('/api/createreview', {review: this.state.review, stars: this.state.stars, imageUrls: this.state.imageUrls}).then(resp => {
            console.log(resp);
        });
    }

    render() {

        let picturesToDisplay = this.state.imageUrls.map((value, i) => {
            return (
                <img key={i} className="create-review_picture" src={value} />
            )
        });

        return (
            <div className="create-review">
                <NavBar background={true}/>
                <div className="create-review_input-container">
                    <h1>Review: </h1>
                    <textarea placeholder="Write your review here..." rows="12" name="review" onChange={(e) => this.handleChange(e)} type="text"/>
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
                    <Dropzone style={{border: 'none', width:"70%", height: '150px', display: 'flex', alignItems: 'center', boxShadow: "1px 1px 1px #d3d3d3"}} onDrop={(file)=> this.onDrop(file)}><i style={{margin: '0 auto', fontSize: '2rem', color: 'rgba(0, 0, 0, 0.5)'}} className="fas fa-camera"></i></Dropzone>
                </div>
                <div className="create-review_button-container">
                    <Button color="#F95738" func={()=> this.handleSubmit()} text="Submit"/>
                    <Button color="red" func={()=> this.setState({hello: 'hello'})} text="Cancel"/>
                </div>
                <ToastContainer autoClose={2000}/>
                <div className="create-review_image-container">
                    {picturesToDisplay}
                </div>
            </div>
        );
    }
}

export default createReview;
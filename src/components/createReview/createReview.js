import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Dropzone from 'react-dropzone';
import './createReview.css';
import axios from 'axios';
import Button from '../../reuse/buttons';
import {ToastContainer, toast} from 'react-toastify';
import Match from '../Match/Match';

class createReview extends Component {
    constructor(props) {
        super(props);

        this.state = {review: "", stars: 0, imageUrls: [], previousMatch: {}, loading: false};

    }

    componentDidMount() {
        console.log(this.props.user);
        axios.get('/api/previousmatches/' + this.props.user.id).then(resp => {
            console.log(resp);
            this.setState({
                previousMatch: resp.data[0]
            }, ()=> console.log(this.state.previousMatch));
        });
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
        this.setState({
            loading: true
        });
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
                    imageUrls: imageUrlsTemp,
                    loading: false
                });
                toast.success("Success", {position: toast.POSITION.BOTTOM_RIGHT})
            });
        };
        reader.readAsDataURL(file);
    }

    handleSubmit() {
        let idForUserTwo;
        if(this.state.previousMatch.user2_id === this.props.user.id) {
            idForUserTwo = this.state.previousMatch.user1_id;
        } else {
            idForUserTwo = this.state.previousMatch.user2_id;
        }
        axios.post('/api/createreview', {review: this.state.review, stars: this.state.stars, imageUrls: this.state.imageUrls, reviewerId: this.props.user.id, revieweeId: idForUserTwo}).then(resp => {
            console.log(resp);
            if(resp.status === 200) {
                toast.success("Review Created");
                setTimeout(()=>this.props.history.push('/profile'), 2000);
            }
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
                <Match title="Previous Match" id={this.props.user.id} city={this.props.user.city}/>
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
                    {this.state.loading ? <div className='uploading-spinner-container'>Uploading... <i class="fas fa-spinner"></i></div> : null}
                    <Dropzone style={{border: 'none', width:"70%", height: '150px', display: 'flex', alignItems: 'center', boxShadow: "1px 1px 1px #d3d3d3"}} onDrop={(file)=> this.onDrop(file)}><i style={{margin: '0 auto', fontSize: '2rem', color: 'rgba(0, 0, 0, 0.5)'}} className="fas fa-camera"></i></Dropzone>
                </div>
                <div className="create-review_button-container">
                    <Button color="#083d77" func={()=> this.handleSubmit()} text="Submit"/>
                    <Button color="#F95738" func={()=> this.setState({hello: 'hello'})} text="Cancel"/>
                </div>
                <ToastContainer autoClose={2000}/>
                <div className="create-review_image-container">
                    {picturesToDisplay}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(createReview);
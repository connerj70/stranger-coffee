import React, {Component} from 'react';
import "./NavBar.css";

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="navbar_wrapper">
                <div className="navbar_left-div">
                    <h3>StrangerCoffee</h3>
                </div>
                <div className="navbar_right-div">
                    <div>random1</div>
                    <div>random2</div>
                    <div>random3</div>
                </div>
            </div>
        )
    }
}
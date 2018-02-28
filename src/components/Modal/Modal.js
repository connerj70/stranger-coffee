import React, { Component } from "react";
import "./Modal.css";
import Button from "../../reuse/buttons";

class Modal extends Component {
    handleDelete() {
        this.props.handleDeleteClick();
    }

    handleCancel() {
        this.props.handleCancelClick();
    }

    render() {
        return (
            <div className="modal">
                <h1>{this.props.title}</h1>
                <div>{this.props.text}</div>
                <div className="button-container">
                    <Button
                        func={() => this.handleDelete()}
                        color="#F95738"
                        text={this.props.button1Text}
                    />
                    <Button
                        func={() => this.handleCancel()}
                        color="#EE964B"
                        text={this.props.button2Text}
                    />
                </div>
            </div>
        );
    }
}

export default Modal;

import React, { useState } from "react";
import './modal.css';


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        }
    }

    showModal() {
        this.setState(
            { isModalVisible: true }
        );
        console.log("modalul a aparut");
        console.log(this.state.isModalVisible);
    }

    handleClick(e) {
        if (this.state.isModalVisible) {
            this.closeModal();
            return;
        }
        this.setState(
            { isModalVisible: true }
        );
        e.stopPropagation();
        document.addEventListener("click", this.closeModal);
    };


    render() {
        return (
            this.state.selectedTask
                ?

                !this.props.isModalVisible
                    ?
                    null

                    :
                    <div className="modal_main-container" onClick={(e) => this.props.handleClick(e)}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">Task {this.props.selectedTask.no}</h3>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <span className="modal-body__description"> Description: </span>
                                    <span className="modal-body__info"> {this.props.selectedTask.description} </span>
                                </div>
                                <div>
                                    <span className="modal-body__description"> Date: </span>
                                    <span className="modal-body__info">{this.props.selectedTask.date} </span>
                                </div>
                                <div>
                                    <span className="modal-body__description"> Status:</span>
                                    <span className="modal-body__info"> {this.props.selectedTask.currentStatus} </span>
                                </div>
                                {/* <div> Notes: {this.props.selectedTask.notes || '-'}</div> */}
                                {this.props.selectedTask.notes
                                    ? <div>
                                        <span className="modal-body__description"> Notes: </span>
                                        <span className="modal-body__info"> {this.props.selectedTask.notes} </span>
                                    </div>
                                    : null
                                }
                            </div>
                        </div>
                    </div>

                : null
        );
    }
}

export default Modal;
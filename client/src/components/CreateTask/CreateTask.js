import { Modal } from 'react-bootstrap';

import React from "react";
import "./CreateTask.css";

import Input from "./Input";

export default class CreateTask extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {

      return (
        <div>
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Create
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <Input name="title" placeholder="Title (required)" />
                    <Input name="duedate" placeholder="Due Date (required)" />
                </form>
              
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
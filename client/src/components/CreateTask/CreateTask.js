import React from "react";

// import { Modal, Button } from 'react-bootstrap';
import "./CreateTask.css";

import Input from "./Input";

/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="createTask-form">
        <Button color="danger" onClick={this.toggle}>Create Task</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Create Task</ModalHeader>
          <ModalBody>
          <Input name="title" placeholder="Title" />
          <Input name="description" placeholder="Description" />
          <Input name="duedate" placeholder="Due Date" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Create</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CreateTask;
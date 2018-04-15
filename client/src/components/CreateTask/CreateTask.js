import React from "react";
import API from "../../utils/API";

// import { Modal, Button } from 'react-bootstrap';
import "./CreateTask.css";

import Input from "./Input";

/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: '',
      description: '',
      duedate: ''
    };



    this.toggle = this.toggle.bind(this);
    this.createTaskHandler = this.createTaskHandler.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  createTaskHandler = event => {
    API.saveTask({
      title: this.state.title,
      description: this.state.description,
      duedate: this.state.duedate
      })
      .catch(err => console.log(err));

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
          <Input onChange={this.handleInputChange} name="title" placeholder="Title" />
          <Input onChange={this.handleInputChange} name="description" placeholder="Description" />
          <Input onChange={this.handleInputChange} name="duedate" placeholder="Due Date" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" href="/api/task" onClick={this.createTaskHandler}>Create</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CreateTask;
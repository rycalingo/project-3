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
      task: {
        title: '',
        description: '',
        assignee: '', 
        duedate: ''
        }
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
    const data = this.state.task;
    const { name, value } = event.target;
    data[name] = value;

    this.setState({
      task: data
    })
  }

  createTaskHandler = event => {
    event.preventDefault();
    API.createTask(this.state.task)
      .then(res => console.log(res.status))
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
          <Input onChange={this.handleInputChange} name="assignee" placeholder="Asign To" />
          <Input onChange={this.handleInputChange} name="duedate" placeholder="Due Date" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" href="/task/api" onClick={this.createTaskHandler}>Create</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CreateTask;
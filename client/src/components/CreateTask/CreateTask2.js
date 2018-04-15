import React from "react";
// import { Modal, Button } from 'react-bootstrap';
import "./CreateTask.css";

import Input from "./Input";
import axios from "axios";
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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.createTaskHandler = this.createTaskHandler.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  }
  addTaskHandler(task) {
    axios.post(this.props.url, task)
    .then(res => {
    this.setState({ data: res });
    })
    .catch(err => {
    console.error(err);
    });
   }

  createTaskHandler = (event) => {
    event.preventDefault();
    let title = this.state.title.trim();
    let description = this.state.description.trim();
    let duedate = this.state.duedate.trim();
    console.log(title, description, duedate + "was saved in the database");
    if (!title || !description || !duedate) {
      return;
    }
    this.props.addTaskHandler({ title: title, description: description, duedate: duedate})
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
            <Button color="primary" onClick={this.createTaskHandler}>Create</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CreateTask;
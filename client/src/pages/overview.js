import React, { Component } from "react";
import Navlist from "../components/Navlist";
import Tasks from "../components/Tasks";
// import axios from 'axious';
import './home.css';
import Taskslist from "../components/Tasks";

export default class overview extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { data: [] };
  //   this.loadCommentsFromServer =
  //   this.loadCommentsFromServer.bind(this);
  //   this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  //   }
   
  //   loadCommentsFromServer() {
  //      axios.get(this.props.url)
  //      .then(res => {
  //      this.setState({ data: res.data });
  //      })
  //      }
  //      handleCommentSubmit(comment) {
  //      //add POST request 
  //      let comments = this.state.dadbta;
  //      comment.id= Date.now();
  //      let newComments = comments.concat([comment]);
  //      this.setState({ data: newComments });
  //      axios.post(this.props.url, comment)
  //      .then(res => {
  //          this.setState({ data: res })
  //      })
  //      .catch(err=> {
  //          console.log(err);
  //      });
  //     }
  //      componentDidMount() {
  //      this.loadCommentsFromServer();
  //      setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  //      }
  
    render() {
        return (
          <div className="App">
            <div className="pad-wrapper">
            <Navlist />
            <Tasks />
            <Taskslist />
             
            
            </div>
          </div>
        );
      }
}
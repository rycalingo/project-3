import axios from "axios";

export default {
  // Gets all Task
  getTasks: function() {
    return axios.get("/task/api/")
  },
  // Gets the book with the given id
  getTask: function(id) {
    return axios.get("/task/api/" + id);
  },
  // Deletes the book with the given id
  deleteTask: function(id) {
    return axios.delete("/task/api/" + id);
  },
  // Saves a book to the   database
  createTask: function() {
    return axios.post("/task/api");
  },

  getUsers: function() {
    return axios.get("/users/api");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/users/api" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/users/api" + id);
  },
  // Saves a book to the database
  createUser: function(userData) {
    console.log("in utils");
    console.log(userData);
    return axios.post("/users/api", userData);
},
};
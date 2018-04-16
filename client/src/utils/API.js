import axios from "axios";

export default {
  // Gets all Task
  getTasks: function() {
    return axios.get("/api/task");
  },
  // Gets the book with the given id
  getTask: function(id) {
    return axios.get("/api/task/" + id);
  },
  // Deletes the book with the given id
  deleteTask: function(id) {
    return axios.delete("/api/task/" + id);
  },
  // Saves a book to the database
  createTask: function(taskData) {
    return axios.post("/task/api", taskData);
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
  createUser: function(taskData) {
    return axios.post("/users/api", taskData);
},
};
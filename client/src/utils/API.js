import axios from "axios";

export default {
  // Gets all Task
  getTasks: function() {
    return axios.get("/api/task");
  },
  // Gets the task with the given id
  getTask: function(id) {
    return axios.get("/api/task/" + id);
  },
  // Deletes the task with the given id
  deleteTask: function(id) {
    return axios.delete("/api/task/" + id);
  },
  // Saves a task to the database
  saveTask: function(taskData) {
    return axios.post("/api/task", taskData);
  }
};
// import axios from "axios";

// const API_URL = "http://localhost:5000/api/tasks/";

// export const getTasks = () => axios.get(API_URL);
// export const createTask = (task) => axios.post(API_URL, task);
// export const getTaskById = (id) => axios.get(API_URL + id);
// export const updateTask = (id, task) => axios.put(API_URL + id, task);
// export const deleteTask = (id) => axios.delete(API_URL + id);


import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const taskService = {
  // Get all tasks
  getAllTasks: () => axios.get(`${BASE_URL}/tasks`).then(res => res.data),

  // Create a new task
  createTask: (task) => 
    axios.post(`${BASE_URL}/tasks`, task).then(res => res.data),

  // Get task by ID
  getTaskById: (id) => 
    axios.get(`${BASE_URL}/tasks/${id}`).then(res => res.data),

  // Update task
  updateTask: (id, task) => 
    axios.put(`${BASE_URL}/tasks/${id}`, task).then(res => res.data),

  // Delete task
  deleteTask: (id) => 
    axios.delete(`${BASE_URL}/tasks/${id}`).then(res => res.data),
};

export default taskService;


// import { useState } from "react";
// import taskService from "../services/taskService";
// import { useNavigate } from "react-router-dom";

// const AddTask = () => {
//   const navigate = useNavigate();

//   const [task, setTask] = useState({
//     title: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setTask({ ...task, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await taskService.addTask(task);
//     navigate("/tasks");
//   };

//   return (
//     <div className="max-w-lg mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Add New Task</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           name="title"
//           type="text"
//           placeholder="Task Title"
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />

//         <textarea
//           name="description"
//           placeholder="Task Description"
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         ></textarea>

//         <button className="bg-green-600 text-white px-4 py-2 rounded">
//           Add Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddTask;


import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
    dueDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/tasks", formData);

      if (res.status === 201) {
        alert("Task Added Successfully!");
        navigate("/all-tasks");
      }
    } catch (error) {
      console.error(error);
      alert("Error adding task");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add New Task</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter task title"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter task description"
          ></textarea>
        </div>

        {/* Status */}
        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Priority */}
        <div>
          <label className="block mb-1 font-medium">Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Due Date */}
        <div>
          <label className="block mb-1 font-medium">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 mt-4 rounded-md hover:bg-blue-700 duration-200"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;

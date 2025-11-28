// import { useEffect, useState } from "react";
// import taskService from "../services/taskService";
// import { useParams, useNavigate } from "react-router-dom";

// const EditTask = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [task, setTask] = useState({
//     title: "",
//     description: "",
//   });

//   useEffect(() => {
//     const fetchTask = async () => {
//       const data = await taskService.getTaskById(id);
//       setTask(data);
//     };
//     fetchTask();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await taskService.updateTask(id, task);
//     navigate("/tasks");
//   };

//   return (
//     <div>
//       <h1 className="text-xl font-bold mb-4">Edit Task</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           value={task.title}
//           onChange={(e) => setTask({ ...task, title: e.target.value })}
//           className="border p-2 w-full"
//         />

//         <textarea
//           value={task.description}
//           onChange={(e) =>
//             setTask({ ...task, description: e.target.value })
//           }
//           className="border p-2 w-full"
//         ></textarea>

//         <button className="bg-blue-600 text-white px-4 py-2 rounded">
//           Update Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditTask;



import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
  const { id } = useParams(); // URL se task ka id
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
    dueDate: "",
  });

  // Backend se task ka old data load karna
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/tasks/${id}`);
        const data = res.data;

        setFormData({
          title: data.title,
          description: data.description,
          status: data.status,
          priority: data.priority,
          dueDate: data.dueDate ? data.dueDate.split("T")[0] : "",
        });
      } catch (error) {
        console.error(error);
        alert("Error loading task data");
      }
    };

    fetchTask();
  }, [id]);

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update task
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        formData
      );

      if (res.status === 200) {
        alert("Task Updated Successfully!");
        navigate("/all-tasks");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating task");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
        Edit Task
      </h2>

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
            className="w-full border px-3 py-2 rounded-md focus:ring-blue-300 focus:outline-none"
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
            className="w-full border px-3 py-2 rounded-md focus:ring-blue-300 focus:outline-none"
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

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 mt-4 rounded-md hover:bg-green-700 duration-200"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTask;


import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);

  // Load all tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error(error);
      alert("Error fetching tasks");
    }
  };

  // ✅ Wrap fetchTasks inside useEffect to avoid VS Code warning
  useEffect(() => {
    const loadTasks = async () => {
      await fetchTasks();
    };
    loadTasks();
  }, []);

  // Delete Task
  const deleteTask = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`);
        fetchTasks(); // refresh list
      } catch (error) {
        console.error(error);
        alert("Error deleting task");
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-blue-600">All Tasks</h2>

        <Link
          to="/add-task"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          + Add Task
        </Link>
      </div>

      {/* Task Table */}
      <div className="overflow-x-auto shadow-lg">
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Priority</th>
              <th className="p-3 border">Due Date</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="p-5 text-center text-gray-500 font-medium"
                >
                  No tasks found.
                </td>
              </tr>
            ) : (
              tasks.map((task) => (
                <tr key={task._id} className="text-center border-b">
                  <td className="p-3 border">{task.title}</td>
                  <td className="p-3 border capitalize">{task.status}</td>
                  <td className="p-3 border capitalize">{task.priority}</td>
                  <td className="p-3 border">
                    {task.dueDate
                      ? task.dueDate.split("T")[0]
                      : "No Due Date"}
                  </td>
                  {/* Actions */}
                  <td className="p-3 border flex justify-center gap-3">
                    <Link
                      to={`/edit-task/${task._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteTask(task._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTasks;

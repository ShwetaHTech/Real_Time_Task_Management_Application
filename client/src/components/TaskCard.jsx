import { Link } from "react-router-dom";

const TaskCard = ({ task, onDelete }) => {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="font-bold text-lg">{task.title}</h2>
      <p className="text-gray-600">{task.description}</p>

      <div className="mt-3 flex justify-between">
        <Link
          to={`/edit-task/${task._id}`}
          className="bg-blue-500 px-3 py-1 rounded text-white"
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-600 px-3 py-1 rounded text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;

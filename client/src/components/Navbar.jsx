import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">Task Manager</h1>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/all-tasks">All Tasks</Link>
        <Link to="/add-task">Add Task</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

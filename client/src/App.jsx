import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllTasks from "./pages/AllTasks";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
 import Register from "./pages/Register";
import Login from "./pages/Login";


// import "tailwindcss";
function App() {
  return (
    <Router>
      <Navbar />

      <div className="p-6 max-w-5xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-tasks" element={<AllTasks />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/edit-task/:id" element={<EditTask />} />
          <Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

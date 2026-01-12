import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AdminDashboard from "./AdminDashboard";
import PictorialDashboard from "./PictorialDashboard";
import Login from "./Login";
import Signup from "./Signup";
import UserDashboard from "./UserDashboard";
import MaterialsManager from "./MaterialsManager";
import About from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/user" element={<UserDashboard />} />
      <Route path="/pictorial-dashboard" element={<PictorialDashboard />} />
      <Route path="/materials" element={<MaterialsManager />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;

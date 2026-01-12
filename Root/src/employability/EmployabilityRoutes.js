import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './Login';
import Signup from './Signup';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import MaterialsManager from './MaterialsManager';
import NewsLetterManager from './NewsLetterManager';
import StudentJoineesManager from './StudentJoineesManager';
import PictorialDashboard from './PictorialDashboard';
import About from './About';

function EmployabilityRoutes() {
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
            <Route path="/newsletters" element={<NewsLetterManager />} />
            <Route path="/student-joinees" element={<StudentJoineesManager />} />
        </Routes>
    );
}

export default EmployabilityRoutes;

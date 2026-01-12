import { Link } from 'react-router-dom';
import logo from '../employability/assets/vidyamitra_logo.png';
import './Admins.css';

function Admins() {
    return (
        <div className="page-container">
            <img src={logo} alt="Vidyamitra Logo" className="admins-logo" />
            <h1>Admin Actions</h1>
            <div className="admin-options">
                <Link to="/student-joinees" className="admin-option-card">
                    <h2>Add Student Joinees</h2>
                    <p>Manage list of student joinees profiles</p>
                </Link>
                <Link to="/newsletters" className="admin-option-card">
                    <h2>Add Annual News Letters</h2>
                    <p>Upload and manage annual news letters</p>
                </Link>
            </div>
        </div>
    );
}

export default Admins;

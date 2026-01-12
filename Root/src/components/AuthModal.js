import React, { useState } from 'react';
import axios from 'axios';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, onSuccess }) => {
    const [email, setEmail] = useState(''); // Keeps 'email' variable name but used for username/email input
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await axios.post("/api/auth/login", { email, password });
            if (res.data.role === 'admin') {
                onSuccess();
                // Clear form on success
                setEmail('');
                setPassword('');
            } else {
                setError("You are not authorized to access this section.");
            }
        } catch (err) {
            setError("Invalid credentials. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-modal-overlay">
            <div className="auth-modal-content">
                <button className="auth-modal-close" onClick={onClose}>&times;</button>
                <h2 className="auth-modal-title">Admin Access Required</h2>

                {error && <div className="auth-modal-error">{error}</div>}

                <form className="auth-modal-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="auth-modal-input"
                        placeholder="Username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoFocus
                    />
                    <input
                        type="password"
                        className="auth-modal-input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="auth-modal-submit"
                        disabled={loading}
                    >
                        {loading ? 'Verifying...' : 'Access'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AuthModal;

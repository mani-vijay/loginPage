import React, { useState } from 'react';
import { Link } from  'react-router-dom';
import '../index.css';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <Link to ="/login">
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            id="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="button-group">
                        <button type="submit" className="login-btn">Login</button>
                        <button type="button" className="signup-btn">Sign-Up</button>
                    </div>
                </form>
            </div>
        </div>
        </Link>
    );
};

export default LoginComponent;
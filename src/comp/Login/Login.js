import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <h1 className="login-title">Welcome Back</h1>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required />
        <button type="submit" className="login-button">Login</button>
        <a href="#" className="forgot-password">Forgot Password?</a>
        <p className="signup-text">Don't have an account? <a href="#">Sign Up</a></p>
      </form>
    </div>
  );
}

export default Login;

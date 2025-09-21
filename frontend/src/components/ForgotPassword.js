import React, { useState } from 'react';
import { authAPI } from '../services/api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authAPI.forgotPassword({ personalEmail: email });
      setMessage('Password reset link sent to your email');
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to send reset link');
    }
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <p>Enter your email address and we'll send you a link to reset your password.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {message && <p className="message">{message}</p>}
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
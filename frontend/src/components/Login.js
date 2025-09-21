import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, #00ffff, #00cccc)',
          borderRadius: '50%',
          margin: '0 auto 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#000000'
        }}>
          P
        </div>
        <h2>Welcome Back</h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', margin: '0.5rem 0 0' }}>
          Sign in to your Placify account
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               Email Address
            </span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               Password
            </span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        {error && <div className="error">{error}</div>}

        <button
          type="submit"
          className="btn"
          disabled={isLoading}
          style={{
            opacity: isLoading ? 0.7 : 1,
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <span className="loading-shimmer" style={{ width: '16px', height: '16px', borderRadius: '50%' }}></span>
              Signing In...
            </span>
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link to="/forgot-password" className="link">
          Forgot your password?
        </Link>
      </div>

      <div style={{
        margin: '2rem 0',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div style={{
          flex: 1,
          height: '1px',
          background: 'rgba(255, 255, 255, 0.2)'
        }}></div>
        <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>or</span>
        <div style={{
          flex: 1,
          height: '1px',
          background: 'rgba(255, 255, 255, 0.2)'
        }}></div>
      </div>

      <button
        onClick={() => window.location.href = 'http://localhost:5000/api/auth/google'}
        className="btn btn-secondary"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          fontSize: '0.95rem'
        }}
      >
        <span style={{ fontSize: '1.2rem' }}>🌐</span>
        Continue with Google
      </button>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          Don't have an account?{' '}
          <Link to="/signup" className="link" style={{ fontWeight: '600' }}>
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
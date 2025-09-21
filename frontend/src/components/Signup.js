import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    password: '',
    role: 'HR',
    rbAccess: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await signup(formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'Signup failed');
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
        <h2>Create Account</h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', margin: '0.5rem 0 0' }}>
          Join Placify and streamline your recruitment process
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div className="form-group">
            <label htmlFor="name">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 Full Name
              </span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="companyName">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 Company Name
              </span>
            </label>
            <input
              id="companyName"
              type="text"
              name="companyName"
              placeholder="Tech Corp"
              value={formData.companyName}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               Email Address
            </span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
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
            name="password"
            placeholder="Create a strong password"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div className="form-group">
            <label htmlFor="role">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 Role
              </span>
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              disabled={isLoading}
            >
              <option value="HR">HR</option>
              <option value="Recruiter">Recruiter</option>
              <option value="HR+Recruiter">HR+Recruiter</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="rbAccess">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 RB Access
              </span>
            </label>
            <input
              id="rbAccess"
              type="text"
              name="rbAccess"
              placeholder="Optional"
              value={formData.rbAccess}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>
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
              Creating Account...
            </span>
          ) : (
            'Create Account'
          )}
        </button>
      </form>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          Already have an account?{' '}
          <Link to="/login" className="link" style={{ fontWeight: '600' }}>
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
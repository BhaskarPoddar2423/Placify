import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 style={{ cursor: 'pointer', margin: 0 }}>Placify</h1>
      </Link>
      <nav className="nav-links">
        {!user ? (
          <>
            <Link to="/login" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span></span>
              Login
            </Link>
            <Link to="/signup" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #00ffff 0%, #00cccc 100%)',
              color: '#000000',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 255, 255, 0.3)'
            }}>
              <span></span>
              Get Started
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span></span>
              Dashboard
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span></span>
                Welcome, {user.name?.split(' ')[0]}
              </span>
              <button
                onClick={handleLogout}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#ffffff',
                  padding: '0.5rem 1rem',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                onMouseOver={(e) => {
                  e.target.style.borderColor = '#00ffff';
                  e.target.style.color = '#00ffff';
                  e.target.style.background = 'rgba(0, 255, 255, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.color = '#ffffff';
                  e.target.style.background = 'transparent';
                }}
              >
                <span></span>
                Logout
              </button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
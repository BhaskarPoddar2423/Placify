import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #00ffff, #00cccc)',
          borderRadius: '50%',
          margin: '0 auto 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#000000',
          boxShadow: '0 10px 30px rgba(0, 255, 255, 0.3)'
        }}>
          {user?.name?.charAt(0)?.toUpperCase() || 'U'}
        </div>
        <h2 style={{ marginBottom: '0.5rem' }}>Welcome back, {user?.name}!</h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', margin: '0' }}>
          Your Placify dashboard is ready
        </p>
      </div>

      {user && (
        <div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '1.5rem',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                color: '#00ffff',
                marginBottom: '1rem',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                👤 Profile Information
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Name:</span>
                  <span style={{ color: '#ffffff', fontWeight: '500' }}>{user.name}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Email:</span>
                  <span style={{ color: '#ffffff', fontWeight: '500' }}>{user.email}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Role:</span>
                  <span style={{
                    color: '#00ffff',
                    fontWeight: '600',
                    background: 'rgba(0, 255, 255, 0.1)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem'
                  }}>
                    {user.role}
                  </span>
                </div>
                {user.companyEmail && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Company Email:</span>
                    <span style={{ color: '#ffffff', fontWeight: '500' }}>{user.companyEmail}</span>
                  </div>
                )}
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '1.5rem',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                color: '#00ffff',
                marginBottom: '1rem',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                📊 Quick Stats
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{
                  textAlign: 'center',
                  padding: '1rem',
                  background: 'rgba(0, 255, 255, 0.1)',
                  borderRadius: '8px'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00ffff' }}>0</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>Active Jobs</div>
                </div>
                <div style={{
                  textAlign: 'center',
                  padding: '1rem',
                  background: 'rgba(0, 255, 255, 0.1)',
                  borderRadius: '8px'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00ffff' }}>0</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>Candidates</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '1.5rem',
            backdropFilter: 'blur(10px)',
            marginBottom: '2rem'
          }}>
            <h3 style={{
              color: '#00ffff',
              marginBottom: '1rem',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🚀 Quick Actions
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
              <button style={{
                padding: '0.75rem 1rem',
                background: 'rgba(0, 255, 255, 0.1)',
                border: '1px solid rgba(0, 255, 255, 0.3)',
                borderRadius: '8px',
                color: '#00ffff',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(0, 255, 255, 0.2)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'rgba(0, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
              }}>
                📝 Post Job
              </button>
              <button style={{
                padding: '0.75rem 1rem',
                background: 'rgba(0, 255, 255, 0.1)',
                border: '1px solid rgba(0, 255, 255, 0.3)',
                borderRadius: '8px',
                color: '#00ffff',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(0, 255, 255, 0.2)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'rgba(0, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
              }}>
                👥 View Candidates
              </button>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={handleLogout}
              className="btn btn-secondary"
              style={{
                padding: '0.75rem 2rem',
                fontSize: '0.95rem'
              }}
            >
              🚪 Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
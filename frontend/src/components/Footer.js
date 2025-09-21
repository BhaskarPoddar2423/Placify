import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '1.1rem',
          fontWeight: '600'
        }}>
          <span style={{
            width: '30px',
            height: '30px',
            background: 'linear-gradient(135deg, #00ffff, #00cccc)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#000000'
          }}>
            P
          </span>
          Placify
        </div>

        <div style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <a href="#" style={{
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.color = '#00ffff'}
          onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
            About
          </a>
          <a href="#" style={{
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.color = '#00ffff'}
          onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
            Privacy
          </a>
          <a href="#" style={{
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.color = '#00ffff'}
          onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
            Terms
          </a>
          <a href="#" style={{
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.color = '#00ffff'}
          onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
            Support
          </a>
        </div>
      </div>

      <div style={{
        marginTop: '1rem',
        paddingTop: '1rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: 'rgba(255, 255, 255, 0.6)'
      }}>
        <p style={{ margin: '0.5rem 0' }}>
          &copy; 2024 Placify. All rights reserved.
        </p>
        <p style={{ margin: '0.25rem 0', fontSize: '0.8rem' }}>
           Empowering Recruitment with Technology 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
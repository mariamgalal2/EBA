import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAdmin, onJoinClick }) => {
  return (
    <>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img
            src="/EBA_Logo_for_webiste.svg"
            alt="EBA Logo"
            style={{ height: '35px' }}
          />
        </div>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link} className="nav-link">Home</Link>
          <Link to="/about" style={styles.link} className="nav-link">About</Link>
          {isAdmin && (
            <Link to="/admin" style={styles.link} className="nav-link">Admin</Link>
          )}
          <button
            style={styles.button}
            className="join-button"
            onClick={onJoinClick}
          >
            Join Now
          </button>
        </nav>
      </header>

      <style>
        {`
          .nav-link {
            position: relative;
            padding-bottom: 4px;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            background-color: white;
            left: 0;
            bottom: 0;
            transition: width 0.3s ease-in-out;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .join-button {
            background-color: transparent;
            border: 2px solid white;
            color: white;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .join-button:hover {
            background-color: white;
            color: #062840;
          }
        `}
      </style>
    </>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 2rem',
    zIndex: 1000,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    flex: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  button: {
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Header;

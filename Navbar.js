import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const closeModals = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.logo}>Interview Prep</div>
        <div style={styles.links}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
          <button onClick={() => setShowLogin(true)} style={styles.button}>Login</button>
          <button onClick={() => setShowSignup(true)} style={styles.buttonDark}>Signup</button>
        </div>
      </nav>

      {showLogin && (
        <div style={styles.overlay} onClick={closeModals}>
          <div style={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
            <LoginForm onClose={closeModals} />
          </div>
        </div>
      )}

      {showSignup && (
        <div style={styles.overlay} onClick={closeModals}>
          <div style={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
            <SignupForm onClose={closeModals} />
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  nav: {
    backgroundColor: '#3498db',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 24px',
    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
  links: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
  },
  button: {
    backgroundColor: 'white',
    color: '#3498db',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonDark: {
    backgroundColor: '#2c3e50',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  modalWrapper: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '8px',
    minWidth: '300px',
    position: 'relative',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  }
};

export default Navbar;

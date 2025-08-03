// src/components/LoginForm.js

import React, { useState } from 'react';

const LoginForm = ({ onClose }) => {
  const [emailOrNickname, setEmailOrNickname] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy logic
    console.log('Logging in with:', { emailOrNickname, password });
    alert(`Logged in as: ${emailOrNickname}`);
    onClose(); // close modal
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form style={styles.form} onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email or Nickname"
          value={emailOrNickname}
          onChange={(e) => setEmailOrNickname(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    color: '#3498db',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    backgroundColor: '#3498db',
    color: 'white',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default LoginForm;

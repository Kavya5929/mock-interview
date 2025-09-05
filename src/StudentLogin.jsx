import React, { useState } from 'react';
import styles from './StudentLogin.module.css';

const StudentLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [userJson, setUserJson] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password
    };
    setUserJson(user);
    setSubmitted(true);
    // For demonstration, log the user.json format
    console.log('user.json:', JSON.stringify(user, null, 2));
    // Here you would send the user object to your backend
  };

  return (
    <div className={styles.container}>
      <form id="loginForm" className={styles.form} onSubmit={handleSubmit}>
        <h2>STUDENT LOGIN</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Enter your username" id="username" value={username} onChange={e => setUsername(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="userPassword">Password</label>
          <input type="password" placeholder="Password" id="userPassword" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit" id="loginBtn">Login</button>
      </form>
      {submitted && userJson && (
        <pre style={{marginTop: '2rem', color: '#00aaff', background: '#222', padding: '1rem', borderRadius: '8px'}}>
{JSON.stringify(userJson, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default StudentLogin;

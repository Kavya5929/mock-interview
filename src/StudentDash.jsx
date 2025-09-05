import React from 'react';
import styles from './StudentDash.module.css';

const StudentDash = () => (
  <div>
    <nav className={styles.nav}>
      <button>Home</button>
      <button>User Dashboard</button>
      <button className={styles.btnLogout}>Logout</button>
    </nav>
    <header className={styles.dashboardHeader}>
      <div className={styles.userInfoHeader}>
        <div className={styles.userAvatar}>JD</div>
        <h1>Welcome, John Doe!</h1>
      </div>
    </header>
    <div className={styles.mainContent}>
      <div className={styles.cardCustom}>
        <h2>Your Profile</h2>
        <ul className={styles.listGroup}>
          <li><strong>Name:</strong> John Doe</li>
          <li><strong>Email:</strong> user@example.com</li>
          <li><strong>User ID:</strong> U1234567890</li>
          <li><strong>Contact No:</strong> 1234567890</li>
        </ul>
      </div>
      <div className={`${styles.cardCustom} ${styles.mockTestCard}`}>
        <h2>Ready for a Challenge?</h2>
        <p className={styles.lead}>Test your skills with a comprehensive mock placement test.</p>
        <a href="index.html" className={styles.btnStartTest}>Start Mock Test Now!</a>
      </div>
    </div>
    <footer className={styles.footer}>
      © 2025 CodeChallenge Hub. All rights reserved.
    </footer>
  </div>
);

export default StudentDash;

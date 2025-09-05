import React from 'react';
import styles from './StudentResult.module.css';

const StudentResult = () => (
  <div>
    <nav className={styles.nav}>
      <a href="index.html">Home</a>
      <a href="user_dashboard.html">User Dashboard</a>
      <a href="student_results.html">My Results</a>
    </nav>
    <header className={styles.dashboardHeader}>
      <h1>Mock Test Results</h1>
    </header>
    <div className={styles.mainContent}>
      <div className={styles.card}>
        <h2>Overall Performance</h2>
        <p className={styles.summaryText}>Here's a summary of your latest mock test performance.</p>
      </div>
      <div className={styles.card}>
        <h3>Accuracy</h3>
        <p className={`${styles.resultMetric} ${styles.accuracy}`} id="accuracy">0%</p>
        <p className={styles.summaryText}>Your percentage of correct answers.</p>
      </div>
      <div className={styles.card}>
        <h3>Time Concluded</h3>
        <p className={`${styles.resultMetric} ${styles.timeTaken}`}>45:30 <small>min</small></p>
        <p className={styles.summaryText}>Total time taken to complete the test.</p>
      </div>
      <div className={styles.card}>
        <h3>Correct Answers</h3>
        <p className={`${styles.resultMetric} ${styles.trueAnswers}`} id="correct">0</p>
        <p className={styles.summaryText}>Number of questions you answered correctly.</p>
      </div>
      <div className={styles.card}>
        <h3>Incorrect Answers</h3>
        <p className={`${styles.resultMetric} ${styles.falseAnswers}`} id="incorrect">0</p>
        <p className={styles.summaryText}>Number of questions you answered incorrectly.</p>
      </div>
      <div className={styles.chartContainer}>
        <canvas id="resultChart" width="300" height="300"></canvas>
      </div>
    </div>
    <footer className={styles.footer}>
      © 2025 CodeChallenge Hub. All rights reserved.
    </footer>
  </div>
);

export default StudentResult;

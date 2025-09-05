
import React, { useState } from 'react';
import MainPage from './MainPage';
import QS from './QS';
import StudentDash from './StudentDash';
import StudentLogin from './StudentLogin';
import StudentResult from './StudentResult';

function App() {
  const [page, setPage] = useState('main');

  // Simple navigation handler
  const renderPage = () => {
    switch (page) {
      case 'main':
  return <MainPage onNavigate={setPage} />;
      case 'qs':
        return <QS />;
      case 'dashboard':
        return <StudentDash />;
      case 'login':
        return <StudentLogin />;
      case 'result':
        return <StudentResult />;
      default:
  return <MainPage onNavigate={setPage} />;
    }
  };

  // No nav bar, just render the selected page
  return (
    <div>
      <div style={{color:'red', fontWeight:'bold', textAlign:'center'}}></div>
      {renderPage()}
    </div>
  );
}

export default App;

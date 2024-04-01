import React from 'react';
import Login from './components/Login';
import './App.css';

const App: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    
    // Your login logic here
    console.log('Logging in with username:', username, 'and password:', password);
    return 1;
  };

  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default App;

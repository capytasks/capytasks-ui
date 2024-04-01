import React from 'react';
import Login from './components/Login';
import Registration from './components/Registration';
import './App.css';



const App: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = React.useState(true);

  const handleFormChange = () => {
    setShowLoginForm((prevShowLoginForm) => !prevShowLoginForm);
  };

  const handleLogin = (username: string, password: string) => {
    // Handle login logic here
  };

  const handleRegistration = (email: string, password: string) => {
    // Handle registration logic here
  };

  return (
    <div className='main-page'>
      {showLoginForm ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Registration onRegister={handleRegistration} />
      )}

      <a className="change-login-form" onClick={handleFormChange}>      
        {showLoginForm ? (
         "Don't have an account? Register here"
        ) : (
          "Back to the login page"
        )}
      </a>
    </div>
  );
};

export default App;

// pages/Login.tsx
import React, { useState } from 'react';
import '../App.css'; 
import Logo from '../assets/2_logo_2_right.svg';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login">
      <div className='login-logo'><img src={Logo} alt="CapyTasks" /></div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="u"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <input
          type="password"
          name="p"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit" className="btn btn-primary btn-block btn-large">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

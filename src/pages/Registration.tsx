// pages/Registration.tsx
import React, { useState } from 'react';
import '../App.css'; 
import Logo from '../assets/2_logo_2_right.svg';


import Aos from "aos"
import 'aos/dist/aos.css'

const Registration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Handle registration logic here
  };

  React.useEffect(()=> {
    Aos.init({duration:2000})
    }, [])

  return (
    <div data-aos="fade-up" className="login">
      <div className='login-logo'><img src={Logo} alt="CapyTasks" /></div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <input
          type="password"
          name="repeatPassword"
          placeholder="Repeat Password"
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
          required
        />
        <button type="submit" className="btn btn-primary btn-block btn-large">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;

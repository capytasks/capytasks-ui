import React, { useState, ChangeEvent, FormEvent } from 'react';

interface RegistrationProps {
  onRegister: (email: string, password: string) => void;
}

const Registration: React.FC<RegistrationProps> = ({ onRegister }) => {
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

    if (password !== repeatPassword) {
      console.error('Passwords do not match');
      // Handle password mismatch error, e.g., display an error message to the user
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      // Assuming the server returns some data upon successful registration
      const data = await response.json();

      // You can handle the successful registration response here
      console.log('Registration successful:', data);

      // Optionally, clear email, password, and repeat password fields after registration
      setEmail('');
      setPassword('');
      setRepeatPassword('');
    } catch (error) {
      console.error('Error registering:', error);
      // Handle registration error, e.g., display an error message to the user
    }
  };

  return (
    <div className="login">
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


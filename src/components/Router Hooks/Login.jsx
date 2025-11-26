import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  return (
    <>
      <input
        type="email"
        value={email}
        placeholder="Enter your email"
        onClick={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        placeholder="Enter your password"
        onClick={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setLogin(!login);
          navigate('/dashboard');
          console.log('Loged in');
        }}
      >
        {login ? 'Logout' : 'Login'}
      </button>
    </>
  );
}

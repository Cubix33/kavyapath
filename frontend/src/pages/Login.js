import React, { useState } from 'react';
import '../styles/auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Dummy login credentials (you can change these to any values you like)
  const dummyEmail = 'user@example.com';
  const dummyPassword = 'password123';

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check if entered credentials match the dummy credentials
    if (email === dummyEmail && password === dummyPassword) {
      console.log("लॉगिन सफल!"); // Login success
      alert('लॉगिन सफल!');
      // You can redirect to the homepage or user dashboard here
      // window.location.href = '/home'; // Example redirect
    } else {
      console.log("गलत ईमेल या पासवर्ड"); // Login failed
      alert('गलत ईमेल या पासवर्ड');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>लॉगिन करें</h2>
        <form onSubmit={handleLogin}>
          <div className="input-field">
            <label>ईमेल</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="अपना ईमेल दर्ज करें"
            />
          </div>
          <div className="input-field">
            <label>पासवर्ड</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="अपना पासवर्ड दर्ज करें"
            />
          </div>
          <button type="submit" className="btn">लॉगिन करें</button>
        </form>
        <p>खाता नहीं है? <a href="/signup">साइन अप करें</a></p>
      </div>
    </div>
  );
};

export default Login;


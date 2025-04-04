import React, { useState } from 'react';
import '../styles/auth.css'; // Make sure to use the correct path to your CSS file

const Signup = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("पासवर्ड और पुष्टि पासवर्ड मेल नहीं खाते");
      return;
    }
    // Handle the signup logic here (e.g., save user data)
    console.log("साइन-अप किया गया", { name, location, dob, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>साइन अप करें</h2>
        <form onSubmit={handleSignup}>
          <div className="input-field">
            <label>पूरा नाम</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="अपना पूरा नाम दर्ज करें"
            />
          </div>
          <div className="input-field">
            <label>स्थान</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              placeholder="अपना स्थान दर्ज करें"
            />
          </div>
          <div className="input-field">
            <label>जन्मतिथि</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label>पासवर्ड</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="पासवर्ड दर्ज करें"
            />
          </div>
          <div className="input-field">
            <label>पासवर्ड पुष्टि करें</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="पासवर्ड फिर से दर्ज करें"
            />
          </div>
          <button type="submit" className="btn">साइन अप करें</button>
        </form>
        <p>पहले से खाता है? <a href="/login">लॉगिन करें</a></p>
      </div>
    </div>
  );
};

export default Signup;


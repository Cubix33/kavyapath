import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // for navigation after successful login/signup
import '../styles/login-signup.css';

const LoginSignup = ({ type }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    location: '',
    dob: '',
    password: '',
    confirmPassword: '',
  });
  const history = useHistory();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission for login or signup
  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'login') {
      // Handle login logic here
      console.log('Logging in with:', formData);
      history.push('/home'); // Redirect to home after successful login
    } else {
      // Handle signup logic here
      console.log('Signing up with:', formData);
      history.push('/home'); // Redirect to home after successful signup
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>{type === 'login' ? 'लॉगिन' : 'साइन अप'}</h2>
        <form onSubmit={handleSubmit}>
          {type === 'signup' && (
            <>
              <input
                type="text"
                name="name"
                placeholder="पूरा नाम"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="username"
                placeholder="यूजरनाम"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="location"
                placeholder="स्थान"
                value={formData.location}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="ईमेल पता"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="पासवर्ड"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {type === 'signup' && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="पासवर्ड की पुष्टि करें"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          )}
          <button type="submit">
            {type === 'login' ? 'लॉगिन' : 'साइन अप करें'}
          </button>
        </form>
        <div className="link-text">
          {type === 'login' ? (
            <>
              नया हैं? <a href="/signup">साइन अप करें</a>
            </>
          ) : (
            <>
              पहले से अकाउंट है? <a href="/login">लॉगिन करें</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;


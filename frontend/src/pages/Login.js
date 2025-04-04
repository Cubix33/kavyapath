import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";  // Import the CSS file here

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy authentication check (Replace with actual backend auth)
    if (formData.email === "user@example.com" && formData.password === "password") {
      console.log("User Logged In:", formData);
      navigate("/"); // Redirect to home
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-container">
      <Container>
        <Form onSubmit={handleLogin} className="login-form">
          <h2 className="login-title">🔑 लॉगिन करें</h2>
          {error && <Alert variant="danger">❌ ईमेल या पासवर्ड गलत है!</Alert>}

          <Form.Group className="mb-3">
            <Form.Label>📧 ईमेल</Form.Label>
            <Form.Control type="email" name="email" placeholder="अपना ईमेल दर्ज करें" onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>🔑 पासवर्ड</Form.Label>
            <Form.Control type="password" name="password" placeholder="पासवर्ड दर्ज करें" onChange={handleChange} required />
          </Form.Group>

          <Button variant="success" type="submit" className="login-btn">लॉगिन करें</Button>

          <p className="signup-text">नया खाता बनाएँ? <Button variant="link" onClick={() => navigate("/signup")}>साइन अप करें</Button></p>
        </Form>
      </Container>
    </div>
  );
};

export default Login;


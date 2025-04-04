import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Signed Up:", formData);
    setSubmitted(true);
    setTimeout(() => navigate("/login"), 2000); // Redirect to login after 2 sec
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center">🔐 साइन अप करें</h2>
      {submitted && <Alert variant="success">✅ सफलतापूर्वक साइन अप हो गया!</Alert>}

      <Form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
        <Form.Group className="mb-3">
          <Form.Label>👤 नाम</Form.Label>
          <Form.Control type="text" name="name" placeholder="अपना नाम दर्ज करें" onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>📧 ईमेल</Form.Label>
          <Form.Control type="email" name="email" placeholder="अपना ईमेल दर्ज करें" onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>🔑 पासवर्ड</Form.Label>
          <Form.Control type="password" name="password" placeholder="पासवर्ड दर्ज करें" onChange={handleChange} required />
        </Form.Group>

        <Button variant="primary" type="submit">साइन अप करें</Button>
      </Form>

      <p className="text-center mt-3">पहले से खाता है? <Button variant="link" onClick={() => navigate("/login")}>लॉगिन करें</Button></p>
    </Container>
  );
};

export default Signup;


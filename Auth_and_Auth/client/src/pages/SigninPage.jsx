import { useState } from "react";
import { useProvideAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const initialState = {
  username: "",
  password: "",
};

function SigninPage() {
  const [formData, setFormData] = useState(initialState);
  const { signin } = useProvideAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    signin(formData.username, formData.password)
      .then(() => navigate("/dashboard"))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Container>
      <h1>Create an Account</h1>
      <Row>
        <Col xs={12} md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 4 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="username">Username: </Form.Label>
              <Form.Control
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="password">Password: </Form.Label>
              <Form.Control
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit" variant="primary" size="md">
                Sign In
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SigninPage;

import { useNavigate } from 'react-router-dom';
import { Button, Card, Form, Container } from "react-bootstrap";
import Logo from '../assets/logo.svg';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

// TODO: Add back in the persistence of setIsBlueVortexBought, setIsGondorGreyBought,
// setIsGreenCoverBought, setIsGryffindorRedBought, setIsMarbleFacadeBought. 

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit called");
    const form = event.target;
    if (form.email.value === "") {
      alert("Email is blank. Please fill in value.");
    } else if (form.password.value === "") {
      alert("Password is blank. Please fill in value.");
    } else {
      const success = login(form.email.value, form.password.value);
      if (success) {
        alert(`Login successful for user: ${form.email.value}!`);
        navigate("/");
      } else {
        alert("Login failed. Please try again.");
      }
    }
  }

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <div className="text-center mt-4 mb-4">
            <img className="rounded-4" src={Logo} alt="Binder Logo" style={{ width: "250px", height: 'auto', border: "1px solid #CCD5AE" }} />
          </div>
          <Card.Title as="h1" className="mb-4 text-center">Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email here..." />
            </Form.Group>
            <Form.Group className="mb-4" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control className="mb-4" type="password" placeholder="Enter password here..." />
            </Form.Group>
            <Button type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login; 
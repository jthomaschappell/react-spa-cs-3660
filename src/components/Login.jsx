import { useNavigate } from 'react-router-dom';
import { Button, Card, Form, Container } from "react-bootstrap";
import Logo from '../assets/logo.svg';

function Login({ myUsername, setMyUsername,
  setIsBlueVortexBought,
  setIsGondorGreyBought,
  setIsGreenCoverBought, setIsGryffindorRedBought,
  setIsMarbleFacadeBought
}) {
  const navigate = useNavigate();
  console.log(`Before, it was: ${myUsername}`);
  console.log(`Now, it is: ${myUsername}`);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    if (form.email.value === "") {
      alert("Email is blank. Please fill in value.");
    } else if (form.password.value === "") {
      alert("Password is blank. Please fill in value.");
    } else {
      // Reset everything for new login
      setIsBlueVortexBought(false);
      setIsGondorGreyBought(false);
      setIsGreenCoverBought(false);
      setIsGryffindorRedBought(false);
      setIsMarbleFacadeBought(false);
      let emailValue = (form.email.value === "") ? "no input" : form.email.value;
      console.log(`The user's name is ${emailValue}`);
      setMyUsername(emailValue);
      alert(`Login successful for user: ${emailValue}!`);
      navigate("/");
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
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button, Card, Form, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Logo from './assets/logo.svg';
import MainImage from './assets/grandma_reading.jpg';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
// Therefore, React-bootstrap works here. 
function Home() {
  return (
    <>
      <h1 className="display-4 fw-bold mb-4">Custom Book Covers,<br></br> Tailored to Your Story</h1>
      <p className="lead text-muted mb-4 fw-semibold">Transform your books with perfectly fitted, beautifully designed covers
      </p>
      <Button className="mb-4" onClick={() => alert("Contact support@binder.com to learn more!")}>LEARN MORE</Button>

      {/* We need a Call to Action button here */}
      <div className="d-flex justify-content-center mb-4">
        <img src={MainImage} className="img-fluid w-100 rounded-4" alt="description" />
      </div>
    </>
  );
}

function Login() {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    if (form.email.value === "") {
      alert("Email is blank. Please fill in value.");
    } else if (form.password.value === "") {
      alert("Password is blank. Please fill in value.");
    } else {
      let emailValue = (form.email.value === "") ? "no input" : form.email.value;

      console.log(`Login was called with ${emailValue}`);
      alert(`Login successful!`);
      navigate("/");
    }

  }
  return (
    <Container className="mt-4 d-flex justify-content-center">

      {/* <h2 className="mb-3">Login</h2> */}
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

function Gallery() {
  return (
    <>
      <h1>This is the Gallery Page</h1></>
  );
}

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </Router>
      {/* <h1>It&apos;s Morbin Time Said the Blind Man</h1> */}
    </>
  );
}

export default App; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Logo from './assets/binder_better.svg'
import { Button, Card, Form, Container } from "react-bootstrap";
import Logo from './assets/logo.svg';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        {/* <li><Link to="/"> */}
        {/* <img src={Logo} alt="Logo" width="128"/></Link></li> */}
        {/* <img src={Logo} alt="Logo" width="32" height="32" />
 */}
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
      <h1 className="greeting">Hi Everyone</h1>
      <Button onClick={() => alert("Hello!")}>Say Hello</Button>
    </>
  );
}

function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    alert(`Name: ${form.email.value}\n` +
      `Email: ${form.password.value}\n`);
  }

  return (
    <Container className="mt-4 d-flex justify-content-center">

      {/* <h2 className="mb-3">Login</h2> */}
      <Card style={{ width: '400px'}}>
      <Card.Body>
      <div className="text-center mt-4 mb-4">
            <img src={Logo} alt="Binder Logo" style={{ width: "250px", height: 'auto' }} />
          </div>
          <Card.Title as="h1" className="mb-4 text-center">Login</Card.Title>
          {/* TODO: How do I include an imported SVG here? */}
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

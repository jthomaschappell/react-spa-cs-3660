import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Logo from './assets/binder_better.svg'
import { Button, Form, Container } from "react-bootstrap";

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
    alert(`Name: ${form.fullName.value}\n` +
      `Email: ${form.email.value}\n` +
      `Notif: ${form.notifications.checked}`);
  }

  return (
    <Container>
      <h2 className="mb-3">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="fullName">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="text" placeholder="First Last" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="user@email.com" />
          <Form.Text className="text-muted">
            Your email address will never be shared.
          </Form.Text>
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
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

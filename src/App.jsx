import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button, Card, Form, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Logo from './assets/logo.svg';
import Carousel from 'react-bootstrap/Carousel';

// import BinderIcon from './assets/Binder.svg';
import BlackFamilyImage from './assets/black_family.png';
// import BlueVortexImage from './assets/blue_vortex.jpeg';
// import DndBookCoverImage from './assets/dnd_book_cover.jpeg';
import DndCoolCoversImage from './assets/dnd_cool_covers.webp';
// import DndGenericColorImage from './assets/dnd_generic_cool_color.webp';
// import FamilyReading2Image from './assets/familyreading2.webp';
// import GondorGreyImage from './assets/gondor_grey.jpeg';
import GrandmaReadingImage from './assets/grandma_reading.jpg';
// import GreenImage from './assets/green.jpeg';
// import GryffindorRedImage from './assets/gryffindor_red.jpeg';
// import HogwartsImage from './assets/hogwarts.webp';
// import KidsBookCoverImage from './assets/kids_book_cover.webp';
// import LibraryFamily3Image from './assets/library_family_3.jpg';
import LittleWomenImage from './assets/little_women.jpg';
// import LogoIcon from './assets/logo.svg';
// import LordOfRingsImage from './assets/lord_of_rings.jpg';
// import MarbleCountertopImage from './assets/marble_countertop.jpeg';
// import MomAndCurlyHairedImage from './assets/mom_and_curly_haired.jpeg';
// import NonfictionMaybeImage from './assets/nonfiction_maybe.jpg';
// import PinkTajMahalImage from './assets/pink_taj_mahal.jpeg';
// import QuiltyImage from './assets/quilty.jpeg';
// import ReactIcon from './assets/react.svg';
// import StackBookCoversImage from './assets/stack_book_covers.jpeg';
// import WormwoodImage from './assets/wormwood.jpeg';
// import NonfictionImage from './assets/nonfiction_better.jpg';

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
  const navigate = useNavigate();
  return (
    <>
      <img className="rounded-5 mb-4" src={Logo} alt="Binder Logo" style={{ width: "500px", height: 'auto', border: "1px solid #CCD5AE" }} />
      <h1 className="display-4 fw-bold mb-4">Custom Book Covers,<br></br> Tailored to Your Story</h1>
      <p className="lead text-muted mb-4 fw-semibold">Transform your books with perfectly fitted, beautifully designed covers</p>
      <Button size="lg" className="mb-4" onClick={() => navigate('/gallery')}>SEE GALLERY</Button>

      {/* We need a Call to Action button here */}
      <div className="d-flex justify-content-center mb-4">
        <img src={GrandmaReadingImage} className="img-fluid mb-5 w-100 rounded-4" alt="description" />
      </div>
      {/* <MenuList /> */}
      <CarouselSection />
      <br></br>
      <br></br>
      <br></br>
      <Button size="lg" className="mb-4" onClick={() => alert("Contact support@binder.com to learn more!")}>LEARN MORE</Button>
      <br></br>
      <br></br>
      <br></br>

    </>
  );
}

function NotFound() {
  return <h1>404 Error: Page Not Found!</h1>;
}

function CarouselSection() {
  return <>
    <h2 className="text-muted mb-5 fw-semibold">NEWS</h2>
    <Carousel>
      <Carousel.Item>
        <img src={DndCoolCoversImage} alt="First slide" className='carousel-image'
        />
        <Carousel.Caption>
          <h3>New D&D Covers!</h3>
          <p>Get a custom D&D cover for your Dungeon Master, or for anyone you know who plays D&D!.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={BlackFamilyImage} alt="Second slide" className='carousel-image' />
        <Carousel.Caption>
          <h3>Encourage Reading</h3>
          <p>Children enjoy reading more when it becomes a game or adventure to them - Binder covers can help make that difference!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={LittleWomenImage} alt="Third slide" className='carousel-image' />
        <Carousel.Caption>
          <h3 style={{ color: '' }}>New Classic Selections!</h3>
          <p style={{ color: '' }}>Check out the gallery!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>;
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
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
      {/* <h1>It&apos;s Morbin Time Said the Blind Man</h1> */}
    </>
  );
}

export default App; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Logo from './assets/logo.svg';
import Carousel from 'react-bootstrap/Carousel';

// import BinderIcon from './assets/Binder.svg';
import BlackFamilyImage from './assets/black_family.png';
import BlueVortexImage from './assets/blue_vortex.jpeg';
import DndBookCoverImage from './assets/dnd_book_cover.jpeg';
import DndCoolCoversImage from './assets/dnd_cool_covers.webp';
// import DndGenericColorImage from './assets/dnd_generic_cool_color.webp';
// import FamilyReading2Image from './assets/familyreading2.webp';
import GondorGreyImage from './assets/gondor_grey.jpeg';
import GrandmaReadingImage from './assets/grandma_reading.jpg';
import GreenImage from './assets/green.jpeg';
import GryffindorRedImage from './assets/gryffindor_red.jpeg';
import HogwartsImage from './assets/hogwarts.webp';
import KidsBookCoverImage from './assets/kids_book_cover.webp';
// import LibraryFamily3Image from './assets/library_family_3.jpg';
import LittleWomenImage from './assets/little_women.jpg';
// import LogoIcon from './assets/logo.svg';
import LordOfRingsImage from './assets/lord_of_rings.jpg';
import MarbleCountertopImage from './assets/marble_countertop.jpeg';
// import MomAndCurlyHairedImage from './assets/mom_and_curly_haired.jpeg';
import NonfictionMaybeImage from './assets/nonfiction_maybe.jpg';
import PinkTajMahalImage from './assets/pink_taj_mahal.jpeg';
import QuiltyImage from './assets/quilty.jpeg';
// import ReactIcon from './assets/react.svg';
// import StackBookCoversImage from './assets/stack_book_covers.jpeg';
// import WormwoodImage from './assets/wormwood.jpeg';
import NonfictionImage from './assets/nonfiction_better.jpg';

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
      <Button size="lg" className="mb-4" onClick={
        () => {
          alert("Contact support@binder.com to learn more!")
          // console.log("Pressed!");

        }}>LEARN MORE</Button>
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
// TODO: How to make the spacing always show up. 


function ProductCard({ myTitle, myMessage, myImage }) {
  
  let cards = [
    {
      title: "Blue Vortex",
      message: "The blue vortex is an excellent product choice!",
      image: { BlueVortexImage }
    },
    {
      title: "D&D Book Cover",
      message: "This book cover is great for D&D players!",
      image: { DndBookCoverImage }
    },
    {
      title: "Gondor Grey",
      message: "This Gondor Grey cover reminds you of Lord of the Rings!",
      image: { GondorGreyImage }
    },
    {
      title: "Green",
      message: "Great, non-bombastic green cover!",
      image: { GreenImage }
    },
    {
      title: "Gryffindor Red",
      message: "Harry Potter!",
      image: { GryffindorRedImage }
    },
    {
      title: "Hogwarts Collection",
      message: "This is great for Harry Potter fans!",
      image: { HogwartsImage }
    },
    {
      title: "Kids Book Covers",
      message: "Explore our kids collection!",
      image: { KidsBookCoverImage }
    },
    {
      title: "Classic Collection",
      message: "This book cover style is great for the literary classics!",
      image: { LittleWomenImage }
    },
    {
      title: "Lord of the Rings Cover",
      message: "Not all those who wander are lost...",
      image: { LordOfRingsImage }
    },
    {
      title: "Marble Countertop",
      message: "Great color scheme on this one!",
      image: { MarbleCountertopImage }
    },
    {
      title: "Nonfiction 1",
      message: "Great nonfiction covers!",
      image: { NonfictionMaybeImage }
    },
    {
      title: "Nonfiction 2",
      message: "More great nonfiction covers!",
      image: { NonfictionImage }
    },
    {
      title: "Pink Taj Mahal",
      message: "This one is inspired by Southeast Asia!",
      image: { PinkTajMahalImage }
    },
    {
      title: "Quilty",
      message: "Reminds you of your Grandma's quilts!",
      image: { QuiltyImage }
    },
  ];

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={myImage} />
      <Card.Body>
        <Card.Title>{myTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          {myMessage}
        </Card.Text>
        <Button onClick={() => {
          console.log("Pressed!");
          for (let item of cards) {
            console.log(item);
          }

        }}>Buy Now</Button>
        {/* <Button size="lg" className="mb-4" onClick={
        () => {
          alert("Contact support@binder.com to learn more!")
          // console.log("Pressed!");

        }}>LEARN MORE</Button> */}
        {/* <Card.Link href="#">Card Link</Card.Link> */}
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
}



function Gallery() {
  return (
    <>
      <Container fluid>
        <h1 className="display-4 fw-bold mb-4">GALLERY</h1>
        {/* This means 1 for xsmall screens, 2 for small screens, 3 for medium, 4 for large screens. */}
        {/* g-4 means that there is a gutter between them of 4. */}
        <Row xs={1} sm={2} md={3} lg={4}>
          {/* map function */}

          {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
            <Col key={index} className="d-flex gallery-card mb-4" style={{ minWidth: '280px' }}><ProductCard /></Col>
          ))} */}

          {cards.map((card, index) => (
            <Col key={index} className="d-flex mb-4" style={{minWidth: '280px'}}>ProductCard myTitle = {card.title} myMessage = {card.message} myImage={card.image}</Col>
            // <Col className="d-flex mb-4" style={{minWidth: '280px'}} key={index} myTitle={card.title} myMessage = {card.message} myImage={card.image}/>
          ))};

        </Row>

      </Container >
    </>
    // TODO: First look at the page that shows all of the things you can do with card. 
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

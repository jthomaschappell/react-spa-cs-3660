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
import DndCoolCoversImage from './assets/dnd_cool_covers.webp';
import GondorGreyImage from './assets/gondor_grey.jpeg';
import GrandmaReadingImage from './assets/grandma_reading.jpg';
import GreenImage from './assets/green.jpeg';
import GryffindorRedImage from './assets/gryffindor_red.jpeg';
import LittleWomenImage from './assets/little_women.jpg';
import MarbleCountertopImage from './assets/marble_countertop.jpeg';
import { useState } from 'react';


function App() {

  // isBlueVortexBought
  const [isBlueVortexBought, setIsBlueVortexBought] = useState(false);
  const [isMarbleFacadeBought, setIsMarbleFacadeBought] = useState(false);
  const [isGondorGreyBought, setIsGondorGreyBought] = useState(false);
  const [isGreenCoverBought, setIsGreenCoverBought] = useState(false);
  const [isGryffindorRedBought, setIsGryffindorRedBought] = useState(false);

  // username
  const [myUsername, setMyUsername] = useState("");

  return (
    <>
      <Router>
        <div className='App'>
          <Navbar myUsername={myUsername} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login myUsername={myUsername} setMyUsername={setMyUsername} isBlueVortexBought={isBlueVortexBought}
              setIsBlueVortexBought={setIsBlueVortexBought}
              isMarbleFacadeBought={isMarbleFacadeBought}
              setIsMarbleFacadeBought={setIsMarbleFacadeBought}
              isGondorGreyBought={isGondorGreyBought}
              setIsGondorGreyBought={setIsGondorGreyBought}
              isGreenCoverBought={isGreenCoverBought}
              setIsGreenCoverBought={setIsGreenCoverBought}
              isGryffindorRedBought={isGryffindorRedBought}
              setIsGryffindorRedBought={setIsGryffindorRedBought} />} />
            <Route path="/gallery" element={<Gallery
              isBlueVortexBought={isBlueVortexBought}
              setIsBlueVortexBought={setIsBlueVortexBought}
              isMarbleFacadeBought={isMarbleFacadeBought}
              setIsMarbleFacadeBought={setIsMarbleFacadeBought}
              isGondorGreyBought={isGondorGreyBought}
              setIsGondorGreyBought={setIsGondorGreyBought}
              isGreenCoverBought={isGreenCoverBought}
              setIsGreenCoverBought={setIsGreenCoverBought}
              isGryffindorRedBought={isGryffindorRedBought}
              setIsGryffindorRedBought={setIsGryffindorRedBought}
            />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
function Navbar({ myUsername }) {
  console.log(`My username from navbar: ${myUsername}`);
  return (
    <nav className='navbar'>
      <ul>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/">Home</Link></li>
        {(myUsername === "") && <li><Link to="/login">Login</Link></li>}
        {(myUsername !== "") && <li><Link to="/login">Switch Accounts</Link></li>}
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

      console.log(`Login was called with ${emailValue}`);
      alert(`Login successful for user: ${emailValue}!`);
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

function Gallery({
  isBlueVortexBought, setIsBlueVortexBought,
  isGondorGreyBought, setIsGondorGreyBought, isGreenCoverBought,
  setIsGreenCoverBought, isGryffindorRedBought, setIsGryffindorRedBought,
  isMarbleFacadeBought, setIsMarbleFacadeBought
}) {
  return (
    // TODO: Make it show when the thing is bought. 
    <>
      <Container>
        <h1 className="display-4 fw-bold mb-4">GALLERY</h1>
        {/* This means 1 for xsmall screens, 2 for small screens, 3 for medium, 4 for large screens. */}
        {/* g-4 means that there is a gutter between them of 4. */}
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Img className="card-image-top" variant="top" src={BlueVortexImage} />
                <Card.Title>Blue Vortex</Card.Title>
                <Card.Text>
                  Low in stock!
                </Card.Text>
                <Button onClick={() => {
                  if (!isBlueVortexBought) {
                    alert("You have bought 'Blue Vortex'!");
                    setIsBlueVortexBought(true);
                    console.log(isBlueVortexBought); // this should now be true. 
                  }
                }}>{!isBlueVortexBought ? "BUY NOW" : "BOUGHT"}</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Img variant="top" className="card-image-top" src={MarbleCountertopImage} />

                <Card.Title>Marble Facade</Card.Title>
                <Card.Text>
                  Exotic!
                </Card.Text>
                <Button onClick={() => {
                  if (!isMarbleFacadeBought) {
                    alert("You have bought 'Marble Facade'!");
                    setIsMarbleFacadeBought(true);

                    console.log(isMarbleFacadeBought); // this should now be true. 
                  }
                }}>{!isMarbleFacadeBought ? "BUY NOW" : "BOUGHT"}</Button>

              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Img variant="top" className="card-image-top" src={GondorGreyImage} />
                <Card.Title>Gondor Grey</Card.Title>
                <Card.Text>
                  Lord of the Rings!
                </Card.Text>
                <Button onClick={() => {
                  if (!isGondorGreyBought) {

                    alert("You have bought 'Gondor Grey'!");
                    setIsGondorGreyBought(true);
                    console.log(`gondor grey is bought: ${isGondorGreyBought}`); // this should now be true. 
                  }
                }}>{isGondorGreyBought ? "BOUGHT" : "BUY NOW"}</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Img variant="top" className="card-image-top" src={GreenImage} />
                <Card.Title>Green Cover</Card.Title>
                <Card.Text>
                  Classic forest green!
                </Card.Text>
                <Button onClick={() => {
                  if (!isGreenCoverBought) {
                    alert("You have bought 'Green Cover'!");
                    setIsGreenCoverBought(true);
                    console.log(isGreenCoverBought); // this should now be true. 
                  }
                }}>{isGreenCoverBought ? "BOUGHT" : "BUY NOW"}</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Img variant="top" className="card-image-top" src={GryffindorRedImage} />

                <Card.Title>Gryffindor Red</Card.Title>
                <Card.Text>
                  Gryffindor Red is a favorite!
                </Card.Text>
                <Button onClick={() => {
                  if (!isGryffindorRedBought) {
                    alert("You have bought 'Gryffindor Red'!");
                    setIsGryffindorRedBought(true);
                    console.log(isGryffindorRedBought); // this should now be true. 
                  }
                }}>{isGryffindorRedBought ? "BOUGHT" : "BUY NOW"}</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container >
    </>
  );
}

export default App; 

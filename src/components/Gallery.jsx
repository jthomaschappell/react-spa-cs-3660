import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import BlueVortexImage from '../assets/blue_vortex.jpeg';
import MarbleCountertopImage from '../assets/marble_countertop.jpeg';
import GondorGreyImage from '../assets/gondor_grey.jpeg';
import GreenImage from '../assets/green.jpeg';
import GryffindorRedImage from '../assets/gryffindor_red.jpeg';

function Gallery({
  isBlueVortexBought, setIsBlueVortexBought,
  isGondorGreyBought, setIsGondorGreyBought, isGreenCoverBought,
  setIsGreenCoverBought, isGryffindorRedBought, setIsGryffindorRedBought,
  isMarbleFacadeBought, setIsMarbleFacadeBought
}) {
  return (
    <>
      <Container>
        <h1 className="display-4 fw-bold mb-4">GALLERY</h1>
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
                    console.log(isBlueVortexBought);
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
                    console.log(isMarbleFacadeBought);
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
                    console.log(`gondor grey is bought: ${isGondorGreyBought}`);
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
                    console.log(isGreenCoverBought);
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
                    console.log(isGryffindorRedBought);
                  }
                }}>{isGryffindorRedBought ? "BOUGHT" : "BUY NOW"}</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Gallery; 
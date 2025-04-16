import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import BlueVortexImage from '../assets/blue_vortex.jpeg';
import MarbleCountertopImage from '../assets/marble_countertop.jpeg';
import GondorGreyImage from '../assets/gondor_grey.jpeg';
import GreenImage from '../assets/green.jpeg';
import GryffindorRedImage from '../assets/gryffindor_red.jpeg';
import GalleryItem from '../widgets/GalleryItem';
function Gallery({
  isBlueVortexBought, setIsBlueVortexBought,
  isGondorGreyBought, setIsGondorGreyBought, isGreenCoverBought,
  setIsGreenCoverBought, isGryffindorRedBought, setIsGryffindorRedBought,
  isMarbleFacadeBought, setIsMarbleFacadeBought
}) {
  // TODO: Testing new refactored GalleryItem component.
  return (
    <>
      <Container>
        <h1 className="display-4 fw-bold mb-4">GALLERY</h1>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          <GalleryItem
            image={BlueVortexImage}
            name="Blue Vortex"
            description="Low in stock!"
            isBought={isBlueVortexBought}
            onBuyClick={() => setIsBlueVortexBought(true)}
          />
          <GalleryItem
            image={MarbleCountertopImage}
            name="Marble Facade"
            description="Exotic!"
            isBought={isMarbleFacadeBought}
            onBuyClick={() => setIsMarbleFacadeBought(true)}
          />
          <GalleryItem
            image={GondorGreyImage}
            name="Gondor Grey"
            description="Lord of the Rings!"
            isBought={isGondorGreyBought}
            onBuyClick={() => setIsGondorGreyBought(true)}
          />
          <GalleryItem
            image={GreenImage}
            name="Green Cover"
            description="Classic forest green!"
            isBought={isGreenCoverBought}
            onBuyClick={() => setIsGreenCoverBought(true)}
          />
          <GalleryItem
            image={GryffindorRedImage}
            name="Gryffindor Red"
            description="Gryffindor Red is a favorite!"
            isBought={isGryffindorRedBought}
            onBuyClick={() => setIsGryffindorRedBought(true)}
          />
        </Row>
      </Container>
    </>
  );
}

export default Gallery; 
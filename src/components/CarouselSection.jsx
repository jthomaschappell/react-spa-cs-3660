import { Carousel } from 'react-bootstrap';
import DndCoolCoversImage from '../assets/dnd_cool_covers.webp';
import BlackFamilyImage from '../assets/black_family.png';
import LittleWomenImage from '../assets/little_women.jpg';

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

export default CarouselSection; 
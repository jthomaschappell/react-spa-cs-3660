import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Logo from '../assets/logo.svg';
import GrandmaReadingImage from '../assets/grandma_reading.jpg';
import CarouselSection from './CarouselSection';

function Home() {
  const navigate = useNavigate();
  
  return (
    <>
      <img className="rounded-5 mb-4" src={Logo} alt="Binder Logo" style={{ width: "500px", height: 'auto', border: "1px solid #CCD5AE" }} />
      <h1 className="display-4 fw-bold mb-4">Custom Book Covers,<br></br> Tailored to Your Story</h1>
      <p className="lead text-muted mb-4 fw-semibold">Transform your books with perfectly fitted, beautifully designed covers</p>
      <Button size="lg" className="mb-4" onClick={() => navigate('/gallery')}>SEE GALLERY</Button>

      <div className="d-flex justify-content-center mb-4">
        <img src={GrandmaReadingImage} className="img-fluid mb-5 w-100 rounded-4" alt="description" />
      </div>
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

export default Home; 
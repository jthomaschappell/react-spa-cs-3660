import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
import AuthRoute from './AuthRoute';
import Admin from './components/Admin';

function App() {
  const [isBlueVortexBought, setIsBlueVortexBought] = useState(false);
  const [isMarbleFacadeBought, setIsMarbleFacadeBought] = useState(false);
  const [isGondorGreyBought, setIsGondorGreyBought] = useState(false);
  const [isGreenCoverBought, setIsGreenCoverBought] = useState(false);
  const [isGryffindorRedBought, setIsGryffindorRedBought] = useState(false);

  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/gallery" element={
              <Gallery
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
              />
            } />
            <Route element={<AuthRoute />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App; 

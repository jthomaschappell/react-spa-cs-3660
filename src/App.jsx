import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';

function App() {
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

export default App; 

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
  const [isLordOfTheRingsBought, setIsLordOfTheRingsBought] = useState(false);
  const [isWutheringHeightsBought, setIsWutheringHeightsBought] = useState(false);
  const [isPrideAndPrejudiceBought, setIsPrideAndPrejudiceBought] = useState(false);
  const [isDraculaBought, setIsDraculaBought] = useState(false);
  const [isLittleWomenBought, setIsLittleWomenBought] = useState(false);

  const [purchasedItems, setPurchasedItems] = useState([
    {
      id: 1,
      name: "Blue Vortex", 
      description: "Almost out of stock!",
      isBought: isBlueVortexBought,
      setIsBought: setIsBlueVortexBought
    },
    {
      id: 2,
      name: "Marble Intimidating Facade",
      description: "Rare and exotic!",
      isBought: isMarbleFacadeBought,
      setIsBought: setIsMarbleFacadeBought
    },
    {
      id: 3,
      name: "Gondor Grey",
      description: "Gondor Grey is a classic favorite!",
      isBought: isGondorGreyBought,
      setIsBought: setIsGondorGreyBought
    },
    {
      id: 4,
      name: "Green Cover",
      description: "Green Cover is a favorite!",
      isBought: isGreenCoverBought,
      setIsBought: setIsGreenCoverBought
    },
    {
      id: 5,
      name: "Gryffindor Red",
      description: "Gryffindor Red is a fan favorite!",
      isBought: isGryffindorRedBought,
      setIsBought: setIsGryffindorRedBought
    },
  ]);


  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />

            {/* we do an auth route on everything except for the login. */}
            <Route element={<AuthRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={
                <Gallery
                  purchasedItems={purchasedItems}
                  setPurchasedItems={setPurchasedItems}
                />
              } />
              <Route path="/admin" element={<Admin />} />
              <Route path="/*" element={<NotFound />} />
            </Route>
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App; 

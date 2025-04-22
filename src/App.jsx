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
      description: "Low in stock!",
      isBought: isBlueVortexBought,
      setIsBought: setIsBlueVortexBought
    },
    {
      id: 2,
      name: "Marble Facade",
      description: "Exotic!",
      isBought: isMarbleFacadeBought,
      setIsBought: setIsMarbleFacadeBought
    },
    {
      id: 3,
      name: "Gondor Grey",
      description: "Gondor Grey is a favorite!",
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
      description: "Gryffindor Red is a favorite!",
      isBought: isGryffindorRedBought,
      setIsBought: setIsGryffindorRedBought
    },
    {
      id: 6,
      name: "Lord of the Rings",
      description: "Lord of the Rings is a favorite!",
      isBought: isLordOfTheRingsBought,
      setIsBought: setIsLordOfTheRingsBought
    },
    {
      id: 7,
      name: "Wuthering Heights",
      description: "Wuthering Heights is a favorite!",
      isBought: isWutheringHeightsBought,
      setIsBought: setIsWutheringHeightsBought
    },
    {
      id: 8,
      name: "Pride and Prejudice",
      description: "Pride and Prejudice is a favorite!",
      isBought: isPrideAndPrejudiceBought,
      setIsBought: setIsPrideAndPrejudiceBought
    },
    {
      id: 9,
      name: "Dracula",
      description: "Dracula is a favorite!",
      isBought: isDraculaBought,
      setIsBought: setIsDraculaBought
    },
    {
      id: 10,
      name: "Little Women",
      description: "Little Women is a favorite!",
      isBought: isLittleWomenBought,
      setIsBought: setIsLittleWomenBought
    }
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

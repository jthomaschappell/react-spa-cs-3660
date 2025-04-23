import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
import AuthRoute from './AuthRoute';
import Admin from './components/Admin';

function App() {
  const defaultPurchasedItems = [
    {
      id: 1,
      name: "Blue Gray Vortex",
      description: "it's a default favorite",
      isBought: false
    },
    {
      id: 2,
      name: "Marble Exotic Facade", 
      description: "it's a default favorite",
      isBought: false
    },
    {
      id: 3,
      name: "Gondor Grey",
      description: "it's a default favorite",
      isBought: false
    },
    {
      id: 4,
      name: "Green Cover",
      description: "it's a default favorite",
      isBought: false
    },
    {
      id: 5,
      name: "Gryffindor Red",
      description: "it's a default favorite",
      isBought: false
    }
  ];

  const [purchasedItems, setPurchasedItems] = useState(defaultPurchasedItems);

  useEffect(() => {
    const fetchPurchasedItems = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/purchased-items');
        const data = await response.json();
        setPurchasedItems(data.purchasedItems);
      } catch (error) {
        console.error('Error fetching purchased items:', error);
        setPurchasedItems(defaultPurchasedItems);
      }
    };

    fetchPurchasedItems();
  }, []);

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

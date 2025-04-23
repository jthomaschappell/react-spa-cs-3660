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
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPurchasedItems = async () => {
      try {
        const data = await fetch('http://localhost:8000/api/purchased-items')
          .then(res => res.json())
          .then(data => data.purchasedItems);
        setPurchasedItems(data);
      } catch (err) {
        setError('Failed to fetch purchased items');
        console.error('Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPurchasedItems();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
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

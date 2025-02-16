// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from "react-bootstrap/Button"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';  // Instead of from 'react-router-dom'
import './App.css';
import { Container } from 'react-bootstrap';

import { useState } from "react";

function handleSubmit(event) {
  event.preventDefault(); // good for forms? 
  const form = event.target; // where it was called from
  alert(`Name: ${form.fullName.value}\n` +
    `Email: ${form.email.value}\n` +
    `Notif: ${form.notifications.value}\n`
  );
}

function App() {
  return (
    <>
    {/* this is there always */}
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          <Routes>
            {/* This sets the routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );

}




export default App;
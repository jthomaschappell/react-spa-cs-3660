// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';

import { useState } from "react";

function Greeting(props) {
  
  // THIS IS REALLY COOL. 
  // this array sets [variable, functionToChangeVariable]. 
  const [greeting, setGreeting] = useState("Hi!");

  /**
   * I anticipate that it will start as Hi
   * then when I press the button it will go to Hello or Hey, depending
   * on the button pushed. 
   */

  return (
    <div>
      <p>
        {greeting}
      </p>
      <button onClick={() => setGreeting(`Hello, ${props.name}!`)}>
        Say Hello
      </button>
      {/* This doesn't work bc it doesn't use state. vv */}
      {/* <button onClick={() => greeting = `Hey, ${props.name}!`}> */}
      <button onClick = {() => setGreeting(`Hello, ${props.name}`)}>
        Say Hey
      </button>
    </div>
  );
}

function App() {
  return (
    <Greeting name="Maria" />
  );
}

export default App;
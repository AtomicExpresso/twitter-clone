import { useState } from 'react'
import './index.css';
import Navbar from './componets/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Support from './pages/Support';
function App() {

  return (
    <Router>
      <div className='main-container'>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">Explore</Link></li>
            <li><Link to="/About">Market</Link></li>
            <li><Link to="/About">Settings</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/Support" element={<Support />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App

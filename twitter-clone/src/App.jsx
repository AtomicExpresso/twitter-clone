import { useState } from 'react'
import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Support from './pages/Support';
import RightSideBar from './componets/rightSideBar';
function App() {

  return (
    <Router>
      <div className='main-container'>
        <div className="nav">
          <nav>
            <div className="nav-inner-content">
              <h1>Not Twitter</h1>
              <ul>
                <div className="nav-item">
                  <li><Link to="/">Home</Link></li>
                </div>
                <div className="nav-item">
                  <li><Link to="/About">Explore</Link></li>
                </div>
                <div className="nav-item">
                  <li><Link to="/About">Market</Link></li>
                </div>
                <div className="nav-item">
                  <li><Link to="/About">Settings</Link></li>
                </div>
              </ul>
            </div>
          </nav>
        </div>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/Support" element={<Support />} />
        </Routes>
        <RightSideBar />
      </div>
    </Router>
  );
}

export default App

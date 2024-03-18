import { useState } from 'react'
import Logo from './assets/icons/logo.svg';
import HomeIcon from './assets/icons/home.svg';
import ExploreIcon from './assets/icons/explore.svg';
import ProfileIcon from './assets/icons/profile.svg';
import moreIcon from './assets/icons/more.svg';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Support from './pages/Support';
import {RightSideBar, FollowSuggest} from './componets/rightSideBar';
function App() {

  return (
    <Router>
      <div className='main-container'>
        <div className="nav">
          <nav>
            <div className="nav-inner-content">
              <img src={Logo} alt="Logo" />
              <ul>
                <div className="nav-item">
                <img src={HomeIcon} alt="Home" />
                  <li><Link to="/">Home</Link></li>
                </div>
                <div className="nav-item">
                <img src={ExploreIcon} alt="Explore" />
                  <li ><Link to="/About" >Explore</Link></li>
                </div>
                <div className="nav-item">
                  <li><Link to="/About">Market</Link></li>
                </div>
                <div className="nav-item">
                  <img src={ProfileIcon} alt="Profile" />
                  <li><Link to="/About">Profile</Link></li>
                </div>
                <div className="nav-item">
                <img src={moreIcon} alt="More" />
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
        <div className="right-side-bar">
          <RightSideBar />
          <FollowSuggest />
        </div>
      </div>
    </Router>
  );
}

export default App

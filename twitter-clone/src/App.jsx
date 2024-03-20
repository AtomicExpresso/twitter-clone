import { useState } from 'react'
import Logo from './assets/icons/logo.svg';
import HomeIcon from './assets/icons/home.svg';
import ExploreIcon from './assets/icons/explore.svg';
import BookmarkIcon from './assets/icons/bookmark.svg';
import ProfileIcon from './assets/icons/profile.svg';
import moreIcon from './assets/icons/more.svg';
import profilePic from './assets/pfp.png';
import dotsPfpIcon from './assets/icons/dots.svg';
import './index.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Profile from './pages/Profile';
import Support from './pages/Support';
import { RightSideBar, FollowSuggest } from './componets/rightSideBar';

//Display's the navbar and sidepanels
function App() {

  const navigateToProfile = () => {
    window.location.href = '/Profile';
  };

  return (
    <Router>
      <div className='main-container'>
        <div className="nav">
          <nav>
            <div className="nav-inner-content">
              <div className="nav-top-bar">
                <img src={Logo} alt="Logo" />
              </div>
              <ul>
                <div className="nav-item">
                  <img src={HomeIcon} alt="Home" />
                  <li><NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#0088ff' : 'black' })}
                  >Home</NavLink ></li>
                </div>
                <div className="nav-item">
                  <img src={ExploreIcon} alt="Explore" />
                  <li ><NavLink to="/Explore" style={({ isActive }) => ({ color: isActive ? '#0088ff' : 'black' })}>Explore</NavLink ></li>
                </div>
                <div className="nav-item">
                  <img src={BookmarkIcon} alt="Market" />
                  <li><NavLink to="/Market" style={({ isActive }) => ({ color: isActive ? '#0088ff' : 'black' })}>Market</NavLink ></li>
                </div>
                <div className="nav-item">
                  <img src={ProfileIcon} alt="Profile" />
                  <li><NavLink to="/Profile" style={({ isActive }) => ({ color: isActive ? '#0088ff' : 'black' })}>Profile</NavLink ></li>
                </div>
                <div className="nav-item">
                  <img src={moreIcon} alt="More" />
                  <li><NavLink to="/Settings" style={({ isActive }) => ({ color: isActive ? '#0088ff' : 'black' })}>Settings</NavLink ></li>
                </div>
              </ul>
            </div>
            <div className="nav-btn">
              <button className='btn btn-primary'>Tweet</button>
            </div>
          </nav>
          <div className="nav-bottom-bar">
            <img src={profilePic} alt="pfp" onClick={navigateToProfile} />
            <div className="nav-bottom-bar-text">
              <h1 onClick={navigateToProfile}>John Doe</h1>
              <h1 onClick={navigateToProfile}>@Johndoeoffical</h1>
            </div>
            <img src={dotsPfpIcon} alt="settings" />
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/Explore" element={<About />} />
          <Route path="/Market" element={<Support />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Settings" element={<Support />} />
          <Route path="/Explore" element={<Support />} />
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

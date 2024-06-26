import React from 'react';
import Logo from './assets/icons/logo.svg';
import HomeIcon from './assets/icons/home.svg';
import ExploreIcon from './assets/icons/explore.svg';
import BookmarkIcon from './assets/icons/bookmark.svg';
import ProfileIcon from './assets/icons/profile.svg';
import MessagesIcon from './assets/icons/messages.svg';
import moreIcon from './assets/icons/more.svg';
import './index.css';
import { BrowserRouter as Router, Route, Routes, NavLink, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Bookmarks from './pages/Bookmarks';
import Settings from './pages/Settings';
import Explore from './pages/Explore';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import { RightSideBar, FollowSuggest } from './componets/rightSideBar';
import { MainProfile } from './componets/storage/profileInfo';

// Display's the navbar and sidepanels
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  const navigateToProfile = () => {
    window.location.href = '/Profile';
  };

  const showRightSideBar = location.pathname === '/' || location.pathname === '/Profile' ||  location.pathname === '/Explore'; //Displays the right sidebar, only when your on specific pages

  return (
    <div className='main-container'>
      <div className="nav">
        <nav>
          <div className="nav-inner-content">
            <div className="nav-top-bar">
              <img src={Logo} alt="Logo" />
            </div>
            <ul>
              <div className="nav-item">
                <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#0088ff' : 'black' })}><img src={HomeIcon} alt="Home" /></NavLink >
                <li><NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#0088ff' : 'black' })}>Home</NavLink ></li>
              </div>
              <div className="nav-item">
                <NavLink to="/Explore" style={({ isActive }) => ({ color: isActive ? '#0088ff' : 'black' })}><img src={ExploreIcon} alt="Explore" /></NavLink >
                <li ><NavLink to="/Explore" style={({ isActive }) => ({ color: isActive ? '#0088ff' : 'black' })}>Explore</NavLink ></li>
              </div>
              <div className="nav-item">
              <NavLink to="/Bookmarks" style={({ isActive }) => ({ color: isActive ? '#0088ff' : 'black' })}><img src={BookmarkIcon} alt="Market" /></NavLink >
                <li><NavLink to="/Bookmarks" style={({ isActive }) => ({ color: isActive ? '#0088ff' : 'black' })}>Bookmarks</NavLink ></li>
              </div>
              <div className="nav-item">
                <NavLink to="/Messages" style={({ isActive }) => ({ color: isActive ? '#0088ff' : 'black' })}><img src={MessagesIcon} alt="Messages" /></NavLink >
                <li><NavLink to="/Messages" style={({ isActive }) => ({ color: isActive ? '#0088ff' : 'black' })}>Messages</NavLink ></li>
              </div>
              <div className="nav-item">
                <NavLink to="/Profile" style={({ isActive }) => ({ color: isActive ? '#0088ff' : 'black' })}><img src={ProfileIcon} alt="Profile" /></NavLink >
                <li><NavLink to="/Profile" style={({ isActive }) => ({ color: isActive ? '#0088ff' : 'black' })}>Profile</NavLink ></li>
              </div>
              <div className="nav-item">
                <NavLink to="/Settings" style={({ isActive }) => ({ color: isActive ? '#0088ff' : 'black' })}><img src={moreIcon} alt="More" /></NavLink >
                <li><NavLink to="/Settings" style={({ isActive }) => ({ color: isActive ? '#0088ff' : 'black' })}>Settings</NavLink ></li>
              </div>
            </ul>
          </div>
          <div className="nav-btn">
            <button className='btn btn-primary'>Tweet</button>
          </div>
        </nav>
        <div className="nav-bottom-bar">
          <img src={MainProfile.ProfilePic} alt="pfp" onClick={navigateToProfile} />
          <div className="nav-bottom-bar-text">
            <div className='nav-profile-real-name-container'>
              <h1 onClick={navigateToProfile}>{MainProfile.ProfileRealName}</h1>
              <img src={MainProfile.ProfileBadge}></img>
            </div>
            <h1 onClick={navigateToProfile}>{MainProfile.ProfileUserName}</h1>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/Bookmarks" element={<Bookmarks />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
      {showRightSideBar && (
        <div className="right-side-bar">
          <RightSideBar />
          <FollowSuggest />
        </div>
      )}
    </div>
  );
}

export default App;
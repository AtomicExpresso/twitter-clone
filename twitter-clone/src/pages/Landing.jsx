import React from 'react';
import DisplayPost from '../componets/mainContent'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from '../pages/Landing';
import About from '../pages/About';
import Support from '../pages/Support';
import '../index.css';

function Home() {
  return (
    <div className='home-container'>
      <div className="side-bar">
      </div>
      <DisplayPost />
    </div>
  );
}

export default Home;
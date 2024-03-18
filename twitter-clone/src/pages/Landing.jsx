import React from 'react';
import HomeHero from '../componets/homeHero';
import DisplayPost from '../componets/mainContent';
import '../index.css';

function Home() {
  return (
    <div className='home-container'>
      <HomeHero />
      <DisplayPost />
    </div>
  );
}

export default Home;
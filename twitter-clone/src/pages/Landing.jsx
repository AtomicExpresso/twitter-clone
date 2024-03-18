import React from 'react';
import DisplayPost from '../componets/mainContent'
import HomeHero from '../componets/homeHero'
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
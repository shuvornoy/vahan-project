import React from 'react';
import Banner from './../Banner/Banner';
import Features from './../Features/Features';
import Count from './../Count/Count';
import Partner from './../Partner/Partner';
import Download from './../Download/Download';
import Review from './../Review/Reciew';
import Questions from './../Questions/Questions';


const Home = ({ logIn }) => {
  console.log(logIn, 'hello');
  return (
    <div>
      <Banner />
      <Features />
      <Count />
      <Partner />
      <Download />
      <Review />
      <Questions />
    </div>
  );
};

export default Home;
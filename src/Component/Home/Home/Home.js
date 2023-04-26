import React from 'react';
import Banner from './../Banner/Banner';
import Features from './../Features/Features';
import Count from './../Count/Count';
import Partner from './../Partner/Partner';
import Download from './../Download/Download';
import Review from './../Review/Reciew';
import Questions from './../Questions/Questions';
import NewsLater from './../NewsLater/NewsLater';

const Home = () => {
    return (
      <div>
        <Banner />
        <Features />
        <Count />
        <Partner />
        <Download />
        <Review />
        <Questions />
        <NewsLater />
      </div>
    );
};

export default Home;
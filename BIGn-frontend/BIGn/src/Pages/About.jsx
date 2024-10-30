import React from 'react';
import AboutUs from '../components/AboutUs';
import VisionAndMessage from '../components/VisionAndMEssage';
import CountUpStats from '../components/CountUpStats';
import Principles from '../components/Principles';

const About = () => {
  return (
    <>
      <div className='pt-20'>
      <AboutUs />
      </div>
      <CountUpStats />
      <VisionAndMessage />
      <Principles />
    </>
  );
};

export default About;

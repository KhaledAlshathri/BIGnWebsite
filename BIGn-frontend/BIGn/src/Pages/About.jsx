import React from 'react';
import AboutUs from '../components/AboutUs';
import VisionAndMessage from '../components/VisionAndMEssage';
import CountUpStats from '../components/CountUpStats';

const About = () => {
  return (
    <>
      <div className='pt-20'>
      <AboutUs />
      </div>
      <CountUpStats />
      <VisionAndMessage />
    </>
  );
};

export default About;

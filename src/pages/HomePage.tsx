import React from 'react';
import HeroSection from '../components/home/HeroSection';
import VideoExplanation from '../components/home/VideoExplanation';
import FeaturedParadox from '../components/home/FeaturedParadox';
import QuantumTheories from '../components/home/QuantumTheories';
import ParadoxTimeline from '../components/home/ParadoxTimeline';
import DevelopmentTeam from '../components/home/DevelopmentTeam';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <VideoExplanation />
      <FeaturedParadox />
      <QuantumTheories />
      <ParadoxTimeline />
      <DevelopmentTeam />
    </>
  );
};

export default HomePage;
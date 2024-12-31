import React from 'react';
import HeroSection from './components/HeroSection';
import Transition from './components/Transition';

const Homepage = () => {
  return (
    <main className='flex min-h-screen flex-col bg-blue-950 container mx-auto py-4'>
       
       <div className='container mx-auto px-12 mt-24'>
  
       <HeroSection />
       <Transition />
        
      </div>
    </main>
  );
};

export default Homepage;

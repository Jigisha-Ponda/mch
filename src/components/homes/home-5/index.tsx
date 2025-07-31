
import HeaderFour from '@/layout/headers/HeaderFour';
import React from 'react';
import HeroAreaHomeFour from '../home/HeroAreaHome';
import AboutAreaHomeFive from '../home/AboutAreaHome';
import ServicesAreaHomeFour from '../home/ServicesAreaHome';
import TeamAreaHomeFour from '../home/TeamAreaHome';
import RoutineAreaHomeFive from '../home/RoutineAreaHome';
import PhotoGalleryHomeFive from '../home/PhotoGalleryHome';
import AppoinmentAreaHomeFour from '../home/AppointmentAreaHome';
import FactAreaHomeFour from '../home/FactAreaHome';
import MedicalTabHomeFive from '../home/MedicalTabHome';
import HowItWorksHomeFour from '../home/HowItWorksHome';
import TestimonialsHomeFour from '../home/TestimonialsHome';
import CounterHomeFive from '../home/CounterHome';
import LatestNewsAreaHomeFour from '../home/LatestNewsAreaHome';
import BrandAreaHomeFour from '../home/BrandAreaHome';
import FooterThree from '@/layout/footers/FooterThree';
import AboutVideoArea from '@/components/about/AboutVideoArea';

const Home = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <HeroAreaHomeFour style={true} />
        <AboutAreaHomeFive />
        <AboutVideoArea />
        <ServicesAreaHomeFour style={true} />
        <TeamAreaHomeFour />
        {/* <RoutineAreaHomeFive /> */}
        <PhotoGalleryHomeFive />
        <AppoinmentAreaHomeFour />
        <FactAreaHomeFour />
        {/* <MedicalTabHomeFive /> */}
        {/* <HowItWorksHomeFour /> */}
        {/* <TestimonialsHomeFour /> */}
        {/* <CounterHomeFive /> */}
        <LatestNewsAreaHomeFour />
        {/* <BrandAreaHomeFour /> */}
      </main>
      <FooterThree />
    </>
  );
};

export default Home;
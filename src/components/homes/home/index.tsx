
import React from 'react';
import AboutVideoArea from '@/components/about/AboutVideoArea';
import Header from '@/layout/headers/Header';
import HeroAreaHome from './HeroAreaHome';
import AboutAreaHome from './AboutAreaHome';
import ServicesAreaHome from './ServicesAreaHome';
import TeamAreaHome from './TeamAreaHome';
import RoutineAreaHome from './RoutineAreaHome';
import PhotoGalleryHome from './PhotoGalleryHome';
import AppoinmentAreaHome from './AppointmentAreaHome';
import FactAreaHome from './FactAreaHome';
import MedicalTabHome from './MedicalTabHome';
import HowItWorksHome from './HowItWorksHome';
import TestimonialsHome from './TestimonialsHome';
import CounterHome from './CounterHome';
import LatestNewsAreaHome from './LatestNewsAreaHome';
import BrandAreaHome from './BrandAreaHome';
import Footer from '@/layout/footers/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroAreaHome style={true} />
        <AboutAreaHome />
        <AboutVideoArea />
        <ServicesAreaHome style={true} />
        <TeamAreaHome />
        {/* <RoutineAreaHome /> */}
        {/* <AppoinmentAreaHome /> */}
        <FactAreaHome/>
        <PhotoGalleryHome />
        {/* <MedicalTabHome /> */}
        {/* <HowItWorksHome /> */}
        {/* <TestimonialsHome /> */}
        {/* <CounterHome /> */}
        <LatestNewsAreaHome />
        {/* <BrandAreaHome /> */}
      </main>
      <Footer/>
    </>
  );
};

export default Home;

import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import AboutVideoArea from './AboutVideoArea';
import AboutCounterArea from './AboutCounterArea';
import AboutAppoinment from './AboutAppoinment';
import AboutTestimonialsArea from './AboutTestimonialsArea';
import AboutAnalysisArea from './AboutAnalysisArea';
import TeamAreaHomeOne from '../homes/home/TeamAreaHomeOne';
import FactAreaHomeOne from '../homes/home/FactAreaHomeOne';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const About = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='About Us' page='About Us' />
        <AboutVideoArea />
        <AboutCounterArea />
        <AboutAppoinment />
        <TeamAreaHomeOne />
        <FactAreaHomeOne />
        <AboutTestimonialsArea />
        <AboutAnalysisArea />
      </main>
      <Footer/>
    </>
  );
};

export default About;
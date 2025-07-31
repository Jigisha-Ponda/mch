
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import ServiceAboutArea from './ServiceAboutArea';
import ServiceCalculateArea from './ServiceCalculateArea';
import ServiceHiringArea from './ServiceHiringArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const Service = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Our Services' page='Services' />
        <ServiceAboutArea />
        <ServiceCalculateArea />
        <ServiceHiringArea />
      </main>
      <Footer />
    </>
  );
};

export default Service 
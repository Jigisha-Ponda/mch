import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import ServiceAboutArea from '../service/ServiceAboutArea';
import ServiceTwoServicesArea from './ServiceTwoServicesArea';
import ServiceCalculateArea from '../service/ServiceCalculateArea';
import ServiceHiringArea from '../service/ServiceHiringArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const ServiceTwo = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Our Services 02' page='Services 02' />
        <ServiceAboutArea service_2={true} />
        <ServiceTwoServicesArea />
        <ServiceCalculateArea />
        <ServiceHiringArea />
      </main>
      <Footer />

    </>
  );
};

export default ServiceTwo
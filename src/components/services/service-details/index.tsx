
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import ServiceDetailsArea from './ServiceDetailsArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const ServiceDetails = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Our Services Details' page='Services Details' />
        <ServiceDetailsArea />
      </main>
      <Footer />

    </>
  );
};

export default ServiceDetails;
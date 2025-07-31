import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';
import LatestNewsAreaHomeOne from '../homes/home/LatestNewsAreaHomeOne';

const Events = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Events' page='Events' />
        <LatestNewsAreaHomeOne style={true} />
      </main>
      <Footer />
    </>
  );
};

export default Events;

import React from 'react';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import PortfolioTwoArea from './PortfolioTwoArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const PortfolioTwo = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Portfolio 2 Column' page='Portfolio 2' />
        <PortfolioTwoArea />
      </main>
      <Footer />
    </>
  );
};

export default PortfolioTwo;
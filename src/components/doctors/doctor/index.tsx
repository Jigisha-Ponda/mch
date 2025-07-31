
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import FactAreaHome from '@/components/homes/home/FactAreaHome';
import TeamAreaHome from '@/components/homes/home/TeamAreaHome';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';
import React from 'react';

const Doctor = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Doctor' page='Doctor' />
        <TeamAreaHome />
        <FactAreaHome />
      </main>
      <Footer />
    </>
  );
};

export default Doctor;
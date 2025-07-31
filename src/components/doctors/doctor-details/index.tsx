
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import DoctorDetailsArea from './DoctorDetailsArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const DoctorDetails = () => {
  return (
    <>
      <Header/>
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Doctor Details' page='Doctor Details' />
        <DoctorDetailsArea />
      </main>
      <Footer />
    </>
  );
};

export default DoctorDetails;
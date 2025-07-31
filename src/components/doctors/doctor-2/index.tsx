
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
// import AboutAreHomeThree from '@/components/homes/home-3/AboutAreHomeThree';
// import TeamAreaHomeThree from '@/components/homes/home-3/TeamAreaHomeThree';
import FactAreaHome from '@/components/homes/home/FactAreaHome';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';
import React from 'react';

const DoctorTwo = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Doctor 02' page='Doctor 02' />
        {/* <TeamAreaHomeThree> */}
        <FactAreaHome/>
        {/* <AboutAreHomeThree style={true} /> */}
      </main>
      <Footer />
    </>
  );
};

export default DoctorTwo;
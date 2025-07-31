import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import AppointmentAboutArea from './AppointmentAboutArea';
import AppoinmentCalculateArea from './AppointmentCalculateArea';
import HeaderFour from '@/layout/headers/Header';
import Footer from '@/layout/footers/Footer';
import LatestNewsAreaHome from '../homes/home/LatestNewsAreaHome';

const Appoinment = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Appointment' page='Appointment' />
        <AppointmentAboutArea />
        <AppoinmentCalculateArea />
        {/* <LatestNewsAreaHome style={true} /> */}
      </main>
      <Footer />
    </>
  );
};

export default Appoinment;
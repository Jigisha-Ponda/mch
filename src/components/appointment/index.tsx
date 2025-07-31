import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import AppointmentAboutArea from './AppointmentAboutArea';
import AppoinmentCalculateArea from './AppointmentCalculateArea';
import FooterThree from "@/layout/footers/FooterThree";
import HeaderFour from '@/layout/headers/HeaderFour';
import LatestNewsAreaHomeOne from '../homes/home/LatestNewsAreaHomeOne';

const Appoinment = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Appointment' page='Appointment' />
        <AppointmentAboutArea />
        <AppoinmentCalculateArea />
        {/* <LatestNewsAreaHomeOne style={true} /> */}
      </main>
      <FooterThree />
    </>
  );
};

export default Appoinment;
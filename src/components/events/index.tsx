import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FooterThree from "@/layout/footers/FooterThree";
import HeaderFour from '@/layout/headers/HeaderFour';
import LatestNewsAreaHomeOne from '../homes/home/LatestNewsAreaHomeOne';

const Events = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Events' page='Events' />
        <LatestNewsAreaHomeOne style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default Events;
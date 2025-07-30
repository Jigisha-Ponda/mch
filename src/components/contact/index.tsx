
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactArea from './ContactArea';
import ContactFormArea from './ContactFormArea';
import FooterThree from '@/layout/footers/FooterThree';
import ContactMap from './ContactMap';
import HeaderFour from '@/layout/headers/HeaderFour';

const Contact = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Contact Us' page='Contact' />
        <ContactArea />
        <ContactFormArea />
        <ContactMap />
      </main>
      <FooterThree />
    </>
  );
};

export default Contact;
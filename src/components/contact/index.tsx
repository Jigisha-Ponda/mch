
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactArea from './ContactArea';
import ContactFormArea from './ContactFormArea';
import ContactMap from './ContactMap';
import Header from '@/layout/headers/Header';
import Footer from '@/layout/footers/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Contact Us' page='Contact' />
        <ContactArea />
        <ContactFormArea />
        <ContactMap />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
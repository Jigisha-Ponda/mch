import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import RegisterArea from './RegisterArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const Register = () => {
  return (
    <>
      <Header/>
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Register' page='Register' />
        <RegisterArea />
      </main>
      <Footer />
    </>
  );
};

export default Register;
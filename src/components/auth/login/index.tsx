
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import LoginArea from './LoginArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const Login = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Login' page='Login' />
        <LoginArea />
      </main>
      <Footer />
    </>
  );
};

export default Login;
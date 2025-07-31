import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import CheckoutArea from './CheckoutArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const Checkout = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Checkout' page='Checkout' />
        <CheckoutArea />
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
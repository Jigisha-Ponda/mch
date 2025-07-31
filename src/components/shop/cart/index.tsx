
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import CartArea from './CartArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const Cart = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Shopping  Cart' page='Shopping  Cart' />
        <CartArea />
      </main>
      <Footer />
    </>
  );
};

export default Cart;
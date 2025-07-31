import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import WishlistArea from './WishlistArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const Wishlist = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Wishlist' page='Wishlist' />
        <WishlistArea />
      </main>
      <Footer />
    </>
  );
};

export default Wishlist;
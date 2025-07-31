import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import ShopProducts from './ShopProducts';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const Shop = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Shop Page' page='Shop' />
        <ShopProducts />
      </main>
      <Footer />
    </>
  );
};

export default Shop;
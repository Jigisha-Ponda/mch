
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import ProductDetailsArea from './ProductDetailsArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const ProductDetails = () => {
  return (
    <>
      <Header />
      <main>
      <Breadcrumb sub_title='We are here for your care.' title='Product Details' page='Product Details' />
        <ProductDetailsArea />
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
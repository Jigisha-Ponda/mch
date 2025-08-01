import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import PhotoGalleryHome from '../homes/home/PhotoGalleryHome';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const Gallery = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='Inside MCH – Where Care Meets Excellence' title='Gallery' page='Gallery' />
        <PhotoGalleryHome/>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
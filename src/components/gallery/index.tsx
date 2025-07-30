import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FooterThree from "@/layout/footers/FooterThree";
import HeaderFour from '@/layout/headers/HeaderFour';
import PhotoGalleryHomeFive from '../homes/home-5/PhotoGalleryHomeFive';

const Gallery = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Gallery' page='Gallery' />
        <PhotoGalleryHomeFive/>
      </main>
      <FooterThree />
    </>
  );
};

export default Gallery;
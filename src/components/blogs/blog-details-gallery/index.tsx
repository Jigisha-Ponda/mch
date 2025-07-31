import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import BlogDetailsGalleryArea from './BlogDetailsGalleryArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const BlogDetailsGallery = () => {
  return (
    <>
      <Header/>
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Blog Details Gallery' page='Blog Gallery' />
        <BlogDetailsGalleryArea />
      </main>
      <Footer />
    </>
  );
};

export default BlogDetailsGallery;
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import BlogDetailsArea from './BlogDetailsArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const BlogDetails = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Blog Details' page='Blog Details' />
        <BlogDetailsArea />
      </main>
      <Footer />
    </>
  );
};

export default BlogDetails;
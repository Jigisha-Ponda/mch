
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import BlogTwoColumnTwoMasonry from './BlogTwoColumnTwoMasonry';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const BlogTwoColMas = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Blog Two Column Masonry' page='Blog Two Column Masonry' />
        <BlogTwoColumnTwoMasonry />
      </main>
      <Footer />
    </>
  );
};

export default BlogTwoColMas;
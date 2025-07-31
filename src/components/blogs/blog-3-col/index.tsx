
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import BlogThreeColumnArea from './BlogThreeColumnArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const BlogThreeColumn = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Blog Three Column' page='Blog Three Column' />
        <BlogThreeColumnArea />
      </main>
      <Footer />
    </>
  );
};

export default BlogThreeColumn;
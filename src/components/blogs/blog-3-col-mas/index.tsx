import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import BlogThreeColumnThreeMasonry from './BlogThreeColumnThreeMasonry';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const BlogThreeColumbMasonry = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Blog Three Column Masonry' page='Blog Three Column Masonry' />
        <BlogThreeColumnThreeMasonry />
      </main>
      <Footer />
    </>
  );
};

export default BlogThreeColumbMasonry;
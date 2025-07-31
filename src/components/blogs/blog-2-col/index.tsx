
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react'; 
import BlogTwoColumnArea from './BlogTwoColumnArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const BlogTwoColumn = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Blog Two Column' page='Blog Two Column' />
        <BlogTwoColumnArea />
      </main>
      <Footer />
    </>
  );
};

export default BlogTwoColumn;
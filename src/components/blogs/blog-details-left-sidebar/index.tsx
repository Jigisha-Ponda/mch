
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import BlogDetaislLeftSidbarArea from './BlogDetaislLeftSidbarArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const BlogDetailsLeftSidebar = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Blog Details Left Sidebar' page='Blog Details Left' />
        <BlogDetaislLeftSidbarArea />
      </main>
      <Footer />
    </>
  );
};

export default BlogDetailsLeftSidebar;
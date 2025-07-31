import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import BlogDetailsAudioArea from './BlogDetailsAudioArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const BlogDetailsAudio = () => {
  return (
    <>
      <Header/>
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Blog Details Audio' page='Blog Details Audio' />
        <BlogDetailsAudioArea />
      </main>
      <Footer />

    </>
  );
};

export default BlogDetailsAudio;
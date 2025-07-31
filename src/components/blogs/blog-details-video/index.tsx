
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import BlogDetailsVideoArea from './BlogDetailsVideoArea';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const BlogDetailsVideo = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Blog Details Video' page='Blog Video' />
        <BlogDetailsVideoArea />
      </main>
      <Footer />
    </>
  );
};

export default BlogDetailsVideo;
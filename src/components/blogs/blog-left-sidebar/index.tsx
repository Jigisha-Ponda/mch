
import BlogSidebarArea from '../common-blog/BlogSidebarArea';
import BlogInnerArea from '../common-blog/BlogInnerArea';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import Footer from '@/layout/footers/Footer';
import Header from '@/layout/headers/Header';

const BlogLeftSidebar = () => {
  return (
    <>
      <Header />
      <main>
      <Breadcrumb sub_title='We are here for your care.' title='Left Sidebar' page='Left Sidebar' /> 
        <section className="blog-area pt-120 pb-80 ">
          <div className="container">
            <div className="row">
              <BlogSidebarArea />
              <BlogInnerArea />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogLeftSidebar;
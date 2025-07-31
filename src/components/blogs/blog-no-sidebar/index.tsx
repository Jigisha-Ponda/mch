import BlogInnerArea from '../common-blog/BlogInnerArea';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import Header from '@/layout/headers/Header';
import Footer from '@/layout/footers/Footer';

const BlogNoSidebar = () => {
  return (
    <>
      <Header />
      <main>
      <Breadcrumb sub_title='We are here for your care.' title='No Sidebar' page='No Sidebar' /> 
        <section className="blog-area pt-120 pb-80">
          <div className="container">
            <div className="row">
              <BlogInnerArea style={true} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogNoSidebar;
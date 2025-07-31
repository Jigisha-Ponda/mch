import React from "react";
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import BlogArea from "./BlogArea";
import Footer from "@/layout/footers/Footer";
import Header from "@/layout/headers/Header";

const Blog = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Blog Standard' page='Blog' />
        <BlogArea />
      </main>
      <Footer />
    </>
  );
};

export default Blog;

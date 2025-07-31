import React from "react";
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import PortfolioTwoArea from '../portfolio-2/PortfolioTwoArea';
import Footer from "@/layout/footers/Footer";
import Header from "@/layout/headers/Header";

const Portfolio = () => {
  return (
    <>
      <Header />
      <main>
      <Breadcrumb sub_title='We are here for your care.' title='Portfolio 3 Column' page='Portfolio 3' />
      <PortfolioTwoArea style={true} />
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;

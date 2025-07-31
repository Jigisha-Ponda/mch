import React from "react"; 
import Breadcrumb from "@/components/common/breadcrumb/Breadcrumb";
import PortfolioSliderArea from "./PortfolioSliderArea";  
import Footer from "@/layout/footers/Footer";
import Header from "@/layout/headers/Header";

const PortfolioSlider = () => {
  return (
    <>
      <Header />
      <main>
      <Breadcrumb sub_title='We are here for your care.' title='Portfolio Slider' page='Portfolio Slider' />
      <PortfolioSliderArea />
      </main>
      <Footer />
    </>
  );
};

export default PortfolioSlider;

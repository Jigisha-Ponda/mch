import HeaderFour from "@/layout/headers/Header";
import HeroAreaHomeFour from "../home/HeroAreaHome";
import AboutAreaHomeFour from "./AboutAreaHomeFour";
import ServicesAreaHomeFour from "../home/ServicesAreaHome";
import TeamAreaHomeFour from "../home/TeamAreaHome";
import AppoinmentAreaHomeFour from "../home/AppointmentAreaHome";
import FactAreaHomeFour from "../home/FactAreaHome";
import HiringAreaHomeFour from "./HiringAreaHomeFour";
import HowItWorksHomeFour from "../home/HowItWorksHome";
import TestimonialsHomeFour from "../home/TestimonialsHome";
import PhotoGalleryHomeFour from "./PhotoGalleryHomeFour";
import CounterAreaHomeFour from "./CounterAreaHomeFour";
import LatestNewsAreaHomeFour from "../home/LatestNewsAreaHome";
import BrandAreaHomeFour from "../home/BrandAreaHome";
import FooterFour from "@/layout/footers/FooterFour";



const HomeFour = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <HeroAreaHomeFour style={false} />
        <AboutAreaHomeFour />
        <ServicesAreaHomeFour style={false} />
        <TeamAreaHomeFour />
        <AppoinmentAreaHomeFour />
        <FactAreaHomeFour />
        <HiringAreaHomeFour />
        <HowItWorksHomeFour />
        <TestimonialsHomeFour />
        <PhotoGalleryHomeFour />
        <CounterAreaHomeFour />
        <LatestNewsAreaHomeFour />
        <BrandAreaHomeFour />
      </main>
      <FooterFour />
    </>
  );
};

export default HomeFour;
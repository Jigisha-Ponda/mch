'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/modals/VideoPopup';

import medical_brand from "@/assets/img/mch/medical-brand-icon-border.png";
import about_avatar from "@/assets/img/about/about-img-3.jpg";
import about_shape from "@/assets/img/about/about-shape.png";
import destination_1 from "@/assets/img/mch/mission.png";
import destination_2 from "@/assets/img/mch/vision.png";

const appoinment_content = {
  sub_title: "About Us",
  title: "Short Story About MCH",
  sm_des: "We are a well-established healthcare institution built to provide both medical and surgical treatment, staffed with qualified professionals and equipped for accurate diagnosis and patient care. Our hospital also serves as a center for medical research and teaching. With dedicated healthcare teams and advanced facilities, we aim to deliver compassionate, high-quality care. Patients consistently share positive feedback about our well-managed services, coordinated testing, and the genuine care provided by our staff and doctors.",
  features: [
    {
      id: 1,
      img: destination_1,
      title: "Our Mission",
      sm_des: "To provide compassionate, affordable, and quality healthcare services through cutting-edge technology and skilled medical professionals. We are committed to improving lives by delivering patient-centered care, promoting wellness, and maintaining the highest ethical and professional standards.",
    },
    {
      id: 2,
      img: destination_2,
      title: "Our Vision",
      sm_des: "To become a leading healthcare institution known for excellence in patient care, innovation, and medical research. We aim to transform lives by delivering world-class treatment, fostering trust, and advancing healthcare standards to build a healthier future for all.",
    },
  ]
}
const { sub_title, title, sm_des, features } = appoinment_content

const AppointmentAboutArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <section className="about-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="about-left-side pos-rel mb-30">
                <div className="medical-icon-brand-2 medical-icon-brand-3">
                  <Image src={medical_brand} alt="theme-pure" className="h-75 w-75"/>
                </div>
                <div className="about-front-img pos-rel">
                  <Image src={about_avatar} alt="theme-pure" />
                  <a className="popup-video about-video-btn white-video-btn"
                    onClick={() => setIsVideoOpen(true)}
                    style={{ cursor: "pointer" }}
                  ><i className="fas fa-play"></i></a>
                </div>
                <div className="about-shape">
                  <Image src={about_shape} alt="theme-pure" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-right-side pt-55 mb-30">
                <div className="about-title mb-20">
                  <h5>{sub_title}</h5>
                  <h1>{title}</h1>
                </div>
                <div className="about-text mb-50">
                  <p>{sm_des}</p>
                </div>
                <div className="our-destination">
                  {features.map((item, i) =>
                    <div key={i} className={`single-item ${i === 0? "mb-30" : ""}`}>
                      <div className="mv-icon f-left">
                        <Image src={item.img} alt={item.title} className="mission-vision-icon"/>
                      </div>
                      <div className="mv-title fix">
                        <h3>{item.title}</h3>
                        <p>{item.sm_des}</p>
                      </div>
                    </div>
                  )} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={'LrzWrvOjJm8'}
      />
      {/* video modal end */}
    </>
  );
};

export default AppointmentAboutArea;
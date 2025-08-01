'use client'
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import icon_1 from "@/assets/img/mch/mission.png";
import icon_2 from "@/assets/img/mch/vision.png";
import VideoPopup from '@/modals/VideoPopup';
import about_img from '@/assets/img/about/about-img.jpg';
import about_shape from "@/assets/img/about/about-shape.png";

interface DataType {
  sub_title: string;
  title: string;
  sm_des: string;
  our_feature: {
    id: number;
    img: StaticImageData;
    title: string;
    sm_des: string;
  }[];
}

const about_video_content: DataType = {
  sub_title: "About Us",
  title: "Short Story About MCH",
  sm_des: "We are a well-established healthcare institution built to provide both medical and surgical treatment, staffed with qualified professionals and equipped for accurate diagnosis and patient care. Our hospital also serves as a center for medical research and teaching. With dedicated healthcare teams and advanced facilities, we aim to deliver compassionate, high-quality care. Patients consistently share positive feedback about our well-managed services, coordinated testing, and the genuine care provided by our staff and doctors.",
  our_feature: [
    {
      id: 1,
      img: icon_1,
      title: "Our Mission",
      sm_des: "To provide compassionate, affordable, and quality healthcare services through cutting-edge technology and skilled medical professionals. We are committed to improving lives by delivering patient-centered care, promoting wellness, and maintaining the highest ethical and professional standards.",
    },
    {
      id: 2,
      img: icon_2,
      title: "Our Vision",
      sm_des: "To become a leading healthcare institution known for excellence in patient care, innovation, and medical research. We aim to transform lives by delivering world-class treatment, fostering trust, and advancing healthcare standards to build a healthier future for all.",
    },
  ]
}
const { sub_title, title, sm_des, our_feature } = about_video_content

const AboutVideoArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <section className="about-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="about-left-side pos-rel mb-30">
                <div className="about-front-img pos-rel">
                  <Image src={about_img} alt="theme-pure" className="mission-vision-icon"/>
                  <a className="popup-video about-video-btn white-video-btn"
                    onClick={() => setIsVideoOpen(true)}
                    style={{ cursor: "pointer" }}
                  ><i className="fas fa-play"></i></a>
                </div>
                <div className="about-shape">
                  <Image src={about_shape} alt="theme-pure"/>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-right-side pt-55 mb-30">
                <div className="about-title mb-20">
                  <h5>{sub_title}</h5>
                  <h2>{title}</h2>
                </div>
                <div className="about-text mb-50">
                  <p>{sm_des}</p>
                </div>
                <div className="our-destination">
                  {our_feature.map((item, i) =>
                    <div key={i} className={`single-item ${i === 0 ? "mb-30" : ""}`}>
                      <div className="mv-icon f-left">
                        <Image src={item.img} alt="theme-pure" className="mission-vision-icon"/>
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
        videoId={'_6QhP3Fa0rU'}
      />
      {/* video modal end */}
    </>
  );
};

export default AboutVideoArea;
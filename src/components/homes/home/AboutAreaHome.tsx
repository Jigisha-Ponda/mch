
import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import bg_icon_1 from "@/assets/img/icon/services_bg_icon1.png";
import bg_icon_2 from "@/assets/img/icon/services_bg_icon2.png";
import bg_icon_3 from "@/assets/img/icon/services_bg_icon3.png";

import icon_1 from "@/assets/img/mch/clinic-news.png";
import icon_2 from "@/assets/img/mch/top-doctors.png";
import icon_3 from "@/assets/img/mch/24-hours-service.png";
import icon_4 from "@/assets/img/mch/opening-hours.png";

interface DataType {
  sub_title: string;
  title: string;
  about_data: ({
    id: number;
    color_bg: string;
    bg_img: StaticImageData;
    img: StaticImageData;
    title: string;
    sm_des?: string;
    btn_text?: string;
    btn_link?: string;
    day_1?: string;
    day_2?: string;
    time_1?: string;
    time_2?: string;
    time_3?: string;
    day_3?: string;
    closed?: string;
  })[];
}


const about_content: DataType = {
  sub_title: "MCH help increase your readers.",
  title: "25+ Years Of Since We Provide Medical Serving",
  about_data: [
    {
      id: 1,
      color_bg: "theme-bg",
      bg_img: bg_icon_1,
      img: icon_1,
      title: "Clinic News",
      sm_des: "We strive to provide affordable, high-quality healthcare to everyone, ensuring compassionate and personalized treatment for every patient.",
      btn_text: "conatct us",
      btn_link: "/contact",
    },
    {
      id: 1,
      color_bg: "theme-bg2",
      bg_img: bg_icon_2,
      img: icon_2,
      title: "Top Doctors",
      sm_des: "Our doctors are renowned for their experience, empathy, and dedication — combining modern medicine with a human touch.",
      btn_text: "read more",
      btn_link: "/gallery",
    },
    {
      id: 1,
      color_bg: "theme-bg",
      bg_img: bg_icon_1,
      img: icon_3,
      title: "24 Hours Service",
      sm_des: "We are ready to serve you 24/7 with immediate emergency care services. Your health is our top priority, anytime, anywhere.",
      btn_text: "read more",
      btn_link: "/appointment",
    },
    {
      id: 1,
      color_bg: "pink-bg",
      bg_img: bg_icon_3,
      img: icon_4,
      title: "Opening Hours",
      day_1: "Mon - Friday",
      day_2: "Saturday",
      day_3: "Sunday",
      time_1: "08:00 am - 17:00 pm",
      time_2: "09:30 pm - 17:30 pm",
      time_3: "09:30 pm - 15:00 pm",
      closed: "Closed",

    },
  ]

}
const { sub_title, title, about_data } = about_content

const AboutAreaHome = () => {
  return (
    <>
      <section className="about-area pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="about-title text-center mb-60">
                <h5 className="blue-color">{sub_title}</h5>
                <h1>{title}</h1>
              </div>
            </div>
          </div>
          <div className="row g-0">
            {about_data.map((item, i) =>
              <div key={i} className="col-lg-3 mb-30">
                <div className={`h5services-wrapper ${item.color_bg}`}>
                  <i className="h5sicon-bg"><Image src={item.bg_img} alt="icon" /></i>
                  <div className="h5services-content">
                    <i className="h5services-icon"><Image src={item.img} alt="theme-pure" className="h-50 w-auto"/></i>
                    <h3 className="white-color h5services-title">{item.title}</h3>
                    {i === 3 ?
                      <>
                        <ul className="h5services-events">
                          <li className="white-color f-500"> {item.day_1} <span>{item.time_1}</span></li>
                          <li className="white-color f-500"> {item.day_2} <span>{item.time_2}</span></li>
                          <li className="white-color f-500"> {item.day_3} <span>{item.time_3}</span></li>
                        </ul>
                        {/* <ul className="h5services-events h5sclose-days">
                          <li className="white-color f-500"> {item.day_3} <span>{item.closed}</span></li>
                        </ul> */}
                      </>
                      :
                      <>
                        <p>{item.sm_des}</p>
                        <Link href={item.btn_link ?? "#"} className="green-color text-uppercase f-500"><span className="plus">
                          +</span><span className="link">{item.btn_text}</span>
                        </Link>
                      </>
                    }
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAreaHome;
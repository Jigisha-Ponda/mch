
import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { CopyRight } from '@/components/common/SocialLinks';

import blog_thumb_1 from "@/assets/img/blog/feeds-thumb-1.jpg";
import blog_thumb_2 from "@/assets/img/blog/feeds-thumb-2.jpg";
import blog_thumb_3 from "@/assets/img/blog/feeds-thumb-3.jpg";

import footer_logo_three from "@/assets/img/mch/logo.png";

interface DataType {
  sm_des: string;
  email: string;
  phone1: string;
  phone2: string;
  address: string;
  link_data: {
    title: string;
    links: {
      title: string;
      link: string;
    }[]
  }[];
  footer_blog_data: {
    id: number;
    img: StaticImageData;
    title: string;
    time: string;
  }[];
  office_open_title: string;
  office_open_day_1: string;
  office_open_time_1: string;
  office_open_day_2: string;
  office_open_time_2: string;
  office_open_day_3: string;
  office_open_time_3: string;
}

const footer_content: DataType = {
  sm_des: " At MCH, we are committed to delivering world-class healthcare with advanced technology and compassionate care. Your well-being is our mission.",
  email: "care@mch.org.in",
  phone1: "9262966541",
  phone2: "06217960945",
  address: "At- Chandani Chowk, Brijbihari Lane, Krishna Toli, Muzaffarpur-842003",

  link_data: [
    {
      title: "Quick Links",
      links: [
        { title: "Home", link: "/" },
        { title: "Book an Appointment", link: "/appointment" },
        { title: "Gallery", link: "/gallery" },
        // { title: "Events", link: "/events" },
        { title: "Contact", link: "/contact" },
      ]
    }
  ],
  footer_blog_data: [
    {
      id: 1,
      img: blog_thumb_1,
      title: "Consectetur ipsum dolor sit am et, lorem .",
      time: "14 August 2023"
    },
    {
      id: 2,
      img: blog_thumb_2,
      title: "Consectetur ipsum dolor sit am et, lorem .",
      time: "14 August 2023"
    },
    {
      id: 3,
      img: blog_thumb_3,
      title: "Consectetur ipsum dolor sit am et, lorem .",
      time: "14 August 2023"
    },
  ],
  office_open_title: "Opening Hours",
  office_open_day_1: "Monday - Friday",
  office_open_day_2: "Saturday",
  office_open_day_3: "Sunday",
  office_open_time_1: "08:00 am - 17:00 pm",
  office_open_time_2: "09:30 pm - 17:30 pm",
  office_open_time_3: "09:30 pm - 15:00 pm",
}
const { sm_des, email, phone1, phone2, address, link_data, footer_blog_data, office_open_title, office_open_day_1, office_open_time_1,office_open_day_2, office_open_time_2,office_open_day_3, office_open_time_3 } = footer_content

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top primary-bg footer-map pos-rel pt-120 pb-80">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-6">
                <div className="footer-contact-info footer-contact-info-3 mb-40">
                  <div className="footer-logo mb-35">
                    <Link href="/"><Image src={footer_logo_three} alt="theme-pure" className="mch-logo"/></Link>
                  </div>
                  <div className="footer-contact-content mb-25">
                    <p>{sm_des}</p>
                  </div>
                  <div className="footer-emailing">
                    <ul>
                      <li><i className="far fa-envelope"></i><a href={`mailto:${email}`}>{email}</a></li>
                      <li><i className="far fa-phone-alt"></i><a href={`tel:${phone1}`}>{phone1}</a> || <a href={`tel:${phone2}`}>{phone2}</a></li>
                      <li><i className="far fa-flag"></i>{address}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="row justify-content-between">
                  {link_data.map((item, i) =>
                    <div key={i} className="col-xl-5 col-lg-6 col-md-6">
                      <div className="footer-widget h4footer-widget pt-0 mb-40">
                        <div className="footer-title">
                          <h3 className="mb-4">{item.title}</h3>
                        </div>
                        <div className="footer-menu h4footer-menu d-block">
                          <ul>
                            {item.links?.map((link, index) =>
                              <li key={index}><Link href={link.link}>{link.title}</Link></li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                  )}
                  {/* <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="footer-widget mb-40">
                  <div className="footer-title">
                    <h3>News Feeds</h3>
                  </div>
                  <div className="blog-feeds pr-15">
                    {footer_blog_data.map((blog_item, blog_i) =>
                      <div key={blog_i} className="signle-blog-feeds mb-20">
                        <div className="blog-feeds-thumb">
                          <Link href="/news-details">
                            <Image src={blog_item.img} alt="theme-pure" />
                          </Link>
                        </div>
                        <div className="blog-feeds-text">
                          <h5><Link href="/news-details">{blog_item.title}</Link></h5>
                          <span className="feeds-date">{blog_item.time}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div> */}
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="footer-widget h4footer-widget pt-0 mb-40">
                      <div className="footer-title">
                        <h3 className="mb-4">{office_open_title}</h3>
                      </div>
                      <div className="h4events-list mb-30">
                        <ul>
                          <li>
                            <i className="fal fa-clock"></i><span>{office_open_day_1} <span>{office_open_time_1}</span></span>
                          </li>
                          <li>
                            <i className="fal fa-clock"></i><span>{office_open_day_2} <span>{office_open_time_2}</span></span>
                          </li>
                          <li>
                            <i className="fal fa-clock"></i><span>{office_open_day_3} <span>{office_open_time_3}</span></span>
                          </li>
                          {/* <li>
                            <i className="fal fa-times-square"></i ><span className="close-days">Satarday Closed</span>
                          </li> */}
                        </ul>
                      </div>
                      <div className="h4footer-social">
                        <ul className="list-inline">
                          <li>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="fab fa-google"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-25 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-copyright footer-copyright-3 text-center">
                  <p><CopyRight /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
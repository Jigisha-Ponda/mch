'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './Menu/NavMenu';
import UseSticky from '@/hooks/UseSticky';
import HeaderLogo from "@/assets/img/mch/logo.webp";
import { TeamSocialLinks } from '@/components/common/SocialLinks';
import plag_icon from '@/assets/img/icon/lang.png';
import MobileMenus from './Menu/MobileMenus';

const header_4_content = { 
  email: "care@mch.org.in",
  phone1: "9262966541",
  phone2: "06217960945",
  open_time: "Sun - Thuseday, 09:00 am - 08:00 pm",
  help: "Needs Help?",
  setting: "Setting & Privacy",
  media: "Media",
}
const {email, phone1, phone2, open_time, help, setting,media} = header_4_content

const Header = () => {
  const { sticky } = UseSticky() 
  const [isOpenMenu, setIsOpenMenu] = useState<boolean >(false)
  return (
    <>
      <header>
        <div className="top-bar4 white-bg top-border d-none d-md-block pl-55 pr-55 pt-10 pb-10">
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="header-info header-info4 p-0">
                  <span><i className="far fa-envelope-open"></i><a href={`mailto:${email}`}>{email}</a></span>
                  <span><i className="fal fa-phone-alt"></i><a href={`tel:${phone1}`}>{phone1}</a> || <a href={`tel:${phone2}`}>{phone2}</a></span>
                  <span><i className="fal fa-clock"></i>{open_time}</span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="top4-right d-flex justify-content-end">
                  <div className="top4-menu">
                    <ul className="list-inline">
                      <li><a className="need-help" href="/contact">{help}</a></li>
                      {/* <li><a href="#">{setting}</a></li> */}
                      {/* <li><a href="#">{media}</a></li> */}
                    </ul>
                  </div>
                  <div className="header-social-icons top4-social d-none d-xl-block">
                    <ul>
                      <TeamSocialLinks /> 
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 

        <div className={`header-menu-area menu-area4 pl-55 pr-55 ${sticky ? "sticky_menu" : ""} `}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-8 col-lg-12 col-md-12 d-flex justify-content-between align-items-center navbar__wrapper">
                <div className="logo pos-rel">
                  <Link href="/">
                    <Image src={HeaderLogo}  alt="MediDove" />
                  </Link>
                </div>
                <div className="header__menu header__menu4 pl-60">
                  <nav id="mobile-menu">
                    <NavMenu home_4={true} />  
                  </nav>
                </div>
                <div className="side-menu-icon d-lg-none text-end">
                  <button className="side-toggle border-0 bg-transparent" onClick={() => setIsOpenMenu(true)}><i className="fas fa-bars"></i> </button>
                </div>
              </div>
              <div className="col-xl-4 col-lg-9 col-md-9 d-none d-xl-flex align-items-center justify-content-end">
                <div className="header-right d-flex align-items-center justify-content-end">
                  {/* <div className="header-lang pos-rel d-none d-lg-block">
                    <div className="lang-icon">
                      <Image src={plag_icon} alt="theme-pure" />
                        <span>EN<i className="fas fa-angle-down"></i></span>
                    </div>
                    <ul className="header-lang-list">
                      <li><a href="#">USA</a></li>
                      <li><a href="#">UK</a></li>
                      <li><a href="#">CA</a></li>
                      <li><a href="#">AU</a></li>
                    </ul>
                  </div> */}
                  <div className="header-button pl-50">
                    <Link data-animation="fadeInLeft" data-delay=".6s" href="/appoinment" className="btn btn-icon ml-0" 
                    style={{animationDelay: "0.6s"}} tab-index={0}><span>+</span>Make Appointment</Link>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isOpenMenu && <MobileMenus isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />}

    </>
  );
};

export default Header;
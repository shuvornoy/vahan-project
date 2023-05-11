import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import google from '../../../asete/footer/Google_Play_Badge_001eb0f465 1.png'
import app from '../../../asete/footer/App_Store_Badge_f39b9659af 1.png';
import footer from "../../../asete/logo/logo.png";
import NewsLater from '../../Pages/Home/NewsLater/NewsLater';


const Footer = () => {
    return (
      <div className="bg-[#1B2551]">
        <NewsLater />
        <footer className="footer xl:w-[1300px]  w-full mx-auto py-[75px] px-2 xl:px-0 text-white md:flex block justify-between">
          <div className="text-white ">
            <img
              className="xl:w-[248px] lg:w-[200px] md:w-[160px] w-full xl:h-[38px] lg:h-[26px] md:h-[22px] h-full"
              src={footer}
              alt=""
            />
          </div>
          <div className="md:w-[313px] w-full lg:text-[18px] md:text-[16px] text-[28px] lg:leading-7 md:leading-5 leading-7 interReg font-[400] md:mt-0 mt-4">
            <p>
              Hello, we are ABC. trying to make an effort to put the right
              people for you <br /> to get the best results. Just insight
            </p>
            <Link className="link link-hover mt-10">(123) 456-7890</Link>
            <Link className="link link-hover">ABC@gmail.com</Link>
            <div className="text-white flex gap-4 mt-4">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagramSquare />
              <FaFacebookF />
            </div>
          </div>
          <div className="lg:text-[16px] md:text-[14px] text-[28px] lg:leading-7 md:leading-5 leading-7 md:my-0 my-6 font-[500] interReg xl:ml-[0px] lg:ml-[60px] md:ml-[60px] ml-0">
            <span className="footer-title font-bold">Features</span>
            <Link className="link link-hover">Add Your Car</Link>
            <Link className="link link-hover">Know Your Vahan</Link>
            <Link className="link link-hover">Fuel Maintenance</Link>
            <Link className="link link-hover">Car Wash</Link>
            <Link className="link link-hover">Car Maintenance</Link>
            <Link className="link link-hover">Contact </Link>
            <div className="md:flex block gap-4">
              <img
                className="lg:w-[156px] md:w-[140px] w-[400px] lg:h-[45px] md:h-[35px] h-full"
                src={google}
                alt="google"
              />
              <img
                className="lg:w-[156px] md:w-[140px] w-[400px] lg:h-[45px] md:h-[35px] h-full mt-2 md:mt-0"
                src={app}
                alt="app"
              />
            </div>
          </div>
          <div className="lg:text-[16px] md:text-[14px] text-[28px] lg:leading-7 md:leading-5 leading-7 font-[500] interReg ml-[-200px] mr-10">
            <span className="footer-title font-bold">Explore</span>
            <Link className="link link-hover">Resources</Link>
            <Link className="link link-hover">Blog</Link>
            <Link className="link link-hover">Documents</Link>
          </div>
        </footer>
      </div>
    );
};

export default Footer;
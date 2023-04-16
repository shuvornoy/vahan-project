import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import google from '../../../asete/footer/Google_Play_Badge_001eb0f465 1.png'
import app from '../../../asete/footer/App_Store_Badge_f39b9659af 1.png';
import footer from "../../../asete/logo/logo.png";

const Footer = () => {
    return (
      <div className="bg-[#1B2551]">
        <footer className="footer max-w-7xl mx-auto p-10 text-white md:flex block justify-between">
          <div className="text-white">
            <img src={footer} alt="" />
          </div>
          <div className="md:w-[325px] w-full text-xl interReg">
            <p>
              Hello, we are ABC. trying to make an effort to put the right
              people for you to get the best results. Just insight
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
          <div className="text-xl interReg">
            <span className="footer-title">Features</span>
            <Link className="link link-hover">Add Your Car</Link>
            <Link className="link link-hover">Know Your Vahan</Link>
            <Link className="link link-hover">Fuel Maintenance</Link>
            <Link className="link link-hover">Car Wash</Link>
            <Link className="link link-hover">Car Maintenance</Link>
            <Link className="link link-hover">Contact </Link>
            <div className="md:flex block gap-4">
              <img src={google} alt="" />
              <img className="mt-2 md:mt-0" src={app} alt="" />
            </div>
          </div>
          <div className="text-xl interReg">
            <span className="footer-title">Explore</span>
            <Link className="link link-hover">Resources</Link>
            <Link className="link link-hover">Blog</Link>
            <Link className="link link-hover">Documents</Link>
          </div>
        </footer>
      </div>
    );
};

export default Footer;
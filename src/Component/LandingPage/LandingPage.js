import React from 'react';
import { Link } from 'react-router-dom';
import landingImg from '../../asete/banner/landing1.png'
import landing from "../../asete/banner/lan.png";




const LandingPage = () => {
    return (
      <div className="max-container">
        <div>
          <div className=" h-[100vh] w-[100%] absolute img-gradient bg-black LandingPage">
            <img
              className="h-full w-full md:hidden block"
              src={landingImg}
              alt="landingImg"
            />
            <img
              className=" bg-center bg-cover h-[100vh] w-full hidden md:block"
              src={landing}
              alt="landingImg"
            />
          </div>
          <div className="text-center relative text-white xl:top-[450px] lg:top-[340px] top-[450px]">
            <h1 className="text-[24px] xl:text-[60px]  md:text-[40px] font-bold ">VAHAN +</h1>
            <h2 className="text-[24px] xl:text-[60px]  md:text-[40px] font-bold md:leading-5 xl:leading-10">Your Car Partner</h2>
            <p className="text-[16px] xl:text-[22px]  md:text-[18px] mt-4">
              Lorem ipsum dolor sit amet, consectetu <br /> adipisicing elit,
              sed diam
            </p>
            <Link to="/main/home">
              <button className="border-none rounded xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] px-10 py-3 font-semibold bg-[#F36E21] hover:bg-black mt-6">
                GET STARTED NOW!
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default LandingPage;
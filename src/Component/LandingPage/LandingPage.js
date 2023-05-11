import React from 'react';
import { Link } from 'react-router-dom';
import landingImg from '../../asete/banner/landing1.png'
import landing from "../../asete/banner/landing.png";



const LandingPage = () => {
    return (
      <div className="max-container">
        <div>
          <div className="flex justify-center items-center h-[100vh] w-[100%] absolute img-gradient">
            <img
              className="h-full w-full md:hidden block"
              src={landingImg}
              alt="landingImg"
            />
            <img
              className="h-full w-full hidden md:block"
              src={landing}
              alt="landingImg"
            />
          </div>
          <div className="text-center relative text-white xl:top-[420px] lg:top-[340px] top-[350px]">
            <h1 className="text-[24px] font-bold ">VAHAN +</h1>
            <h2 className="text-[24px] font-bold">Your Car Partner</h2>
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet, consectetu <br /> adipisicing elit,
              sed diam
            </p>
            <Link to="/main/home">
              <button className="border-none rounded xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] px-10 py-3 font-semibold bg-[red] hover:bg-black mt-6">
                GET STARTED NOW!
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default LandingPage;
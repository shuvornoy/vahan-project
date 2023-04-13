import React from 'react';
import bgPhoto from '../.../../../../asete/download/Ellipse 19.png';
import phone from '../.../../../../asete/download/download.png';
import google from "../.../../../../asete/footer/Google_Play_Badge_001eb0f465 1.png";
import app from "../.../../../../asete/footer/App_Store_Badge_f39b9659af 1.png";
import img from "../.../../../../asete/banner/scren.png";


const Download = () => {
    return (
      <div className="lg:my-16 my-0 max-w-7xl mx-auto">
        <div className="md:flex block justify-center items-center lg:gap-14 xl:px-0 lg:px-8 md:px-8 px-4">
          <div className="xl:w-[50%] lg:w-[50%] md:w-[50%] w-full">
            <h2 className="lg:text-4xl md:text-2xl text-xl  font-bold">
              <span className="underline underline-offset-8">Download</span>
              Vahan+ App
            </h2>
            <p className="my-4 text-[17px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat.
            </p>
            <div className="md:flex block gap-4 my-6">
              <img
                className="lg:h-full md:h-[30px] h-full"
                src={google}
                alt=""
              />
              <img
                className="mt-2 md:mt-0 lg:h-full md:h-[30px] h-full"
                src={app}
                alt=""
              />
            </div>
            <div className="flex items-center">
              <img className="h-[60px]" src={img} alt="" />
              <h2 className="w-[130px] leading-[1] ml-[10px]">
                SCAN TO DOWNLOAD VAHAN+ APP
              </h2>
            </div>
          </div>
          <div>
            <div className="absolute md:mt-0 mt-20">
              <img
                className="xl:h-[600px] lg:h-[420px] md:h-[400px] h-[300px]"
                src={bgPhoto}
                alt=""
              />
            </div>
            <div className="relative top-0 xl:mt-[50px] lg:mt-[520px] md:mt-[400px] mt-[1270px] xl:h-[600px] lg:h-[450px] md:h-[400px] h-[300px]">
              <img className="h-full" src={phone} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Download;
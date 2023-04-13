import React from 'react';
import './Banner.css'
import img from '../../../asete/banner/scren.png'

const Banner = () => {
  return (
    <div className="banner">
      <div className="max-w-7xl mx-auto ">
        <div className="h-[75vh] px-4">
          <div className="md:flex sm:block max-container mx-auto justify-between h-full items-center">
            <div className="md:w-[695px] sm:w-[100%]  text-start text-white">
              <h2 className="xl:text-[60px] lg:text-[60px] md:text-[30px] text-3xl font-[700]">
                One Stop Solution
              </h2>
              <p className="text-3xl xl:text-[60px] lg:text-[60px] md:text-[25px] xl:leading-[68px] lg:leading-[68px] md:leading-[48px] font-[400]">
                to your Car Maintenance Problems
              </p>
              <p className="md:py-10 sm:py-6 font-[400]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed{" "}
                <br />
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
                <br />
                aliquam erat volutpat.
              </p>

              <div className="flex items-center py-4">
                <img className="w-[99px] h-[99px]" src={img} alt="" />
                <h2 className="w-[130px] leading-[1] ml-[10px] text-[20px] font-[700]">
                  SCAN TO DOWNLOAD VAHAN+ APP
                </h2>
              </div>
            </div>
            <div className=" md:w-[440px] sm:w-[100%] h-[513px] bg-white p-6 rounded flex justify-center items-center">
              <div className="mx-auto">
                <h2 className="text-[30px] text-center font-[700] mt-5">
                  Sign Up at Vahan +
                </h2>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="input input-bordered md:w-[360px] sm:w-[100%] h-[55px] ml-[15px]  mt-5 font-[400] text-[18px]"
                />
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="input input-bordered  md:w-[360px] sm:w-[100%] h-[55px] ml-[15px]  mt-5 font-[400] text-[18px] "
                />
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="input input-bordered  md:w-[360px] sm:w-[100%] h-[55px] ml-[15px]  mt-5  font-[400] text-[18px]"
                />
                <div className="md:flex sm:block justify-center md:w-[360px] sm:w-[100%]  ml-[15px]  mt-5">
                  <input
                    type="text"
                    placeholder="Your City"
                    className="input input-bordered md:w-[163px] sm:w-[100%] h-[55px] mr-7 font-[400] text-[18px]"
                  />
                  <input
                    type="text"
                    placeholder="Code"
                    className="input input-bordered md:w-[163px] sm:w-[100%] h-[55px] font-[400] text-[18px]"
                  />
                </div>
                <button className="bg-[#f36e21] md:w-[360px] sm:w-[100%]   ml-[15px] mx-auto mt-5 h-[55px] text-white font-[700] md:text-[18px]  px-6">
                  PROCEED TO CONTINUE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
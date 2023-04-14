import React from 'react';
import './Banner.css'
import img from '../../../asete/banner/scren.png'

const Banner = () => {
  return (
    <div className="banner">
      <div className="max-w-7xl mx-auto ">
        <div className="h-[80vh] box_hig px-4">
          <div className="md:flex block justify-between items-center h-full">
            <div className="xl:w-[700px] lg:w-[500px] w-[100%] text-start text-white site">
              <h2 className="xl:text-[60px] lg:text-[40px] md:text-[35px] text-3xl font-[700] xl:leading-[60px] lg:leading-[68px] solution">
                One Stop Solution
              </h2>
              <p className="text-3xl xl:text-[54px] lg:text-[40px] md:text-[35px] text-[26px] xl:leading-[60px] lg:leading-[48px] md:leading-[48px] font-[400]">
                to your Car Maintenance Problems
              </p>
              <p className="md:py-6 py-4 font-[400] detaile">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed{" "}
                <br />
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
                <br />
                aliquam erat volutpat.
              </p>

              <div className="flex items-center py-4">
                <img className="w-[60px] h-[60px]" src={img} alt="" />
                <h2 className="w-[130px] leading-[1] ml-[10px] text-[16px] font-[400]">
                  SCAN TO DOWNLOAD VAHAN+ APP
                </h2>
              </div>
            </div>
            <div className="pr-1 xl:w-[340px] lg:w-[300px] md:w-[260px] w-[100%] xl:h-[350px] lg:h-[300px] md:h-[280px] h-[520px] bg-white rounded flex justify-center items-center md:mt-0 mt-8 main-box">
              <div className=" w-full mx-auto text">
                <h2 className="lg:text-[30px] md:text-[20px] text-center font-[700] pt-3">
                  Sign Up at Vahan +
                </h2>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="input input-bordered xl:w-[300px] lg:w-[276px] md:w-[250px] w-[100%] h-[35px] xl:ml-[15px] lg:ml-[10px] font-[400] text-[18px] mt-2"
                />
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="input input-bordered  xl:w-[300px] lg:w-[276px] md:w-[250px] w-[100%] h-[35px] xl:ml-[15px] lg:ml-[10px]  my-2 font-[400] text-[18px] "
                />
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="input input-bordered  xl:w-[300px] lg:w-[276px] md:w-[250px] w-[100%] h-[35px] xl:ml-[15px] lg:ml-[10px] font-[400] text-[18px]"
                />
                <div className="md:flex block justify-center gap-4 ml-[15px]  mt-2">
                  <input
                    type="text"
                    placeholder="Your City"
                    className="input input-bordered xl:w-[140px] lg:w-[120px] md:w-[100px] w-[100%] xl:h-[55px] lg:h-[35px] md:h-[30px] h-[30px] font-[400] text-[18px]"
                  />
                  <input
                    type="text"
                    placeholder="Code"
                    className="input input-bordered xl:w-[140px] lg:w-[120px] md:w-[105px] w-[100%] xl:h-[55px] lg:h-[35px] md:h-[30px] h-[30px] font-[400] text-[18px] lg:mr-4"
                  />
                </div>
                <button className="bg-[#f36e21] lg:w-[90%] md:w-[94%] w-[98%] lg:ml-[15px] md:ml-2 mt-2 md:h-[50px] h-[30px] text-white font-[700] lg:text-[18px] text-[14px] px-4 mb-8">
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
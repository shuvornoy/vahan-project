import React from 'react';
import './Banner.css'
import img from '../../../../asete/banner/scren.png'
import SignUp from '../../SignUp/SignUp';
import LogIn from '../../LogIn/LogIn';

const Banner = ({ logIn }) => {

  return (
    <div className="banner">
      <div className="xl:w-[1384px] lg:w-[1024px] md:w-[768px] mx-auto ">
        <div className="h-[80vh] box_hig px-4">
          <div className="md:flex block justify-between items-center xl:h-[635px] lg:h-[500px] md:h-[450px]">
            <div className="xl:w-[695px]  lg:w-[500px] md:w-[400px] w-[100%] text-start text-white site md:mt-24 margi">
              <h2 className="xl:text-[60px]  lg:text-[40px] md:text-[35px] text-3xl font-[700] xl:leading-[60px] lg:leading-[68px] solution sansBold">
                One Stop Solution
              </h2>
              <p className="text-3xl xl:text-[60px] lg:text-[40px] md:text-[35px] text-[26px] xl:leading-[60px] lg:leading-[48px] md:leading-[48px] sansReg">
                to your Car Maintenance Problems
              </p>
              <p className="md:py-6 py-4 interReg detaile">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed{" "}
                <br />
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
                <br />
                aliquam erat volutpat.
              </p>

              <div className="flex items-center py-4">
                <img className="w-[88px] h-[88px]" src={img} alt="" />
                <h2 className="w-[167px] leading-[1] ml-[10px] text-[20px] font-[700]">
                  SCAN TO DOWNLOAD VAHAN+ APP
                </h2>
              </div>
            </div>
            <SignUp />
            {/* <div>
              <div className={`${logIn} ? "block" : "hidden"`}>
                <SignUp />
              </div>
              <div className={`${logIn} ? "hidden" : "block"`}>
                <LogIn />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
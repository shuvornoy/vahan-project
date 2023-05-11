import React from 'react';
import features from '../../../../asete/features/FEATURES.png'
import img from '../../../../asete/features/1.png'
import img1 from '../../../../asete/features/2.png'
import img2 from '../../../../asete/features/3.png'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Features = () => {
    return (

      <>
      <div className="xl:w-[1436px]  lg:w-[920px] mx-auto py-12">
      <h2 className="lg:text-3xl xl:text-[55px] text-2xl sansBold text-center">
          Vahan+ <span className=" relative z-[1]">Features</span>
        </h2>
        <div className="bg-[#F36E21] xl:w-[225px] lg:w-[122px] md:w-[98px] w-[97px] h-[8px] xl:h-[10px] text-center absolute xl:ml-[705px] lg:ml-[506px] md:ml-[379px] ml-[155px]  xl:mt-[-7px] mt-[-11px] "></div>
      </div>


      <div className="xl:w-[1436px] xl:h-[653px]  lg:w-[920px] mx-auto my-8">
        <div className=" xl:w-[1436px] lg:w-[920px]   mx-auto grid md:grid-cols-3 grid-cols-1 md:absolute lg:gap-14 md:gap-4 z-[1] xl:px-0 lg:px-8 px-2 mt-8">
          <div className="rounded-[4px] bg-[#ffffffd9] shadow-xl">
            <figure>
              <img className="w-[100%]" src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title sansBold text-[30px]">Fuel Management</h2>
              <p className="interReg text-[18px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <Link to="/main/fuel">
                <div className="flex justify-start items-center text-[15px] text-[#F36E21] font-[500]">
                  <span className="mr-4">Learn more</span>
                  <p>
                    <HiOutlineArrowNarrowRight />
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="rounded-[4px] md:my-0 my-4 bg-[#ffffffd9] shadow-xl">
            <figure>
              <img className="w-[100%]" src={img1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title sansBold text-[30px]">Car Wash</h2>
              <p className="interReg text-[18px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.{" "}
              </p>
              <Link to="/main/wash">
                <div className="flex justify-start items-center text-[15px] text-[#F36E21] font-[500]">
                  <span className="mr-4">Learn more</span>
                  <p>
                    <HiOutlineArrowNarrowRight />
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="rounded-[4px] bg-[#ffffffd9] shadow-xl">
            <figure>
              <img className="w-[100%]" src={img2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[30px] sansBold">Know your Vahan</h2>
              <p className="interReg text-[18px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.{" "}
              </p>
              <Link to="/main/choose">
                <div className="flex justify-start items-center text-[15px] text-[#F36E21] font-[500]">
                  <span className="mr-4">Learn more</span>
                  <p>
                    <HiOutlineArrowNarrowRight />
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-end md:px-1 px-4">
          <img
            className="md:relative top-0 mt-[430px] xl:h-[190px] lg:h-[130px] md:h-[100px] md:block hidden xl:mr-[-10px] lg:mr-6 md:ml-3"
            src={features}
            alt=""
          />
        </div>
      </div>
      </>
    );
};

export default Features;
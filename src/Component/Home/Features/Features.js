import React from 'react';
import features from '../../../asete/features/FEATURES.png'
import img from '../../../asete/features/1.png'
import img1 from '../../../asete/features/2.png'
import img2 from '../../../asete/features/3.png'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Features = () => {
    return (
      <div className="max-w-7xl mx-auto my-8">
        <h2 className="lg:text-3xl md:text-2xl font-bold text-center">
          Vahan+ <span className=" relative z-[1]">Features</span>
        </h2>
        <div className="bg-[#F36E21] w-[124px] h-[8px] text-center absolute ml-[637px] mt-[-11px] "></div>
        <div className=" max-w-7xl mx-auto grid md:grid-cols-3 grid-cols-1 md:absolute lg:gap-14 md:gap-4 z-[1] xl:px-0 lg:px-8 px-2 mt-8">
          <div className="card  bg-[#ffffffd9] shadow-xl">
            <figure>
              <img className="w-[100%]" src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Fuel Management</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <Link>
                <div className="flex justify-start items-center text-[15px] text-[#F36E21]">
                  <span className="mr-4">Learn more</span>
                  <p>
                    <HiOutlineArrowNarrowRight />
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="card md:my-0 my-4 bg-[#ffffffd9] shadow-xl">
            <figure>
              <img className="w-[100%]" src={img1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Car Wash</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.{" "}
              </p>
              <Link>
                <div className="flex justify-start items-center text-[15px] text-[#F36E21]">
                  <span className="mr-4">Learn more</span>
                  <p>
                    <HiOutlineArrowNarrowRight />
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="card bg-[#ffffffd9] shadow-xl">
            <figure>
              <img className="w-[100%]" src={img2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Know your Vahan</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.{" "}
              </p>
              <Link>
                <div className="flex justify-start items-center text-[15px] text-[#F36E21]">
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
            className="md:relative top-0 mt-[375px] xl:h-[168px] lg:h-[130px] md:h-[100px] md:block hidden xl:mr-[-10px] lg:mr-6 md:ml-3"
            src={features}
            alt=""
          />
        </div>
      </div>
    );
};

export default Features;
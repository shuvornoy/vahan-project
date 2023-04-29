import React from 'react';
import car from "../.../../../../../asete/../asete/product/image 9.png";
import Vehicles from '../../SiteBar/Vehicles/Vehicles';
import VehiclesBanners from '../../AllBanner/VehiclesBanner/VehiclesBanners';
import { AiFillCaretUp, AiOutlineColumnHeight } from "react-icons/ai";
import { BiCaretDown } from "react-icons/bi";

const Manage = () => {
    return (
      <div>
        <VehiclesBanners />
        <div className="mb-14 md:mt-[170px] mt-[100px] block md:flex justify-between items-baseline gap-4 max-w-7xl mx-auto xl:px-0 px-2">
          <Vehicles />

          <div className="xl:w-[800px] lg:w-[570px] md:w-[420px] w-full shadow-2xl bg-base-100 xl:px-16 lg:p-12 md:p-8 p-4">
            <h2 className="lg:text-[42px] md:text-[30px] text-[28px] font-semibold interBold">
              Add/Edit Vehicles
            </h2>
            <div className="flex justify-start gap-4 my-8">
              <div className="w-full md:text-[18px] text-[14px] interReg font-medium">
                <p>Car Name/Company</p>
                <hr className="mt-2" />
              </div>
              <div className="w-full md:text-[18px] text-[14px] interReg font-medium">
                <p>Car Name/Company</p>
                <hr className="mt-2" />
              </div>
            </div>
            <img className="w-full" src={car} alt="" />
            <p className="mt-5 text-end text-[14px] font-bold text-[#F36E21]">
              UPLOAD YOUR CAR IMAGE
            </p>

            <div>
              <div className="flex justify-between items-center md:text-[24px] text-[20px] my-6">
                <h2 className="font-bold interBold">Add More Car Details</h2>
                <h3>
                  <AiFillCaretUp />
                </h3>
              </div>
              <hr />

              <div className="flex justify-between items-center md:text-[16px] text-[14px] mt-6">
                <div className="flex items-center gap-2">
                  <span>
                    <AiOutlineColumnHeight />
                  </span>
                  <h2 className="font-semibold interBold">Distance</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="interReg font-medium">Kilometers</h2>
                  <span>
                    <BiCaretDown />
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center md:text-[16px] text-[14px] mt-6">
                <div className="flex items-center gap-2">
                  <span>
                    <AiOutlineColumnHeight />
                  </span>
                  <h2 className="font-semibold interBold">
                    Entering the milage{" "}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="interReg font-medium">Odometer</h2>
                  <span>
                    <BiCaretDown />
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center md:text-[16px] text-[14px] mt-6">
                <div className="flex items-center gap-2">
                  <span>
                    <AiOutlineColumnHeight />
                  </span>
                  <h2 className="font-semibold interBold">Fuel</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="interReg font-medium">liters</h2>
                  <span>
                    <BiCaretDown />
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center md:text-[16px] text-[14px] mt-6">
                <div className="flex items-center gap-2">
                  <span>
                    <AiOutlineColumnHeight />
                  </span>
                  <h2 className="font-semibold interBold">Consumption</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="interReg font-medium">1/10km</h2>
                  <span>
                    <BiCaretDown />
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center md:text-[16px] text-[14px] mt-6">
                <div className="flex items-center gap-2">
                  <span>
                    <AiOutlineColumnHeight />
                  </span>
                  <h2 className="font-semibold interBold">Currency</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="interReg font-medium">NIR</h2>
                  <span>
                    <BiCaretDown />
                  </span>
                </div>
              </div>
            </div>
            {/*--------*/}
            <div>
              <div className="flex justify-between items-center text-[24px] my-6">
                <h2 className="font-bold interBold">Car Optional Details</h2>
                <h3>
                  <AiFillCaretUp />
                </h3>
              </div>
              <hr />
              <p className="mt-6 interReg font-medium">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>
            {/* car detail */}
            <div>
              <div className="flex justify-between items-center text-[24px] my-6">
                <h2 className="font-bold interBold">Car Optional Details</h2>
                <h3>
                  <AiFillCaretUp />
                </h3>
              </div>
              <hr />

              <div className="flex justify-between items-center md:text-[16px] text-[14px] mt-6">
                <div className="flex items-center gap-2">
                  <span>
                    <AiOutlineColumnHeight />
                  </span>
                  <h2 className="font-semibold interBold">Manufacturer</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="interReg font-medium">Lorem Ipsu</h2>
                  <span>
                    <BiCaretDown />
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center md:text-[16px] text-[14px] mt-6">
                <div className="flex items-center gap-2">
                  <span>
                    <AiOutlineColumnHeight />
                  </span>
                  <h2 className="font-semibold interBold">Lisence Plate</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="interReg font-medium">LAU 4589 </h2>
                  <span>
                    <BiCaretDown />
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center md:text-[16px] text-[14px] mt-6">
                <div className="flex items-center gap-2">
                  <span>
                    <AiOutlineColumnHeight />
                  </span>
                  <h2 className="font-semibold interBold">VIN</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="interReg font-medium">012345678</h2>
                  <span>
                    <BiCaretDown />
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center md:text-[16px] text-[14px] mt-6">
                <div className="flex items-center gap-2">
                  <span>
                    <AiOutlineColumnHeight />
                  </span>
                  <h2 className="font-semibold interBold">Displacement</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="interReg font-medium">XXXX km</h2>
                  <span>
                    <BiCaretDown />
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center md:text-[16px] text-[14px] mt-6">
                <div className="flex items-center gap-2">
                  <span>
                    <AiOutlineColumnHeight />
                  </span>
                  <h2 className="font-semibold interBold">Purchase Date</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="interReg font-medium">12/12/2022</h2>
                  <span>
                    <BiCaretDown />
                  </span>
                </div>
              </div>
            </div>

            <button className="btn bg-[#F36E21] w-full mt-6 border-none sansBold font-bold text-[18px]">
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    );
};

export default Manage;
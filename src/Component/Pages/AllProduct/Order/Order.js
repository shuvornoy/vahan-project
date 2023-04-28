import React from 'react';
import { Link } from 'react-router-dom';
import BannerSmoll from "../../AllBanner/BannerSmoll/BannerSmoll";
import AllSiteManu from "../../SiteBar/AllSiteManu/AllSiteManu";

const Order = () => {
    return (
      <div>
        <BannerSmoll />
        <div className="mb-14 md:mt-[170px] mt-[100px] block md:flex justify-between items-center gap-4 max-w-7xl mx-auto xl:px-0 px-2">
          <AllSiteManu />

          <div className="xl:w-[800px] lg:w-[570px] md:w-[420px] w-full shadow-2xl bg-base-00 lg:p-16 md:p-12 p-4">
            <h2 className="lg:text-[42px] md:text-[38px] text-[28px] font-semibold interReg">
              Order Summary
            </h2>
            <p className="text-[18px] font-medium interReg mb-8">
              Pick Suitable Dates for Car Wash
            </p>

            <div className=" mt-6">
              <div className="flex justify-between items-center bg-base-100 shadow-xl rounded-lg h-[60px] lg:px-[50px] px-4 lg:text-[24px] sansReg md:text-[18px]">
                <h2>
                  <span className="font-semibold">Bronze</span> Package
                </h2>
                <h3>
                  <span className="font-semibold">349</span> INR
                </h3>
              </div>
              <Link>
                <p className="text-end text-[14px] font-bold text-[#F36E21] my-4">
                  CHANGE
                </p>
              </Link>
              <hr />
              <div className="flex justify-between items-center text-[14px] font-medium interReg my-4">
                <div>
                  <h2>Additional Charges</h2>
                  <h2 className="font-bold">Sub Total</h2>
                </div>
                <div>
                  <h3>50 INR</h3>
                  <h3 className="font-bold">349 INR</h3>
                </div>
              </div>
              <Link>
                <p className="text-end font-bold text-[14px] text-[#F36E21] my-4">
                  MY SUBSCRIPTIONS
                </p>
              </Link>
            </div>

            <button className="btn bg-[#F36E21] w-full mt-6 uppercase border-none sansBold font-bold">
              confirm booking
            </button>
          </div>
        </div>
      </div>
    );
};

export default Order;
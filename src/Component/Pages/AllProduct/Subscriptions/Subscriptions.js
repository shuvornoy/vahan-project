import React from "react";
import BannerSmoll from "../../AllBanner/BannerSmoll/BannerSmoll";
import AllSiteManu from "../../SiteBar/AllSiteManu/AllSiteManu";
import { Link } from "react-router-dom";
import Calendars from "../../../Calendars/Calendars";

const Subscriptions = () => {
 
  return (
    <div>
      <BannerSmoll />
      <div className="mb-14 md:mt-[170px] mt-[100px] block md:flex justify-between items-center gap-4 max-w-7xl mx-auto xl:px-0 px-2">
        <AllSiteManu />

        <div className="xl:w-[800px] lg:w-[570px] md:w-[420px] w-full shadow-2xl bg-base-100 lg:p-16 md:p-12 p-4">
          <h2 className="lg:text-[42px] md:text-[30px] text-[28px] font-semibold interReg">
            My Subscriptions
          </h2>
          <p className="md:text-[18px] text-[16px] font-medium interReg mb-8">
            Below are your subscription details:
          </p>
          <div className="w-full">
            <Calendars />
          </div>
          <Link>
            <p className="text-end text-[14px] interReg font-medium my-4">
              Last car wash: 09th Nov, 2023
            </p>
          </Link>
          <button className="btn bg-[#F36E21] w-full mt-6 uppercase border-none sansBold font-bold">
            Back to homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;

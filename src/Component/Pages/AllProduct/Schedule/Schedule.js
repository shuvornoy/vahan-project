import React from 'react';
import Calendars from "../../../Calendars/Calendars";
import BannerSmoll from "../../AllBanner/BannerSmoll/BannerSmoll";
import AllSiteManu from "../../SiteBar/AllSiteManu/AllSiteManu";

const Schedule = () => {
    
    return (
      <div>
        <BannerSmoll />
        <div className="mb-14 md:mt-[170px] mt-[100px] block md:flex justify-between items-center gap-4 max-w-7xl mx-auto xl:px-0 px-2">
          <AllSiteManu />

          <div className="xl:w-[800px] lg:w-[570px] md:w-[420px] w-full shadow-2xl bg-base-100 lg:p-16 md:p-12 p-4">
            <h2 className="lg:text-[42px] md:text-[30px] text-[28px] font-semibold interReg">
              Schedule Car Wash
            </h2>
            <p className="text-[18px] font-medium interReg mb-8">
              Pick Suitable Dates for Car Wash
            </p>
            <div className="w-full">
              <Calendars />
            </div>
            <button className="btn bg-[#F36E21] w-full mt-6 border-none sansBold font-bold">
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    );
};

export default Schedule;
import React from "react";
import BannerSmoll from "../../AllBanner/BannerSmoll/BannerSmoll";
import AllSiteManu from "../../SiteBar/AllSiteManu/AllSiteManu";

const YourPackage = () => {
  return (
    <div>
      <BannerSmoll />
      <div className="mb-14 md:mt-[170px] mt-[100px] block md:flex justify-between items-center gap-4 max-w-7xl mx-auto xl:px-0 px-2">
        <AllSiteManu />

        <div className="xl:w-[800px] lg:w-[570px] md:w-[420px] w-full shadow-2xl bg-base-100 lg:p-16 md:p-12 p-4">
          <h2 className="lg:text-[42px] md:text-[30px] text-[28px] font-semibold interReg">
            Choose Your Package
          </h2>
          <p className="md:text-[18px] text-[16px] font-medium mb-8 interReg">
            Pick The Plan that’s Right For You!
          </p>
          <div className="bg-base-100 shadow-xl rounded-lg">
            <div className="flex justify-between items-center rounded-t-lg bg-[#1B2551] text-white h-[60px] lg:px-[50px] px-4 lg:text-[24px] md:text-[20px] interSemi ">
              <h2>
                <span className="font-semibold">Bronze</span> Package
              </h2>
              <h3>
                <span className="font-semibold">349</span> INR
              </h3>
            </div>
            <div className="flex justify-between items-center lg:px-[50px] px-4 text-[14px] font-medium interReg my-4">
              <h2>Package Includes:</h2>
              <div className="flex justify-center">
                <h3 className="site-box">Daily Car Wash</h3>{" "}
                <div className="bg-[#F36E21] w-[10px] h-[10px] mx-3 mt-1"></div>
              </div>
            </div>
            <div className="lg:px-[50px] px-4 pb-4">
              <button className="w-full text-center text-[#F36E21] border border-[#F36E21] rounded-lg py-2 sansBold">
                Select This Plan
              </button>
            </div>
          </div>

          <div className="bg-base-100 shadow-xl rounded-lg mt-6">
            <div className="flex justify-between items-center rounded-t-lg bg-[#1B2551] text-white h-[60px] lg:px-[50px] px-4 lg:text-[24px] md:text-[20px] interSemi">
              <h2>
                <span className="font-semibold">Bronze</span> Package
              </h2>
              <h3>
                <span className="font-semibold">399</span> INR
              </h3>
            </div>
            <div className="flex justify-between items-center lg:px-[50px] px-4 text-[14px] font-medium interReg my-4">
              <h2>Package Includes:</h2>
              <div className="flex justify-center">
                <div>
                  <h3>Daily Car Wash</h3>
                  <h3>Weekly Vaccum</h3>
                </div>
                <div>
                  <div className="bg-[#F36E21] w-[10px] h-[10px] mx-3 mt-1"></div>
                  <div className="bg-[#F36E21] w-[10px] h-[10px] mx-3 mt-3"></div>
                </div>
              </div>
            </div>
            <div className="lg:px-[50px] px-4 pb-4">
              <button className="w-full text-center text-[#F36E21] border border-[#F36E21] rounded-lg py-2 sansBold">
                Select This Plan
              </button>
            </div>
          </div>
          <div className="bg-base-100 shadow-xl rounded-lg mt-6">
            <div className="flex justify-between items-center rounded-t-lg bg-[#1B2551] text-white h-[60px] lg:px-[50px] px-4 lg:text-[24px] md:text-[20px] interSemi">
              <h2>
                <span className="font-semibold">Bronze</span> Package
              </h2>
              <h3>
                <span className="font-semibold">449</span> INR
              </h3>
            </div>
            <div className="flex justify-between items-center lg:px-[50px] px-4 text-[14px] font-medium interReg my-4">
              <h2>Package Includes:</h2>
              <div className="flex justify-center">
                <div>
                  <h3>Daily Car Wash</h3>
                  <h3>Weekly Vaccum</h3>
                  <h3>Water Wash</h3>
                </div>
                <div>
                  <div className="bg-[#F36E21] w-[10px] h-[10px] mx-3 mt-1"></div>
                  <div className="bg-[#F36E21] w-[10px] h-[10px] mx-3 mt-3"></div>
                  <div className="bg-[#F36E21] w-[10px] h-[10px] mx-3 mt-3"></div>
                </div>
              </div>
            </div>
            <div className="lg:px-[50px] px-4 pb-4">
              <button className="w-full text-center text-[#F36E21] border border-[#F36E21] rounded-lg py-2 sansBold">
                Select This Plan
              </button>
            </div>
          </div>

          <button className="btn bg-[#F36E21] w-full mt-6 border-none sansBold font-bold">
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourPackage;

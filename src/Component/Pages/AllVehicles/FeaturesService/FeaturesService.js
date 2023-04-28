import React from "react";
import car from "../.../../../../../asete/../asete/product/image 9.png";
import Vehicles from "../../SiteBar/Vehicles/Vehicles";
import VehiclesBanner from "../../AllBanner/VehiclesBanner/VehiclesBanner";

const FeaturesService = () => {
  return (
    <div>
      <VehiclesBanner />
      <div className="mb-14 md:mt-[170px] mt-[100px] block md:flex justify-between items-baseline gap-4 max-w-7xl mx-auto xl:px-0 px-2">
        <Vehicles />

        <div className="xl:w-[800px] lg:w-[570px] w-full shadow-2xl bg-base-100 xl:px-16 lg:p-12 md:p-8 p-4">
          <h2 className="lg:text-[42px] md:text-[30px] text-[28px] font-semibold">
            All Vehicles
          </h2>
          <div className="flex justify-start gap-4 my-8">
            <div className="w-full">
              <div className="flex justify-between items-center xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px] ">
                <p className="font-bold">Car Name/Company</p>
                <p className="text-[#F36E21]">Edit</p>
              </div>
              <h2 className="lg:text-[16px] md:text-[14px] text-[9px] font-medium">
                Car Model No
              </h2>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px]">
                <p className="font-bold">Car Name/Company</p>
                <p className="text-[#F36E21]">Edit</p>
              </div>
              <h2 className="lg:text-[16px] md:text-[14px] text-[9px] font-medium">
                Car Model No
              </h2>
            </div>
          </div>
          <div className="lg:flex block justify-between w-full items-center gap-4 xl:h-[290px] lg:h-[140px]">
            <img
              className="h-full xl:w-[335px] lg:w-[230px] w-full "
              src={car}
              alt="img"
            />
            <img
              className="h-full xl:w-[335px] lg:w-[230px] w-full lg:mt-0 mt-4"
              src={car}
              alt="img"
            />
          </div>
          <button className="btn bg-[#F36E21] w-full mt-6 border-none">CONTINUE</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesService;

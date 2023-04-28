import React from 'react';
import car from '../.../../../../../asete/../asete/product/image 9.png';
import BannerSmoll from '../../AllBanner/BannerSmoll/BannerSmoll';
import AllSiteManu from '../../SiteBar/AllSiteManu/AllSiteManu';



const Product = () => {
    return (
      <div>
        <BannerSmoll />
        <div className="mb-14 md:mt-[170px] mt-[100px] block md:flex justify-between items-center gap-4 max-w-7xl mx-auto xl:px-0 px-2">
          <AllSiteManu />

          <div className="xl:w-[800px] lg:w-[570px] md:w-[420px] w-full shadow-2xl bg-base-100 lg:p-16 md:p-12 p-4">
            <h2 className="lg:text-[42px] md:text-[38px] text-[28px] font-semibold interReg">
              Add Your Car
            </h2>
            <div className="flex justify-start gap-4 my-8">
              <div className="w-full md:text-[16px] text-[14px] interReg">
                <p>Car Name/Company</p>
                <hr className="mt-2" />
              </div>
              <div className="w-full md:text-[16px] text-[14px] interReg">
                <p>Car Name/Company</p>
                <hr className="mt-2" />
              </div>
            </div>
            <img className="w-full" src={car} alt="" />
            <p className="mt-5 text-end text-[14px] font-bold text-[#F36E21]">
              UPLOAD YOUR CAR IMAGE
            </p>
            <button className="btn bg-[#F36E21] w-full mt-6 border-none sansBold font-bold">
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    );
};

export default Product;
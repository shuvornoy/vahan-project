import React from 'react';
import { BsFillSendFill } from "react-icons/bs";

const NewsLater = () => {
    return (
      <div className="bg-[#E9E9EA]  h-[182px]">
        <div className="md:flex block text-center justify-center gap-4 items-center h-full">
          <div>
            <h2 className="text-[18px] text-[#1B2551] font-bold interBold md:pt-0 pt-[50px]">
              Newsletter
            </h2>
          </div>
          <div className="form-control md:px-0 px-2">
            <input
              type="text"
              className="rounded-full md:w-[390px] w-full md:h-[70px] h-[60px] relative border-none"
            />
          </div>
          <div className="md:w-[340px] w-[280px] absolute md:ml-[100px] ml-[20px] md:mt-0 mt-[-50px]">
            <div className="flex justify-between items-center">
              <h2>Your email</h2>
              <span className="bg-[#F36E21] rounded-full p-3 text-white">
                <BsFillSendFill />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NewsLater;
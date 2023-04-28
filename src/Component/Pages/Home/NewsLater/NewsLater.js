import React from 'react';
import { BsFillSendFill } from "react-icons/bs";

const NewsLater = () => {
    return (
      <div className="bg-[#E9E9EA] h-[182px]">
        <div className="md:flex block text-center justify-center gap-4 items-center h-full">
          <div>
            <h2 className="text-xl interBold md:pt-0 pt-[50px]">Newsletter</h2>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Your email"
              className="rounded-full w-[250px]  h-[50px] px-3 md:ml-0 ml-[35px] relative"
            />
          </div>
          <div className="bg-[#F36E21] rounded-full absolute md:ml-[300px] ml-[240px] md:mt-0 mt-[-40px]">
            <p className="p-2 text-white">
              <BsFillSendFill />
            </p>
          </div>
        </div>
      </div>
    );
};

export default NewsLater;
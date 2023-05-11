import React from 'react';
import review from '../../../../asete/review/Group.png'

const Review = () => {
    return (
      <div className="my-14 w-full  flex justify-center">
       <div className="">
       <div className="text-center xl:text-[52px] xl:leading-[60px] text-3xl mb-16 ">
          <h2 className="sansBold">Our Testimonials </h2>
          <p className="sansReg">
            What Our Clients Are <span className="relative z-[1]">Saying</span>
          </p>
          <div className="bg-[#F36E21] xl:w-[145px] w-[90px] xl:h-[12px] h-[8px] text-center absolute ml-[1110px] xl:mt-[-16px] mt-[-11px]"></div>
        </div>
        <div className="lg:flex block items-center xl:gap-[105px] gap-8 lg:px-0 md:px-8 px-4  lg:overflow-hidden xl:h-[380px] lg:h-[240px]">
          <div className="shadow-2xl xl:w-[845px] lg:w-[640px] w-full p-8 xl:h-[240px] lg:h-[200px] md:h-[180px] h-full text-center relative opacity-100 xl:ml-[-395px] lg:ml-[-450px] ">
            <p className="text-[16px] font-medium interReg xl:mt-10">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s
            </p>
            <h2 className="mt-2 hindVad font-semibold text-[16px] text-[#1B2551]">
              <span className="text-[#F36E21] ">-</span> LOREM IPSUM
            </h2>
            <div>
              <img
                className="absolute top-0 right-0 h-[40px] mt-[-20px]"
                src={review}
                alt="img"
              />
            </div>
          </div>
          <div className="shadow-2xl xl:w-[845px] lg:w-[640px] w-full p-8 xl:h-[240px] lg:h-[200px] md:h-[180px] h-full text-center relative opacity-100 lg:my-0 my-10">
            <p className="text-[16px] font-medium interReg xl:mt-10">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s
            </p>
            <h2 className="mt-2 hindVad font-semibold text-[16px] text-[#1B2551]">
              <span className="text-[#F36E21]">-</span> LOREM IPSUM
            </h2>
            <div>
              <img
                className="absolute top-0 right-0 h-[40px] mt-[-20px]"
                src={review}
                alt=""
              />
            </div>
          </div>
          <div className="shadow-2xl xl:w-[845px] lg:w-[640px] w-full p-8 xl:h-[240px] lg:h-[200px] md:h-[180px] h-full text-center relative opacity-100 xl:mr-[-455px] mr-[-480px]">
            <p className="text-[16px] font-medium interReg xl:mt-10">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s
            </p>
            <h2 className="mt-2 hindVad font-semibold text-[16px] text-[#1B2551]">
              <span className="text-[#F36E21] ">-</span> LOREM IPSUM
            </h2>
            <div>
              <img
                className="absolute top-0 right-0 h-[40px] mt-[-20px]"
                src={review}
                alt=""
              />
            </div>
          </div>
        </div>
       </div>
      </div>
    );
};

export default Review;
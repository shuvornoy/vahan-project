import React from 'react';
import review from '../../../asete/review/Group.png'

const Review = () => {
    return (
      <div className="my-14 max-w-7xl mx-auto">
        <div className="text-center text-3xl mb-16">
          <h2 className="font-bold">Our Testimonials </h2>
          <p>
            What Our Clients Are <span className="relative z-[1]">Saying</span>
          </p>
          <div className="bg-[#F36E21] w-[90px] h-[8px] text-center absolute xl:ml-[739px] lg:ml-[610px] md:ml-[482px] ml-[115px] mt-[-11px]"></div>
        </div>
        <div className="lg:flex block items-center gap-8 lg:px-0 md:px-8 px-4 lg:overflow-hidden  lg:h-[240px]">
          <div className="shadow-2xl lg:w-[640px] w-full p-8 lg:h-[200px] md:h-[180px] h-full text-center relative opacity-100 xl:ml-[-290px] lg:ml-[-450px]">
            <p className="text-[16px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s
            </p>
            <h2 className="mt-2 font-bold">- LOREM IPSUM</h2>
            <div>
              <img
                className="absolute top-0 right-0 h-[40px] mt-[-20px]"
                src={review}
                alt=""
              />
            </div>
          </div>
          <div className="shadow-2xl lg:w-[640px] w-full p-8 lg:h-[200px] md:h-[180px] h-full text-center relative opacity-100 lg:my-0 my-10">
            <p className="text-[16px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s
            </p>
            <h2 className="mt-2 font-bold">- LOREM IPSUM</h2>
            <div>
              <img
                className="absolute top-0 right-0 h-[40px] mt-[-20px]"
                src={review}
                alt=""
              />
            </div>
          </div>
          <div className="shadow-2xl lg:w-[640px] w-full p-8 lg:h-[200px] md:h-[180px] h-full text-center relative opacity-100 mr-[-480px]">
            <p className="text-[16px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s
            </p>
            <h2 className="mt-2 font-bold">- LOREM IPSUM</h2>
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
    );
};

export default Review;
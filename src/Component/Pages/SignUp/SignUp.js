import React from 'react';
import '../Home/Banner/Banner.css'

const SignUp = () => {
    return (
      <div className="xl:w-[508px] xl:mt-12 lg:w-[316px] md:w-[300px] w-[100%] xl:h-[513px] lg:h-[450px] md:h-[400px]  h-[450px]  bg-white rounded flex justify-center items-center md:mt-0 mt-8">
        <div className=" w-full mx-auto ">
          <h2 className="lg:text-[30px] text-[24px] text-center font-[700]">
            Sign Up at Vahan +
          </h2>
          <form className='xl:ml-5 lg:ml-1 ml-[22px] mt-5'>
          <input
            type="text"
            placeholder="Your Full Name"
            className="input input-bordered xl:w-[433px] lg:w-[276px] w-[250px]  lg:h-[59px] md:h-[46px] xl:ml-[15px] lg:ml-[10px] font-[400] text-[18px] "
          />
          <input
            type="text"
            placeholder="Your Phone Number"
            className="input input-bordered  xl:w-[433px] lg:w-[276px] w-[250px] lg:h-[59px] md:h-[46px] xl:ml-[15px] lg:ml-[10px]  my-2 font-[400] text-[18px] mt-[14px] "
          />
          <input
            type="text"
            placeholder="Your Email Address"
            className="input input-bordered  xl:w-[433px] lg:w-[276px] w-[250px] lg:h-[59px] md:h-[46px] xl:ml-[15px] lg:ml-[10px] font-[400] text-[18px] mt-1"
          />
          <div className="md:flex block  gap-4 lg:ml-[15px]  mt-[14px]">
            <input
              type="text"
              placeholder="Your City"
              className="margin input input-bordered xl:w-[209px] lg:w-[128px] md:w-[115px] w-[250px] xl:h-[59px] lg:h-[59px] h-[46px] font-[400] text-[18px]"
            />
            <input
              type="text"
              placeholder="Code"
              className="input input-bordered xl:w-[209px] lg:w-[128px] md:w-[115px] w-[250px] xl:h-[59px] lg:h-[59px] h-[46px]  font-[400] text-[18px] lg:mr-4"
            />
          </div>
          <button className="bg-[#f36e21] xl:w-[433px] lg:w-[280px] w-[235px]  lg:ml-[15px] ml-[6px] md:ml-2  h-[50px] xl:h-[58px] text-white font-[700] lg:text-[18px] text-[14px] mt-[18px] rounded">
            PROCEED TO CONTINUE
          </button>
          </form>
        </div>
      </div>
    );
};

export default SignUp;
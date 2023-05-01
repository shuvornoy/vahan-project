import React from 'react';
import '../Home/Banner/Banner.css'

const SignUp = () => {
    return (
      <div className="xl:w-[340px] lg:w-[306px] md:w-[264px] w-[100%] xl:h-[350px] lg:h-[300px] md:h-[280px] h-[320px] bg-white rounded flex justify-center items-center md:mt-0 mt-8 main-box">
        <div className=" w-full mx-auto text p-2">
          <h2 className="lg:text-[30px] md:text-[20px] text-center font-[700] pt-3">
            Sign Up at Vahan +
          </h2>
          <input
            type="text"
            placeholder="Your Full Name"
            className="input input-bordered xl:w-[300px] lg:w-[276px] md:w-[250px] w-[100%] h-[35px] xl:ml-[15px] lg:ml-[10px] font-[400] text-[18px] mt-2"
          />
          <input
            type="text"
            placeholder="Your Phone Number"
            className="input input-bordered  xl:w-[300px] lg:w-[276px] md:w-[250px] w-[100%] h-[35px] xl:ml-[15px] lg:ml-[10px]  my-2 font-[400] text-[18px] "
          />
          <input
            type="text"
            placeholder="Your Email Address"
            className="input input-bordered  xl:w-[300px] lg:w-[276px] md:w-[250px] w-[100%] h-[35px] xl:ml-[15px] lg:ml-[10px] font-[400] text-[18px]"
          />
          <div className="md:flex block justify-center gap-4 lg:ml-[15px]  mt-2">
            <input
              type="text"
              placeholder="Your City"
              className="input input-bordered xl:w-[140px] lg:w-[120px] md:w-[100px] w-full xl:h-[35px] lg:h-[35px] md:h-[30px] h-[30px] font-[400] text-[18px]"
            />
            <input
              type="text"
              placeholder="Code"
              className="input input-bordered xl:w-[140px] lg:w-[120px] md:w-[105px] w-[100%] xl:h-[35px] lg:h-[35px] md:h-[30px] h-[30px] font-[400] text-[18px] lg:mr-4"
            />
          </div>
          <button className="bg-[#f36e21] lg:w-[90%] md:w-[94%] w-[96%] lg:ml-[15px] ml-[6px] md:ml-2 mt-2 md:h-[50px] h-[30px] text-white font-[700] lg:text-[18px] text-[14px] px-4 mb-8">
            PROCEED TO CONTINUE
          </button>
        </div>
      </div>
    );
};

export default SignUp;
import React from 'react';
import '../Home/Banner/Banner.css'
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
      <div className="xl:w-[340px] lg:w-[315px] md:w-[380px] w-[100%] xl:h-[350px] lg:h-[300px] md:h-[300px] h-[320px] bg-white rounded flex justify-center items-center md:mt-0 mt-8 main-box">
        <div className=" w-full mx-auto text p-2 text-center">
          <h2 className="lg:text-[30px] md:text-[20px] text-[18px] text-center font-[700] pt-3">
            Sign In to Continue
          </h2>
          <p className="lg:text-[16px] md:text-[14px] text-[13px] font-medium sansReg">
            Lorem ipsum dolor sit amet, consectetu <br /> adipiscing elit, sed
            diam
          </p>
          <Link to="/main/home">
            {" "}
            <button className="btn w-full py-3 bg-[#465A95] hover:bg-[#465A95] border-none mb-2 mt-8 font-bold lg:text-[16px] md:text-[14] text-[15px] ">
              Continue with Facebook
            </button>
          </Link>
          <Link to="/main/home">
            <button className="btn w-full py-3 bg-[#F8F8F8] hover:bg-[#F8F8F8] border-none text-black shadow-xl font-bold lg:text-[16px] md:text-[14] text-[15px]">
              Continue with Google
            </button>
          </Link>
          <div>
            <p className="text-center lg:text-[16px] md:text-[12px] text-[14px] font-bold mt-4">
              Don’t have account? Please
              <Link to="/main/signup" className="text-[#F36E21]">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      //   <div className="hero min-h-screen bg-base-200 px-1 md:px-0">
      //     <div className="card lg:w-[754px] md:w-[600px] w-full shadow-2xl bg-base-100 xl:px-[30px] lg:px-[24px] px-2 xl:py-16 lg:py-[8px] py-2">
      //       <div className="card-body text-center">
      //         <h2 className="lg:text-[53px] md:text-[48px] text-[24px] font-bold sansBold">
      //           Sign In to Continue
      //         </h2>
      //         <p className="md:text-[24px] text-[13px] font-medium sansReg">
      //           Lorem ipsum dolor sit amet, consectetu <br /> adipiscing elit, sed
      //           diam
      //         </p>
      //   <Link to="/main/home">
      //     {" "}
      //     <button className="btn bg-[#465A95] hover:bg-[#465A95] border-none mb-4 mt-8 font-bold lg:text-[20px] md:text-[18] text-[15px] lg:h-[75px] md:h-[60px] h-[10px]">
      //       Continue with Facebook
      //     </button>
      //   </Link>
      //   <Link to="/main/home">
      //     <button className="btn bg-[#F8F8F8] hover:bg-[#F8F8F8] border-none text-black shadow-xl font-bold lg:text-[22px] md:text-[18] text-[15px] lg:h-[75px] md:h-[75px] h-[80px]">
      //       Continue with Google
      //     </button>
      //   </Link>
      //   <div>
      //     <p className="text-center md:text-[20px] text-[14px] font-bold mt-4">
      //       Don’t have account? Please
      //       <Link to="/main/signup" className="text-[#F36E21]">
      //         Sign up
      //       </Link>
      //     </p>
      //   </div>
      //       </div>
      //     </div>
      //   </div>
    );
};

export default LogIn;
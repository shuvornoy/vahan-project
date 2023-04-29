import React from 'react';
import logo from '../../asete/logo/Layer_1.png'

const Loading = () => {
    return (
      <div className="pre-loading-bg min-h-screen flex justify-center items-center">
        <div className="">
          <img
            loading="lazy"
            className="lg:h-[50px] md:h-[30px] h-[20px]"
            src={logo}
            alt="logo"
          ></img>
          <div className="lg:h-[20px] md:h-[20px] h-[15px] mx-auto loader"></div>
        </div>
      </div>
    );
};

export default Loading;
import React from 'react';

const Count = () => {
    return (
      <div className="bg-[#E9E9EA] lg:my-20 my-10 py-8">
        <div className="md:flex block justify-around items-center max-w-7xl mx-auto md:h-[220px] h-full">
          <div>
            <h2 className="text-5xl sansBold text-center">100K+</h2>
            <p className="font-semibold text-center sansReg">Cars Listed On Vahan+</p>
          </div>
          <div>
            <h2 className="text-5xl sansBold text-center">80K+</h2>
            <p className="font-semibold text-center sansReg">Trusted Users of Vahan+</p>
          </div>
          <div>
            <h2 className="text-5xl sansBold text-center">2M+</h2>
            <p className="font-semibold text-center sansReg">Vahan+ Downloads</p>
          </div>
          <div>
            <h2 className="text-5xl sansBold text-center">3+</h2>
            <p className="font-semibold text-center sansReg">Serving from 3 Years</p>
          </div>
        </div>
      </div>
    );
};

export default Count;
import React from 'react';

const Count = () => {
    return (
      <div className="bg-[#E9E9EA] my-8">
        <div className="md:flex block justify-around items-center max-w-7xl mx-auto md:h-[220px] h-full">
          <div>
            <h2 className="text-5xl font-bold text-center">100K+</h2>
            <p className="font-semibold text-center">Cars Listed On Vahan+</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-center">80K+</h2>
            <p className="font-semibold text-center">Trusted Users of Vahan+</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-center">2M+</h2>
            <p className="font-semibold text-center">Vahan+ Downloads</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-center">3+</h2>
            <p className="font-semibold text-center">Serving from 3 Years</p>
          </div>
        </div>
      </div>
    );
};

export default Count;
import React from 'react';
import features from '../../../asete/features/FEATURES.png'
import img from '../../../asete/features/1.png'
import img1 from '../../../asete/features/2.png'
import img2 from '../../../asete/features/3.png'

const Features = () => {
    return (
      <div className="max-w-7xl mx-auto my-8">
        <h2 className="lg:text-3xl md:text-2xl xl font-bold text-center my-8">
          Vahan+ Features
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 absolute gap-14 z-[1]">
          <div className="card w-96 bg-[#ffffffd9] shadow-xl">
            <figure>
              <img className="w-[100%]" src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Fuel Management</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-[#ffffffd9] shadow-xl">
            <figure>
              <img className="w-[100%]" src={img1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Car Wash</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.{" "}
              </p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-[#ffffffd9] shadow-xl">
            <figure>
              <img className="w-[100%]" src={img2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Know your Vahan</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.{" "}
              </p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            className="relative top-0 mt-[375px] h-[170px] "
            src={features}
            alt=""
          />
        </div>
      </div>
    );
};

export default Features;
import React from "react";
import circleimg from "../assets/circle.png";

const Home = () => {
  return (
    <>
      <div className="px-7 md:px-10 my-14 bg-[#1a1a29]">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          {/* texts */}
          <div>
            <div className="text-white">
              <h6 className="text-3xl mt-12">Hello, I'm</h6>
              <h1 className="font-semibold tex-3xl md:text-5xl my-4">
                Biplov Acharya
              </h1>
              <p className="md:w-96">
                Front End developer specilizing in React and Next js
              </p>
            </div>
            {/* buttons */}
            <div className="mt-5">
              <button className="btn bg-yellow-400 py-2 px-4 text-white rounded hover:bg-white hover:text-black transition-all duration-500">
                About me
              </button>
              <button className="btn  px-6 py-1.5 rounded outline text-yellow-400 ml-5">
                Projects
              </button>
            </div>
          </div>
          {/* img
           */}
          <div className="order-first md:order-last relative w-96">
            <img src={circleimg} alt="" />
          </div>
        </div>
        {/* divider */}
        <div className="mt-10 w-full h-12 bg-[#181824] mx-auto absolute left-0 hidden md:block"></div>
      </div>
    </>
  );
};

export default Home;

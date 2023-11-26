import React from "react";
import Upper from "../Shades/Upper";
import Lower from "../Shades/Lower";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full gap-4  relative">
      <Upper />
      <Lower />

      <h1 className="md:text-7xl text-4xl text-purple-600 font-extrabold lg:mt-10 lg:pt-6 tracking-wider ">
        IncomeInsider
      </h1>
      <p className="text-center text-4xl text-cyan-500 font-semibold">
        Decoding Salaries, Elevating Careers.
      </p>

      <div className="flex lg:flex-row flex-col w-[20%] gap-2 justify-between items-center py-4">
        <button
          onClick={() => {
            window.location.href = "/signup";
          }}
          className="bg-purple-400 text-white rounded-full p-2 w-28 shadow-lg hover:text-black hover:bg-gray-300"
        >
          Sign-up
        </button>
        <button 
         onClick={() => {
            window.location.href = "/login";
          }}
         
        className="rounded-full bg-purple-400 text-white p-2 lg:mb-0 mb-20 w-28 shadow-lg hover:text-black hover:bg-gray-300">
          Sign-in
        </button>
      </div>

      <img
        src="pic1.jpg"
        alt="logo"
        className="lg:w-1/2 lg:pt-10 w-full lg:relative absolute lg:bottom-0 bottom-0"
      />
    </div>
  );
};

export default Landing;

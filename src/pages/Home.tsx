import React from "react";
import Navbar from "./Navbar";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Navbar />
        <div
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: 'url(/Hero_section.png)' }}
        >
          <div className="flex flex-col items-center justify-center pt-[10%] h-full bg-black bg-opacity-50 text-center text-white">
            <p className="text-xl pb-4 font-thin">Smart Lighting Solutions</p>
            <h1 className="text-2xl px-12 mb-4 text-slate-500 sm:xl w-full md:text-3xl lg:text-4xl leading-7">
              <span className="block mb-3">Bringing A New Perspective to Street Lights</span>
              <span>And the Cities of Tomorrow.</span>
            </h1>
            <button className="mt-3 p-2 px-10 bg-blue-600 rounded-sm hover:bg-blue-400">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

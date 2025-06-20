import React from "react";
import { images } from "./images";
function Stack() {
  return (
    <div className=" bg-stone-800 min-h-screen w-full">
      <div className="flex flex-col  justify-center items-center min-h-screen ">
        <h2 className="mb-16 text-[#E7DED5] font-bold sm:text-8xl text-7xl ">
          My Stacks
        </h2>
        <div className=" grid grid-cols-3 sm:grid-cols-4 gap-2">
          {images.map((ig, index) => (
            <div
              key={index}
              className=" border-1 border-[#504c48] rounded-lg w-25 lg:w-40  lg:h-26 h-18 flex flex-col justify-center items-center"
            >
              <img src={ig.img} className="w-10 md:15 lg:w-18 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stack;

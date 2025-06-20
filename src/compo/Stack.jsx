import React from "react";
import { images } from "./images";
function Stack() {
  return (
    <div className=" bg-stone-800 min-h-screen w-full">
      <div className="flex flex-col  justify-center items-center min-h-screen ">
        <h2 className="mb-8 text-[#E7DED5] text-8xl ">My Stacks</h2>
        <div className=" grid grid-rows-2 grid-cols-4 gap-2">
          {images.map((ig, index) => (
            <div
              key={index}
              className=" border-1 border-[#504c48] rounded-lg w-40 h-35 flex flex-col justify-center items-center"
            >
              <img src={ig.img} className="w-20" />
              <p className="text-[#E7DED5] font-semibold ">{ig.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stack;

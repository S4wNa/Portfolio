import React from "react";
import { proj } from "./pro";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Project() {
  return (
    <div className="bg-[#CBBDA3] w-full lg:h-[80vh] md:h-[110vh] xl:h-[70vh] ">
      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-7xl text-stone-800 my-16 font-bold">Projects</h2>
        <div className="grid lg:gap-24 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {" "}
          {proj.map((it) => (
            <div>
              <a href={`${it.link}`} target="_blank" rel="noopener noreferrer">
                <div
                  className="w-70 h-50 bg-cover bg-center opacity-70 rounded-md transform transition-all duration-500 ease-out hover:scale-125"
                  style={{ backgroundImage: `url(${it.imgUrl})` }}
                ></div>
              </a>

              <p className="w-70 my-8 font-semibold text-stone-800">
                <span className="font-spe">Note : </span> {it.text}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-[#E7DED5] w-full h-40 sm:order-3 order-4  flex flex-col justify-center items-center">
          <div className="flex justify-evenly items-center w-full text-stone-800 my-4 sm:my-8 text-4xl md:text-5xl ">
            <a
              href="https://github.com/S4wNa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/s4w_na/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer" />
            </a>
            <a
              href="https://x.com/S4w_na"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="cursor-pointer" />
            </a>
          </div>
          <p className="text-stone-800 font-semibold text-xl sm-text-2xl">
            mahirahman829@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;

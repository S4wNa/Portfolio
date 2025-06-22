import React, { useRef } from "react";
import "../index.css";
//  Magic Component
import { IconCloud } from "@/components/magicui/icon-cloud";
//social icons
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
//social icons
//images
import { images } from "./images";
import barc from "../assets/barcelona.jpg";
//images
// GSAP Effect
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function First() {
  let spText2 = useRef();
  let spText3 = useRef();
  useGSAP(() => {
    // Petit délai pour s'assurer que les polices sont chargées
    gsap.delayedCall(0.1, () => {
      const split2 = new SplitText(spText2.current, { type: "chars" });
      gsap.from(split2.chars, { y: 100, autoAlpha: 0, stagger: 0.04 });

      const split3 = new SplitText(spText3.current, { type: "chars" });
      gsap.from(split3.chars, { y: 100, autoAlpha: 0, stagger: 0.04 });
    });
  }, []);

  return (
    <div className=" min-h-screen font-display bg-[#E7DED5] relative overflow-hidden w-full ">
      <div className="flex justify-center  items-center min-h-screen md:p-10 lg:p-0 sm:p-10 p-10 ">
        <div className="grid sm:grid-cols-2 gap-4 grid-cols-1 ">
          <div className=" sm:order-1 flex flex-col sm:flex-row md:flex-col order-2 ">
            <img
              src={barc}
              alt="phtot of me in vacation"
              className="   lg:w-full lg:h-75 md:h-65 rounded-md  mt-auto w-full xl "
            />
          </div>
          <div
            className="bg-[#9C8068] w-full sm:h-70 h-30 sm:order-3 order-4 flex flex-col
           rounded-md justify-center items-center text-stone-800"
          >
            <div className="text-4xl text-center font-bold hidden md:block">
              Socials
            </div>
            <div className="flex justify-evenly items-center w-full  my-4 sm:my-8 text-4xl md:text-5xl ">
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
                rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer" />
              </a>
              <a 
                href="https://x.com/S4w_na" 
                target="_blank" 
                rel="noopener noreferrer">
                <FaXTwitter className="cursor-pointer" />
              </a>
            </div>
            <p className="text-stone-800 font-semibold text-xl sm-text-2xl">
              mahirahman829@gmail.com
            </p>
          </div>
          <div
            className="bg-[#CBBDA3]  w-full lg:h-87 md:h-80 sm:h-70 sm:order-2
           rounded-md lg:pr-2 lg:pb-2 md:pl-4 pl-2 h-65"
          >
            <div
              className=" lg:text-8xl lg:w-105 md:text-7xl md:w-80 font-bold lg:mb-0
            mb-4 sm:text-5xl sm:w-55 sm:mt-6 lg:mt-0 text-6xl order-1 w-70 text-stone-800 "
            >
              Hey there, I'm Mahi
            </div>
            <div className=" font-medium text-stone-800" ref={spText2}>
              I am a <span className="font-spe text-white"> Self taught </span>{" "}
              Developer
            </div>
            <div ref={spText3} className=" text-stone-800 font-medium ">
              Based in Paris
            </div>
          </div>
          <div className="bg-white w-full h-70  flex justify-center items-center order-3 sm:order-4 rounded-md">
            <IconCloud images={images.map((img) => img.img)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;

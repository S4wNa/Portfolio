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
    <div className=" min-h-screen w-full  font-display bg-[#E7DED5] relative overflow-hidden">
      <div className="flex flex-col md:flex-row  justify-center items-center w-full">
        <div className=" flex flex-col max-w-4xl order-2 md:order-1">
          <img
            src={barc}
            alt="phtot of me in vacation"
            className="  md:w-[300px] lg:w-[500px] min-w-60 md:mt-25 rounded-md m-2 w-90"
          />
          <div className="flex flex-col justify-center items-center bg-[#9C8068]  h-[43vh] rounded-md m-2">
            <div className="text-4xl">Socials</div>
            <div className="flex  text-4xl md:text-6xl justify-evenly items-center w-full my-8">
              <FaGithub className="cursor-pointer" />

              <FaInstagram className="cursor-pointer" />

              <FaXTwitter className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 ">
          <div className="bg-[#CBBDA3] rounded-md m-2 xl:w-[600px] lg:w-[450px] md:w-[400px] p-2 lg:mt-24 md:mt-16 xl:mt-1 w-90">
            <div
              className="text xl:text-9xl lg:text-8xl md:text-7xl text-6xl
            font-bold  inline-block  xl:w-[600px] lg:w-[450px] md:w-[320px]  "
            >
              Hey there, I'm Mahi
            </div>
            <div
              className=" max-w-lg text-xl lg:text-3xl font-lg "
              ref={spText2}
            >
              I am a <span className="font-spe text-white "> Self taught </span>{" "}
              Developer
            </div>
            <div
              ref={spText3}
              className="text max-w-lg text-xl xl:text-3xl  font-lg   "
            >
              Based in Paris
            </div>
          </div>

          <div className="relative flex flex-col items-center xl:h-100 lg:w-110 md:h-100  md:w-100 xl:w-150  justify-center  rounded-md m-2 h-80 bg-white w-90 ">
            <IconCloud images={images.map((img) => img.img)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;

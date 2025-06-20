import React, { useRef } from "react";
import First from "../compo/First";
import Stack from "../compo/Stack";
import Project from "../compo/Project";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

function Home() {
  const firstSection = useRef();
  const stackSection = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stackSection.current,
        start: "top bottom",
        end: "top top",
        pin: firstSection.current,
        pinSpacing: false,
        scrub: 1,
      },
    });

    tl.to(firstSection.current, {
      scale: 0.9,
      opacity: 0.7,
    });
  }, []);

  return (
    <div>
      <div ref={firstSection}>
        <First />
      </div>
      <div ref={stackSection} className="relative z-10">
        <Stack />
      </div>
      <Project />
    </div>
  );
}
export default Home;

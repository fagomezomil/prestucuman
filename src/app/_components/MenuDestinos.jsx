import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LogoHistorica from "../images/historicalogo.svg";
import LogoYungas from "../images/yungaslogo.svg";
import LogoSur from "../images/surlogo.svg";
import LogoChoromoro from "../images/choromorologo.svg";
import LogoCalchaqui from "../images/calchaquilogo.svg";
import Image from "next/image";

const logos = {
  LogoHistorica,
  LogoYungas,
  LogoSur,
  LogoChoromoro,
  LogoCalchaqui,
};

export default function MenuDestinos() {
  const logosRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    logosRefs.current.forEach((ref, index) => {
      const timeline = gsap.timeline();
      timeline.to(ref, {
        duration: 2,
        x: -300,
        ease: "power2.inOut",
        delay: index * 0.5,
        opacity: 1,
        scrub: 1,
      });

      ScrollTrigger.create({
        trigger: ref,
        start: "bottom 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to(ref, { opacity: 0, duration: 1 });
        },
        onLeave: () => {
          gsap.to(ref, { delay: 2, opacity: 1, duration: 3 });
        },
      });
    });
  }, []);

  return (
    <nav className="absolute bottom-10 h-[100px] z-50 flex flex-row gap-8 mr-24 translate-x-[300px]">
      <div className="flex flex-row gap-8">
        {Object.values(logos).map((logo, index) => (
          <button
            ref={(ref) => (logosRefs.current[index] = ref)}
            key={index}
            className=" opacity-0"
            onClick={() => {
              console.log(logos);
            }}
          >
            <Image src={logo} alt={`Logo ${index}`} priority />
          </button>
        ))}
      </div>
    </nav>
  );
}

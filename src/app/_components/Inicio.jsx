"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Montana from "../images/montana.svg";
import TucumanLogo from "../images/tucumanlogo.svg";
import Casah from "../images/casahistorica.svg";
import TexturaCalchaqui from "../images/textura-calchaqui.svg";
import Image from "next/image";
import { useEffect } from "react";

export default function Inicio() {
  const montanaRef = useRef(null);
  const containerRef = useRef(null);
  const tucumanLogoRef = useRef(null);
  const circuloRef = useRef(null);
  const casahRef = useRef(null);
  const texturaCalRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            // start: "top 80%",
            // end: "bottom 20%",
            start: "top 20%",
            end: "bottom 80%",
            markers: true,
            scrub: 1,
          },
        });
        scrollTl.to(tucumanLogoRef.current, {});
        scrollTl.to(circuloRef.current, {
          delay: 1,
          duration: 2,
          y: -850,
        });
        scrollTl.to(casahRef.current, {
          delay: 1,
          y: 600,
        });
        // scrollTl.to(texturaCalRef.current, {
        //   opacity: 1
        // })
        scrollTl.to(montanaRef.current, {
          duration: 2,
          y: -1000,
        });
      },
    });
    tl.to(montanaRef.current, {
      y: -450,
      duration: 1,
      ease: "power2.inOut",
    });
    tl.to(tucumanLogoRef.current, {
      y: -900,
      scale: 1.5,
      ease: "power2.inOut",
    });
    tl.to(circuloRef.current, {
      y: -780,
    });
    tl.to(casahRef.current, {
      y: -580,
      scale: 1,
      ease: "power2.inOut",
    });
    tl.to(texturaCalRef.current, {
      scale: 1.8,
      opacity: 0.1,
    });
  }, []);
  return (
    <div
      ref={containerRef}
      className="bg-[#D6E9CF] -z-20 h-screen overflow-hidden flex items-end justify-center relative"
    >
      <Image
        ref={texturaCalRef}
        src={TexturaCalchaqui}
        alt="Logo"
        priority
        className="absolute top -z-10 opacity-10 h-screen "
      />
      <div>
        <div
          ref={montanaRef}
          className="z-10 absolute bottom-[-1500px] left-0 w-full "
        >
          <Image src={Montana} alt="Logo" className="w-screen" priority />
        </div>
      </div>
      <svg
        ref={circuloRef}
        width="500"
        height="500"
        className="absolute bottom-[-600px] -right-14"
      >
        <circle cx="250" cy="250" r="250" fill="#db5723" className="bg-[]" />
      </svg>
        
      <Image
        ref={tucumanLogoRef}
        src={TucumanLogo}
        alt="Logo"
        priority
        className="absolute -z-10 bottom-[-400px]"
      />
      <Image
        ref={casahRef}
        src={Casah}
        alt="Logo"
        priority
        className="absolute bottom-[-600px] -left-36 z-30"
      />
    </div>
  );
}

"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Montana from "../images/montana.svg";
import TucumanLogo from "../images/tucumanlogo.svg";
import Tienetodo from "../images/tienetodo.svg";
import Casah from "../images/casahistorica.svg";
import TexturaCalchaqui from "../images/textura-calchaqui.svg";

import Image from "next/image";
import { useEffect } from "react";

import LogoHistorica from "../images/historicalogo.svg";
import LogoYungas from "../images/yungaslogo.svg";
import LogoSur from "../images/surlogo.svg";
import LogoChoromoro from "../images/choromorologo.svg";
import LogoCalchaqui from "../images/calchaquilogo.svg";
import LogoGobTuc from "../images/logogobtuc.svg";
import MenuDestinos from "./MenuDestinos";

export default function Inicio() {
  const montanaRef = useRef(null);
  const containerRef = useRef(null);
  const tucumanLogoRef = useRef(null);
  const circuloRef = useRef(null);
  const casahRef = useRef(null);
  const texturaCalRef = useRef(null);
  const tieneTodoRef = useRef(null);
  const logoGobRef = useRef(null);
  const logosRef = useRef(null);
  const menuDestinosRef = useRef(null);

  const logos = {
    LogoHistorica,
    LogoYungas,
    LogoSur,
    LogoChoromoro,
    LogoCalchaqui,
  };

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
        scrollTl.to(tucumanLogoRef.current, {
          // duration: 2,
          // y: -1200,
        });
        scrollTl.to(circuloRef.current, {
          delay: 1,
          duration: 2,
          y: -780,
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
        scrollTl.to(menuDestinosRef.current, {
          duration: 2,
          opacity: 1,
        })
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
    tl.to(tieneTodoRef.current, {
      duration: 1,
      y: -550,
    });
    tl.to(texturaCalRef.current, {
      duration: 0.7,
      y: -100,
      scale: 2,
      opacity: 0.1,
    });
    tl.to(circuloRef.current, {
      y: -780,
    });
    tl.to(casahRef.current, {
      y: -580,
      scale: 1,
      ease: "power2.inOut",
    });
    tl.to(logoGobRef.current, {
      opacity: 1,
    });
    
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#D6E9CF] h-screen overflow-hidden flex items-end justify-center relative shadow-xl"
    >
      <Image
        ref={texturaCalRef}
        src={TexturaCalchaqui}
        alt="Logo"
        priority
        className="z-10 opacity-0 absolute bottom-0 blur-[1px]"
      />
      <Image
        ref={logoGobRef}
        src={LogoGobTuc}
        alt="Logo"
        priority
        className="z-10 absolute left-0 top-0 h-[100px] opacity-0 mt-10"
      />
      <div>
        <MenuDestinos ref={menuDestinosRef} className="opacity-100"/>
        {/* <nav className="absolute bottom-10 h-[100px] z-50 flex flex-row gap-8 mr-24">
          {Object.values(logos).map((logo, index) => (
            <button key={index} className="h-[100px]" onClick={() => { console.log(logos) }}>
              <Image src={logo} alt={`Logo ${index}`} priority />
            </button>
          ))}
        </nav> */}
        <div
          ref={montanaRef}
          className="z-20 absolute bottom-[-1500px] left-0 w-full "
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
        <circle cx="250" cy="250" r="250" fill="#ED7219" className="bg-[]" />
      </svg>

      <Image
        ref={tucumanLogoRef}
        src={TucumanLogo}
        alt="Logo"
        priority
        className="absolute z-10 bottom-[-400px]"
      />
      <Image
        src={Tienetodo}
        ref={tieneTodoRef}
        alt="tiene todo"
        priority
        className="absolute bottom-[-150px] z-10"
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

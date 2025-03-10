import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LogoHistorica from "../images/historicalogo.svg";
import LogoYungas from "../images/yungaslogo.svg";
import LogoSur from "../images/surlogo.svg";
import LogoChoromoro from "../images/choromorologo.svg";
import LogoCalchaqui from "../images/calchaquilogo.svg";
import Image from "next/image";
import { FaChevronCircleRight } from "react-icons/fa";


export default function MenuDestinos({ logos, imgInicio, setImgInicio }) {
  const logosRefs = useRef([]);
  const textoRef = useRef(null);



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

    // Agregar animación al texto
    gsap.to(textoRef.current, {
      duration: 2,
      opacity: 1,
      delay: 1,
      ease: "power2.inOut",
    });

    ScrollTrigger.create({
      trigger: textoRef.current,
      start: "bottom 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(textoRef.current, { opacity: 0, duration: 1 });
      },
      onLeave: () => {
        gsap.to(textoRef.current, { delay: 2, opacity: 1, duration: 3 });
      },
    });
  }, []);

  return (
    <nav className="absolute bottom-10 h-[100px] z-50 flex flex-row items-center gap-8 mr-24 translate-x-[300px] font-sofiacond">
      <div  ref={textoRef} className="absolute py-2 px-4 flex flex-row items-center border border-white rounded-md -left-[580px] opacity-0" >
        <p className="text-[30px] leading-7 font-400 text-white pr-4">Elegí tu destino y <br /> planifica tu viaje</p>
        <FaChevronCircleRight className="text-white text-[40px]" />
      </div>
      <div className="flex flex-row gap-8">
        {Object.values(logos).map((logo, index) => (
          <button
            ref={(ref) => (logosRefs.current[index] = ref)}
            key={index}
            className=" opacity-0"
            onClick={() => {
              setImgInicio(logo.img);
              console.log(imgInicio)
            }}
          >
            <Image src={logo.logo} alt={`Logo ${index}`} priority />
          </button>
        ))}
      </div>
    </nav>
  );
}

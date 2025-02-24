"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Montana from "../images/montana.svg";
import TucumanLogo from "../images/tucumanlogo.svg";
import TexturaCalchaqui from "../images/textura-calchaqui.svg";
import Image from "next/image";
import { useEffect } from "react";

export default function Inicio() {
  const montanaRef = useRef(null);
  const containerRef = useRef(null);
  const tucumanLogoRef = useRef(null);
  const circuloRef = useRef(null);
  const texturaCalRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "70% 45%",

            markers: true,
            scrub: 1,
          },
        })
        scrollTl.to(montanaRef.current, {
          duration: 3,
          y: -1000
        })
      }
      // onComplete: () => {
      //   const scrollTl = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: containerRef.current,
      //       start: "bottom 80%",
      //       end: "20% 20%",
      //       markers: true,
      //       scrub: 1,
      //     },
      //   });
      //   scrollTl.to(montanaRef.current, {
      //     y: -1000,
      //     duration: 1,
      //     ease: "power2.inOut",
      //   });
      //   scrollTl.to(tucumanLogoRef.current, {
      //     duration: 1,
      //     y: -1500,
      //     scale: 2,
      //     ease: "power2.inOut",
      //   });
      //   scrollTl.to(circuloRef.current, {
      //     y: -1200,
      //   });
      // },
    });
    tl.to(montanaRef.current, {
      y: -100,
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

    // if (montanaRef.current && tucumanLogoRef.current && circuloRef.current) {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: containerRef.current,
    //       start: "bottom 99%",
    //       end: "20% 20%",
    //       markers: true,
    //       scrub: 1,
    //     },
    //   });
    //   tl.to(montanaRef.current, {
    //     y: -400,
    //     duration: 1,
    //     ease: "power2.inOut",
    //   });
    //   tl.to(tucumanLogoRef.current, {
    //     duration: 1,
    //     y: -900,
    //     scale: 1.5,
    //     ease: "power2.inOut",
    //   });
    //   tl.to(circuloRef.current, {
    //     y: -780,
    //   });
    // }

    // // gsap.set(montanaRef.current, { y: -400, opacity: 10 },);
    // const tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: containerRef.current,
    //         start: "bottom 80%",
    //         end: "20% 20%",
    //         markers: true,
    //         scrub: 1,
    //       }
    //     });
    // tl.from(texturaCalRef.current, {
    //   opacity: 0.1,
    //   duration: 1,
    // });
    // tl.to(
    //   montanaRef.current,
    //   {
    //     y: -400,
    //   },
    //   {}
    // );
    // tl.to(
    //   tucumanLogoRef.current,
    //   {
    //     duration: 1,
    //     y: -900,
    //     scale: 1.5,
    //     ease: "power2.inOut",
    //   },
    //   "-=1"
    // );
    // tl.to(circuloRef.current, {
    //   y: -780,
    // });
    //     // tl.repeat(-1);
    //     // tl.yoyo(true);

    // const tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: containerRef.current,
    //         start: "bottom 80%",
    //         end: "20% 20%",
    //         markers: true,
    //         scrub: 1,
    //       }
    //     });
    //     tl.to(montanaRef.current, {
    //         y: '50%', // anima el montanao hacia el centro
    //         duration: 2,
    //         ease: "power2.inOut",
    //       });
    //       tl.to(tucumanLogoRef.current, {
    //           x: 0,
    //           duration: 2,
    //           ease: "power2.inOut",
    //         });
  }, []);
  return (
    <div
      ref={containerRef}
      className="bg-[#ADD29E] bg-[url(/images/textura-calchaqui.svg)] -z-20 h-screen overflow-hidden flex items-end justify-center relative"
    >
      {/* <Image src={TexturaCalchaqui} ref={texturaCalRef} alt="textura" priority className="w-screen opacity-15 -z-10" /> */}
      <div>
        <div
          ref={montanaRef}
          className="z-10 absolute bottom-[-1000px] left-0 w-full "
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
    </div>
  );
}

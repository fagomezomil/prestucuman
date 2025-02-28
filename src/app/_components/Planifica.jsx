"use client";
import Image from "next/image";
import LogoGobTuc from "../images/logogobtuc.svg";
import TucumanLogo from "../images/tucumanlogo.svg";
import { FaCheckCircle } from "react-icons/fa";

import LogoHistorica from "../images/historicalogo.svg";
import LogoYungas from "../images/yungaslogo.svg";
import LogoSur from "../images/surlogo.svg";
import LogoChoromoro from "../images/choromorologo.svg";
import LogoCalchaqui from "../images/calchaquilogo.svg";

const logos = {
  LogoHistorica: { img: LogoHistorica, color: '#FF69B4' },
  LogoYungas: { img: LogoYungas, color: '#34A85A' },
  LogoSur: { img: LogoSur, color: '#FFC107' },
  LogoChoromoro: { img: LogoChoromoro, color: '#8E24AA' },
  LogoCalchaqui: { img: LogoCalchaqui, color: '#4CAF50' },
};
export default function Planifica() {
  return (
    <div className="h-screen bg-white overflow-hidden font-encode-sans">
      <div className="bg-white w-screen py-6 flex flex-row items-center justify-around shadow-md">
        <Image src={TucumanLogo} alt="logo gob tuc" className="h-[60px]" />
        <p className=" text-neutral-400 font-bold text-4xl text-center">
          Planifica tu viaje al Corazón del Norte Argentino
        </p>
        <Image src={LogoGobTuc} alt="logo gob tuc" className="h-[80px]" />
      </div>
      <div className="">

        <div className="w-1/4 p-10 ">
          <div className="flex flex-row items-center">
            <p className="text-[24px] leading-7 font-weight-100  text-[#82BF73] pr-8">Elegí tu destino y <br /> planifica tu viaje</p>
            <FaCheckCircle className="text-[#82BF73] text-[40px]" />
          </div>
          <div className="flex flex-col">
            {Object.values(logos).map((logo, index) => {

              return (
                <button
                  key={index}
                  className={`w-full p-4 mb-4 bg-slate-400`}
                >
                  <Image src={logo.img} alt={`Logo ${index}`} className="h-[40px]" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

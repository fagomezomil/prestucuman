"use client";
import Image from "next/image";
import LogoGobTuc from "../images/logogobtuc.svg";
import TucumanLogo from "../images/tucumanlogo.svg";
import { FaCheckCircle } from "react-icons/fa";
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

      <div className="h-full w-1/4 p-10 flex flex-row items-center">
        <p className="text-[24px] leading-7 font-weight-100  text-[#82BF73] pr-8">Elegí tu destino y <br /> planifica tu viaje</p>
        <FaCheckCircle className="text-[#82BF73] text-5xl" />
      </div>
      </div>
    </div>
  );
}

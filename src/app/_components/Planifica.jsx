"use client";
import Image from "next/image";
import LogoGobTuc from "../images/logogobtuc.svg";
import TucumanLogo from "../images/tucumanlogo.svg";
export default function Planifica() {
  return (
    <div className="h-screen bg-white overflow-hidden">
      <div className="bg-white w-screen p-6 flex flex-row items-center justify-center shadow-md">
        <Image src={TucumanLogo} alt="logo gob tuc" className="h-[60px]"/>
        <p className="font-encode-sans text-neutral-400 font-bold text-4xl text-center">
          Planifica tu viaje al Corazón del Norte Argentino
        </p>
        <Image src={LogoGobTuc} alt="logo gob tuc" className="h-[80px]"/>
      </div>
    </div>
  );
}

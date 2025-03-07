"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import LogoGobTuc from "../images/logogobtuc.svg";
import { FaChevronCircleRight, FaFileDownload } from "react-icons/fa";

import LogoHistorica from "../images/historicalogo.svg";
import LogoYungas from "../images/yungaslogo.svg";
import LogoSur from "../images/surlogo.svg";
import LogoChoromoro from "../images/choromorologo.svg";
import LogoCalchaqui from "../images/calchaquilogo.svg";


import circuitos from '../data/circuitos';
import CircuitoSec from "./CircuitoSec";
const circuitosData = circuitos();

const logos = {
  Historica: { nombre: "Historica", img: LogoHistorica, color: "historica" },
  Yungas: { nombre: "Yungas", img: LogoYungas, color: "yungas" },
  Sur: { nombre: "Sur", img: LogoSur, color: "sur" },
  Choromoro: { nombre: "Choromoro", img: LogoChoromoro, color: "choromoro" },
  Calchaqui: { nombre: "Calchaqui", img: LogoCalchaqui, color: "calchaqui" },
};
export default function Planifica() {
  const [favoritos, setFavoritos] = useState([]);
  const [circuitoSeleccionado, setCircuitoSeleccionado] = useState(null);
  console.log(circuitoSeleccionado)

  const actualizarFavoritos = useCallback((nombre) => {
     const nuevosFavoritos = [...favoritos];
     const existe = nuevosFavoritos.includes(nombre);
     if (existe) {
       nuevosFavoritos.splice(nuevosFavoritos.indexOf(nombre), 1);
     } else {
       nuevosFavoritos.push(nombre);
     }
     setFavoritos(nuevosFavoritos);
   }, [favoritos]);

 
  return (
    <div className=" bg-white overflow-hidden font-400 h-screen mx-auto font-sofiacond relative">
      
      <div className="bg-white w-screen py-3 flex flex-row items-center justify-between shadow-md">
        <Image src="/images/tucumanlogo.svg" alt="logo gob tuc" priority width={200} height={60} className="h-[60px] ml-4" />
        <p className=" text-neutral-400 text-[42px] font-600 text-center font-sofiacond">
          Planifica tu viaje al Corazón del Norte Argentino
        </p>
        <Image src={LogoGobTuc} alt="logo gob tuc" className="h-[65px] w-fit mr-10" />
      </div>
      <div className="">
        <div className="w-full">
          <div className="grid grid-cols-6 w-full">
            <div className="col-span-1 pl-8 flex flex-row items-center bg-[#206C60] ">
              <p className="text-[30px] leading-7 font-400 text-white pr-8">Elegí tu destino y <br /> planifica tu viaje</p>
              <FaChevronCircleRight className="text-white text-[40px]" />
            </div>
            <div className="col-span-5 flex flex-row">
              {Object.values(logos).map((logo, index) => {
                return (
                  <button key={index} onClick={() => setCircuitoSeleccionado(logo.nombre)} className={`w-full h-full p-4 mb-4 flex items-center justify-center bg-stone-400 hover:bg-${logo.color} shadow-left`}>
                    <Image src={logo.img} alt={`Logo ${index}`} className="h-[60px]" />
                  </button>
                );
              })}

            </div>
          </div>
        </div>
        <div className="">
          <CircuitoSec circuitosData={circuitosData} favoritos={favoritos} actualizarFavoritos={actualizarFavoritos} circuitoSeleccionado={circuitoSeleccionado}/>
        </div>
          <div className="flex items-center w-full h-[45px] bg-neutral-400 absolute rounded-t-md bottom-0 right-0 py-1 px-4">
            <p className="font-700 uppercase text-2xl text-white">Itinerario</p>
            <div className="w-full h-[30px] bg-neutral-200 rounded-full mx-2 flex items-center ">
            <div className="w-full h-[20px] bg-historica rounded-full m-1"></div>
            </div>
            <button className="flex text-white hover:text-neutral-700">
            <FaFileDownload className="text-[26px]" /> <p className="font-700 uppercase text-2xl  ml-2">Descargar</p>
            </button>
          </div>
      </div>
    </div>
  );
}

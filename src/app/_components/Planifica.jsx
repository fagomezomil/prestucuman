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
  Historica: { nombre: "Historica", logo: LogoHistorica, img: "casah", color: "historica" },
  Yungas: { nombre: "Yungas", logo: LogoYungas, img: "quetipi-inicio", color: "yungas" },
  Sur: { nombre: "Sur", logo: LogoSur, img: "sur", color: "sur" },
  Choromoro: { nombre: "Choromoro", logo: LogoChoromoro, img: "pozoindio-inicio", color: "choromoro" },
  Calchaqui: { nombre: "Calchaqui", logo: LogoCalchaqui, img: "menhires-inicio", color: "calchaqui" },
};
export default function Planifica() {
  const [favoritos, setFavoritos] = useState([]);
  const [circuitoSeleccionado, setCircuitoSeleccionado] = useState(null);
  const [itinerarioProgress, setItinerarioProgress] = useState(0);
  const dias = Math.ceil(itinerarioProgress / 100);
  const progressText = `${dias} día${dias > 1 ? 's' : ''}`;
  const progressWidth = itinerarioProgress > 100 ? 100 : itinerarioProgress;

  const actualizarFavoritos = useCallback((nombre) => {
    const nuevosFavoritos = [...favoritos];
    const existe = nuevosFavoritos.includes(nombre);
    if (existe) {
      nuevosFavoritos.splice(nuevosFavoritos.indexOf(nombre), 1);
    } else {
      nuevosFavoritos.push(nombre);
    }
    setFavoritos(nuevosFavoritos);
    console.log("nuevos favoritos", nuevosFavoritos)
    const progress = (nuevosFavoritos.length / circuitosData.circuitos.length) * 100;
    console.log("progress", progress)
    setItinerarioProgress(progress);
  }, [favoritos]);


  return (
    <div className=" bg-white overflow-hidden font-400 h-screen mx-auto font-sofiacond relative">

      <div className="bg-white w-screen py-3 flex flex-row items-center justify-between shadow-md">
        <Image src="/images/tucumanlogo.svg" alt="logo gob tuc" priority width={200} height={60} className="h-[60px] ml-6" />
        <p className=" text-neutral-400 text-[42px] font-600 text-center font-sofiacond">
          Planifica tu viaje al Corazón del Norte Argentino
        </p>
        <Image src={LogoGobTuc} alt="logo gob tuc" className="h-[65px] w-fit mr-10" />
      </div>
      <div className="">
        <div className="w-full">
          <div className="grid grid-cols-6 w-full">
            <div className="col-span-1 pl-12 flex flex-row items-center bg-[#206C60] ">
              <p className="text-[30px] leading-7 font-400 text-white pr-8">Elegí tu destino y <br /> planifica tu viaje</p>
              <FaChevronCircleRight className="text-white text-[40px]" />
            </div>
            <div className="col-span-5 flex flex-row">
              {Object.values(logos).map((logo, index) => {
                return (
                  <button key={index} onClick={() => setCircuitoSeleccionado(logo.nombre)} className={`w-full h-full p-4 mb-4 flex items-center justify-center bg-stone-400 hover:bg-${logo.color} shadow-left`}>
                    <Image src={logo.logo} alt={`Logo ${index}`} className="h-[60px]" />
                  </button>
                );
              })}

            </div>
          </div>
        </div>
        <div className="">
          <CircuitoSec circuitosData={circuitosData} favoritos={favoritos} actualizarFavoritos={actualizarFavoritos} circuitoSeleccionado={circuitoSeleccionado} />
        </div>
        {/* barra de itinerario */}
        <div className="flex items-center w-full h-[45px] bg-neutral-400 absolute rounded-t-md bottom-0 right-0">
          <p className="font-700 uppercase text-2xl text-white shrink-0 pl-6">Tu itinerario</p>
          <div className="w-full h-[30px] bg-neutral-200 rounded-full mx-2 flex items-center ">
            {progressWidth > 0 && <div style={{ width: `${progressWidth}%` }} className={`h-full rounded-full bg-[#206C60] border-4 border-neutral-200`}></div>}
          </div>
          <p className="font-700 uppercase text-2xl text-white shrink-0 mr-4">{progressText}</p>
          <button className="flex items-center px-4 text-white hover:bg-[#206C60] hover:rounded-t-md hover:h-full">
            <FaFileDownload className="text-[26px]" /> <p className="font-700 uppercase text-2xl  ml-2">Descargar</p>
          </button>
        </div>
      </div>
    </div>
  );
}

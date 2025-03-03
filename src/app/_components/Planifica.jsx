"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import LogoGobTuc from "../images/logogobtuc.svg";
import TucumanLogo from "../images/tucumanlogo.svg";
import { FaCheckCircle, FaChevronCircleRight } from "react-icons/fa";
import { BsBookmarkHeart } from "react-icons/bs";
import { PiHeartDuotone, PiHeartFill } from "react-icons/pi";

import LogoHistorica from "../images/historicalogo.svg";
import LogoYungas from "../images/yungaslogo.svg";
import LogoSur from "../images/surlogo.svg";
import LogoChoromoro from "../images/choromorologo.svg";
import LogoCalchaqui from "../images/calchaquilogo.svg";
// import Quetupi from "../images/quetupi.svg";


import circuitos from '../data/circuitos';
const circuitosData = circuitos();

const logos = {
  LogoHistorica: { img: LogoHistorica, color: "bg-cyan-500" },
  LogoYungas: { img: LogoYungas, color: "bg-green-500" },
  LogoSur: { img: LogoSur, color: "bg-pink-600" },
  LogoChoromoro: { img: LogoChoromoro, color: "bg-orange-500" },
  LogoCalchaqui: { img: LogoCalchaqui, color: "bg-red-500" },
};
export default function Planifica() {
  const [isFavorito, setIsFavorito] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  const actualizarFavoritos = useCallback((nombre) => {
    const nuevosFavoritos = [...favoritos];
    const existe = nuevosFavoritos.includes(nombre);
    console.log("favoritos", favoritos, "nuevos favoritos", nuevosFavoritos)
    if (existe) {
      nuevosFavoritos.splice(nuevosFavoritos.indexOf(nombre), 1);
    } else {
      nuevosFavoritos.push(nombre);
    }
    setFavoritos(nuevosFavoritos);
  }, [favoritos]);

  return (
    <div className=" bg-white overflow-hidden font-400 h-screen font-sofiacond">
      <div className="bg-white w-screen py-6 flex flex-row items-center justify-around shadow-md">
        <Image src={TucumanLogo} alt="logo gob tuc" className="h-[60px]" />
        <p className=" text-neutral-400 text-[42px] font-600 text-center font-sofiacond">
          Planifica tu viaje al Corazón del Norte Argentino
        </p>
        <Image src={LogoGobTuc} alt="logo gob tuc" className="h-[80px]" />
      </div>
      <div className="">
        <div className="w-full">
          <div className="grid grid-cols-6 w-full">
            <div className="col-span-1 pl-8 flex flex-row items-center bg-[#82BF73] ">
              <p className="text-[30px] leading-7 font-400 text-white pr-8">Elegí tu destino y <br /> planifica tu viaje</p>
              <FaChevronCircleRight className="text-white text-[40px]" />
            </div>
            <div className="col-span-5 flex flex-row">
              {Object.values(logos).map((logo, index) => {
                return (
                  <button key={index} className={`w-full h-full p-4 mb-4 flex items-center justify-center bg-stone-400 hover:${logo.color} shadow-left`}>
                    <Image src={logo.img} alt={`Logo ${index}`} className="h-[60px]" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="">
          {circuitosData.circuitos.map((circuito, index) => (
            <div key={index} className="grid grid-cols-7 relative">
              <div className="col-span-2 mx-12 mt-20 ">
                <h2 className="mb-6 uppercase font-800 text-[64px] leading-[50px]  text-green-700">{circuito.nombre}</h2>
                <p className="text-[34px] font-400 text-neutral-400 leading-[35px]">{circuito.destacado}</p>
                <div className="flex flex-row items-center mt-16 gap-6">
                  <div>
                    <p className="text-green-500 font-400 italic text-3xl">Armá tu itinerario y descargalo</p>
                    {favoritos.length === 0 ? (
                      <p className="text-2xl font-400 text-neutral-400">No hay destinos seleccionados</p>
                    ) : (
                      <p className="text-2xl font-400 text-neutral-400">Destinos seleccionados: {favoritos.length}</p>
                    )}
                  </div>
                  <div>
                    {favoritos.length !== 0 ? (
                      <PiHeartFill className="text-green-700 rounded-full bg-white border border-neutral-200 p-2 text-[60px] shadow-lg" />
                    ) : (
                      <PiHeartDuotone className="text-green-700 rounded-full bg-white border border-neutral-200 p-2 text-[60px] shadow-lg" />
                    )}
                  </div>
                </div>
              </div>
              <Image src={circuito.imagen} width={500} height={500} alt="quetupi" className="absolute -bottom-[160px]" />
              <div className="col-span-5 my-10 overflow-y-scroll scroll-smooth h-[65vh]">
                {circuito.destinos.map((destino, index) => (
                  <div key={index} className="">
                    <h3 className="font-800 rounded-md bg-green-600 text-white text-3xl w-fit px-4 my-4">{destino.nombre}</h3>
                    <div className="grid grid-cols-5 gap-4">
                      {destino.productos.map((producto, index) => (
                        <div key={index} className="border border-neutral-100 w-fit h-fit pb-4 rounded-md relative">
                          <button
                            className={`rounded-full bg-white p-1 text-[32px] absolute top-2 right-2`}
                            onClick={() => actualizarFavoritos(producto.nombre)}
                          >
                            {favoritos.indexOf(producto.nombre) !== -1 ? (
                              <PiHeartFill className="text-[#206c60]" />
                            ) : (
                              <PiHeartDuotone className="text-[#206c60]" />
                            )}
                          </button>
                          <Image src={producto.imagen} alt={`imagen ${index}`} width={250} height={180} className="rounded-t-md" />
                          <h4 className="text-[20px] font-700 leading-[19px] px-3 pt-3 uppercase text-green-800">{producto.nombre}</h4>
                          <div className="flex flex-row gap-2 my-2 ml-3">
                            {producto.categorias.map((categoria, index) => (
                              <p key={index} className="rounded-md px-2 py-1 bg-green-400 text-white text-[16px] font-500">{categoria}</p>
                            ))}
                          </div>
                          <p className="text-[16px] font-400 text-neutral-400 px-3 pt-1">{producto.detalle.substring(0, 79) + "..."}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-4/6 h-[60px] bg-neutral-200 absolute -bottom-[17px] right-0">Barrita</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

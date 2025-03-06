import Image from 'next/image'
import React from 'react'
import DestinoCard from './DestinoCard'

import { PiHeartDuotone, PiHeartFill } from "react-icons/pi";

export default function CircuitoSec({ circuitosData, favoritos, actualizarFavoritos }) {
    return (
        <div>
            {circuitosData.circuitos.map((circuito, index) => (
                <div key={index} className="grid grid-cols-7 relative">
                    <div className="col-span-2 mx-12 mt-20 ">
                        <h2 className={`mb-6 uppercase font-800 text-[64px] leading-[50px] text-green-800`}>{circuito.nombre}</h2>
                        <p className="text-[34px] font-400 text-green-700 leading-[35px]">{circuito.destacado}</p>
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
                        <DestinoCard circuito={circuito} favoritos={favoritos} actualizarFavoritos={actualizarFavoritos} />
                    </div>
                </div>
            ))}
        </div>
    )
}

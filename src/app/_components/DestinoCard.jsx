import Image from 'next/image'
import React, { useCallback, useState } from 'react'

import { PiHeartDuotone, PiHeartFill } from "react-icons/pi";



export default function DestinoCard({ circuito, favoritos, actualizarFavoritos }) {
    console.log(circuito)
  
  return (
    <div>
        {circuito.destinos.map((destino, index) => (
                            <div key={index} className="">
                                <h3 className={`font-700 rounded-md bg-${destino.color}-1 text-white text-3xl w-fit px-4 my-4`}>{destino.nombre}</h3>
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
  )
}

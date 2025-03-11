import Image from "next/image";
import { PiHeartDuotone, PiHeartFill } from "react-icons/pi";
import { GoPlusCircle } from "react-icons/go";
import { useState } from "react";
import Modal from "react-modal";

export default function DestinoCard({
  circuito,
  favoritos,
  actualizarFavoritos,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  console.log(productoSeleccionado);

  const handleOpenModal = (producto) => {
    setProductoSeleccionado(producto);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {circuito.destinos.map((destino, index) => (
        <div key={index} className="">
          <h3
            className={`font-700 rounded-md bg-${destino.color}-1 text-white text-3xl w-fit px-4 my-2`}
          >
            {destino.nombre}
          </h3>
          <div className="grid grid-cols-5 gap-4">
            {destino.productos.map((producto, index) => (
              <div
                key={index}
                className="border border-neutral-100 w-fit h-fit pb-4 rounded-md relative"
              >
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
                <Image
                  src={producto.imagen}
                  alt={`imagen ${index}`}
                  width={250}
                  height={180}
                  className="w-full rounded-t-md h-[180px]"
                />
                <h4 className="text-[20px] font-700 leading-[19px] px-3 pt-3 uppercase text-neutral-700">
                  {producto.nombre}
                </h4>
                <div className="flex flex-row gap-2 my-2 ml-3">
                  {producto.categorias.map((categoria, index) => (
                    <p
                      key={index}
                      className="rounded-md px-2 py-1 bg-neutral-400 text-white text-[16px] font-500"
                    >
                      {categoria}
                    </p>
                  ))}
                </div>
                <p className="text-[16px] font-400 text-neutral-400 px-3 pt-1">
                  {producto.detalle.substring(0, 79) + "..."}
                </p>
                <button
                  className="mt-2 ml-3 border rounded-lg hover:bg-[#206C60] hover:text-white"
                  onClick={() => handleOpenModal(producto)}
                >
                  <div className="flex flex-row items-center gap-2 px-3">
                    <p>Conocé más aquí</p>
                    <GoPlusCircle />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Detalle del producto"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "1800px",
            height: "900px",
            margin: "auto",
            padding: "0px",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            border: "none",
          },
        }}
      >
        <div className="object-cover">
          <video
            src="/videos/cadillal.mp4"
            autoPlay
            loop
            muted
            className="h-[550px] w-screen object-cover"
          />
        </div>

        {productoSeleccionado && (
          <div className="grid grid-cols-7 gap-4 mr-6 mt-4">
            <div className="col-span-2 mt-6 ml-6">
              <p className="text-[30px] font-700 leading-[32px] px-3 pt-3 uppercase text-neutral-700">
                {productoSeleccionado.nombre}
              </p>
              <div className="flex flex-row gap-2 my-2 ml-3 mt-6">
                {productoSeleccionado.categorias.map((categoria, index) => (
                  <p
                    key={index}
                    className="rounded-md px-2 py-1 bg-neutral-400 text-white text-[14px] font-400"
                  >
                    {categoria}
                  </p>
                ))}
              </div>
              <p className="text-[16px] font-400 text-neutral-400 px-3 mt-4">
                {productoSeleccionado.detalle}
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-10">

            {Array(5)
              .fill()
              .map((_, index) => (
                <img
                  key={index}
                  src={productoSeleccionado.imagen}
                  alt={`Imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

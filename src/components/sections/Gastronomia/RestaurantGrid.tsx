import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import React from "react";

const Datos = [
  {
    nombre: "Monos",
    direccion: "Baigorria 558, Milan",
    telefono: "1159474844",
    tipo: "Bodegon",
    imagen: "/bar1.jpeg",
  },
  {
    nombre: "Monos La boutique",
    direccion: "Alsina 112, Pilar",
    telefono: "1159474844",
    tipo: "Pizzeria - Bodegon - comida casera",
    imagen: "/bar1.jpeg",
  },
  {
    nombre: "Monos",
    direccion: "Alsina 112, Pilar",
    telefono: "1159474844",
    tipo: "Pizzeria - Bodegon",
    imagen: "/bar1.jpeg",
  },
  {
    nombre: "Monos",
    direccion: "Alsina 112, Pilar",
    telefono: "1159474844",
    tipo: "Pizzeria - Bodegon",
    imagen: "/bar1.jpeg",
  },
  {
    nombre: "Monos",
    direccion: "Alsina 112, Pilar",
    telefono: "1159474844",
    tipo: "Pizzeria - Bodegon",
    imagen: "/bar1.jpeg",
  },
  {
    nombre: "Monos",
    direccion: "Alsina 112, Pilar",
    telefono: "1159474844",
    tipo: "Pizzeria - Bodegon",
    imagen: "/bar1.jpeg",
  },
  {
    nombre: "Monos",
    direccion: "Alsina 112, Pilar",
    telefono: "1159474844",
    tipo: "Pizzeria - Bodegon",
    imagen: "/bar1.jpeg",
  },
  {
    nombre: "Monos",
    direccion: "Alsina 112, Pilar",
    telefono: "1159474844",
    tipo: "Pizzeria - Bodegon",
    imagen: "/bar1.jpeg",
  },
];

const RestaurantGrid = () => {
  return (
    <div className="flex flex-col ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 xl:overflow-y-auto xl:h-[600px] mb-10">
        {Datos.map((dato, index) => (
          <div key={index} className="m-2">
            <Card
              isFooterBlurred
              className="w-full h-[300px]"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                
                <h4 className="text-black font-medium text-2xl">{dato.nombre}</h4>
              </CardHeader>
              <Image
                removeWrapper
                isBlurred
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={dato.imagen}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-tiny">{dato.telefono}</p>
                  <p className="text-black text-tiny">{dato.tipo}</p>
                </div>
                <Button
                  className="text-tiny"
                  color="primary"
                  radius="full"
                  size="sm"
                >
                  Ver mas
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantGrid;

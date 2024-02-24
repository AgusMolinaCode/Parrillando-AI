"use client";

import { useState } from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import React from "react";
import RestaurantModal from "./RestaurantModal";
import Mapas from "./Mapas";
import { Gastronomia } from "@/libs/interfaces/Gastronomia";

interface RestaurantGridProps {
  restaurants: Gastronomia[];
}

const RestaurantGrid = ({ restaurants }: RestaurantGridProps) => {
  const [selectedCoordinates, setSelectedCoordinates] = useState<
    [number, number] | null
  >(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [selectedDirection, setSelectedDirection] = useState<string | null>(
    null
  );
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleComoLlegarClick = (
    coordinates: [number, number] | null,
    title: string | null,
    zipCode: string | null,
    direction: string | null,
    city: string | null
  ) => {
    setSelectedCoordinates(coordinates ?? [-58.3982376, -34.5973132]);
    setSelectedTitle(title);
    setSelectedCode(zipCode);
    setSelectedDirection(direction);
    setSelectedCity(city);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div>
      <div className="max-w-[1500px] flex justify-center mx-auto mt-5 gap-2 flex-wrap">
        <div className="grid md:grid-cols-2 xl:grid-cols-1 xl:overflow-y-auto xl:h-[600px] mb-10">
          {restaurants.map((dato, index) => (
            <div key={index} className="m-2">
              <Card isBlurred className="w-full h-[300px]">
                <CardHeader className="absolute z-10 flex-col items-start bg-black/70 border-b-2 border-zinc-100/50">
                  <h4 className="text-gray-200 font-bold text-2xl">
                    {dato.title}
                  </h4>
                </CardHeader>
                <div className="relative w-full h-full">
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-black font-bold text-xl">
                        Cargando Imagen...
                      </p>
                    </div>
                  )}
                  <Image
                    removeWrapper
                    isBlurred
                    alt="Card example background"
                    className="z-0 w-full h-full object-cover bg-black bg-opacity-80"
                    src={dato.photo}
                    onLoad={handleImageLoad}
                  />
                </div>
                <CardFooter className="absolute  bottom-0 border-t-2 border-zinc-100/50 z-10 justify-between bg-black/70">
                  <div>
                    <p className="text-gray-200 text-sm font-bold">
                      {dato.foodType} -{" "}
                      <span className="text-yellow-300">{dato.price}</span>
                    </p>
                    <p className="text-gray-100 text-md font-bold">
                      {dato.whatsapp}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <RestaurantModal dato={dato} />

                    <Button
                      className="text-tiny flex xl:hidden"
                      color="primary"
                      radius="full"
                      size="sm"
                      onClick={() =>
                        window.open(
                          `https://www.google.com/maps/dir/?api=1&destination=${dato.lat},${dato.lng}`,
                          "_blank"
                        )
                      }
                    >
                      Como Llegar
                    </Button>
                    <Button
                      className="text-tiny hidden xl:flex"
                      color="primary"
                      radius="full"
                      size="sm"
                      onClick={() =>
                        handleComoLlegarClick(
                          [dato.lng, dato.lat],
                          dato.title,
                          dato.zipCode,
                          dato.direction,
                          dato.city
                        )
                      }
                    >
                      Como Llegar
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="bg-gray-500 h-[600px] w-[800px] hidden xl:block rounded-3xl">
          <Mapas
            coordinates={selectedCoordinates ?? [-58.3982376, -34.5973132]}
            title={selectedTitle ?? "Pizzeria Guerrin"}
            zipCode={selectedCode ?? "1043"}
            direction={selectedDirection ?? "Av. Corrientes 1368"}
            city={selectedCity ?? "CABA"}
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantGrid;

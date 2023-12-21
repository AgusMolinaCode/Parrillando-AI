import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import React from "react";
import RestaurantModal from "./RestaurantModal";
import { Datos } from "@/libs/Datos";

const RestaurantGrid = () => {
  return (
    <div className="flex flex-col">
      <div className="grid md:grid-cols-2 xl:grid-cols-1 xl:overflow-y-auto xl:h-[600px] mb-10">
        {Datos.map((dato, index) => (
          <div key={index} className="m-2">
            <Card isBlurred className="w-full h-[300px]">
              <CardHeader className="absolute z-10 flex-col items-start bg-black/70 border-b-2 border-zinc-100/50">
                <h4 className="text-gray-200 font-bold text-2xl">
                  {dato.title}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                isBlurred
                alt="Card example background"
                className="z-0 w-full h-full object-cover bg-black bg-opacity-80"
                src={dato.photo}
              />
              <CardFooter className="absolute  bottom-0 border-t-2 border-zinc-100/50 z-10 justify-between bg-black/70">
                <div>
                  <p className="text-gray-200 text-sm font-bold">
                    {dato.foodType}
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
                  >
                    Como Llegar 1
                  </Button>
                  <Button
                    className="text-tiny hidden xl:flex"
                    color="primary"
                    radius="full"
                    size="sm"
                  >
                    Como Llegar
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantGrid;

import React from "react";
import Link from "next/link";
import { Card, CardFooter, Image } from "@nextui-org/react";



type CategoriaMenuProps = {
  nombreCategoria: string;
};

const CategoriaMenu = ({ nombreCategoria }: CategoriaMenuProps) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-red-100 via-orange-200 to-yellow-100 p-8">
        <h1 className="text-center text-4xl sm:text-6xl font-bold">
          {nombreCategoria}
        </h1>
      </div>

      <div className="mt-10 mb-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 place-items-center gap-5 max-w-[1300px] justify-center mx-auto">
        <Link href="/receta/1"> {/** //TODO agregar link dinamico a la receta */}
          <Card isPressable className="h-[350px]">
            <Image
              removeWrapper
              isZoomed
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/asado1.png"
            />
            <CardFooter className="absolute bg-black/80 bottom-0 border-t-1 border-zinc-100/50 z-10">
              <h1 className="text-white font-medium text-center flex justify-center mx-auto text-2xl">
                Asado de tira a la most
              </h1>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default CategoriaMenu;



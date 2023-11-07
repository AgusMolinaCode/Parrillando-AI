"use client";
import React from "react";
import { Lobster } from "next/font/google";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const lobster = Lobster({ weight: "400", preload: false });

interface Props {
  id: number;
  img: string;
  title: string;
}

const List = [
  {
    id: 1,
    title: "Asado y Parrilla",
    img: "/asado1.png",
  },
  {
    id: 2,
    title: "Pastas",
    img: "/pasta1.jpeg",
  },
  {
    id: 3,
    title: "Milanesas",
    img: "/mila.jpeg",
  },
  {
    id: 4,
    title: "Pizzas y Empanadas",
    img: "/pizza.webp",
  },
  {
    id: 5,
    title: "Guisos y Estofados",
    img: "/guiso1.jpeg",
  },
  {
    id: 6,
    title: "Otras Recetas",
    img: "/otro.jpeg",
  },
];

const Categorias = () => {
  return (
    <div>
      <div className="mt-10 sm:mt-16 text-center md:text-start sm:px-24">
        <div className={lobster.className}>
          <h1 className="text-4xl sm:text-5xl pt-2 text-black font-bold">
            Categorias
          </h1>
        </div>
        <p>
          <span className="text-lg sm:text-xl text-gray-400 font-semibold ">
            Descubre todas las categorias de recetas
          </span>
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center mx-auto mt-8 pb-10">
        {List.map((item, index) => (
          <div className="group w-[142px] px-2 sm:w-[180px]" key={index}>
            <Link href={`/categorias/${item.id}`}>
              <Card
                shadow="sm"
                key={index}
                isPressable
                className="rounded-full"
               
              >
                <CardBody className="overflow-visible p-0">
                  <Image
                    width={180}
                    height={180}
                    alt={item.title}
                    className="w-full h-[130px] sm:h-[170px] group-hover:scale-105 duration-250 "
                    src={item.img as Props["img"]}
                  />
                </CardBody>
              </Card>
            </Link>
            <div className="flex justify-center mx-auto">
              <span className="text-lg sm:text-xl text-center pt-1 sm:pt-4 text-gray-600 group-hover:text-black duration-250 font-semibold w-[100px]">
                {item.title as Props["title"]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorias;

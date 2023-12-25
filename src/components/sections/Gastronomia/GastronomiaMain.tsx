import React from "react";
import { Lobster } from "next/font/google";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

const lobster = Lobster({ weight: "400", preload: false });

export default function GastronomiaMain() {
  return (
    <div className="max-w-[900px] flex flex-col justify-center mx-auto pb-24 sm:pt-6 px-1">
      <Card className=" flex justify-center mx-auto mt-5 gap-2 flex-wrap">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <div className={lobster.className}>
            <h1 className="text-white text-4xl sm:text-5xl text-center  font-bold ">
              Gastronomia
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-200 font-semibold text-left pt-5 max-w-sm">
            Encuentra los mejores restaurantes y lugares para poder disfrutar en
            familia
          </p>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="w-[800px] h-[300px] sm:h-[400px] z-0"
          src="/mesa4.webp"
        />
        <CardFooter className="absolute  bottom-0  z-10 justify-between">
          <Button className="text-md text-black font-bold" color="warning" radius="full" size="md">
            <Link href="/gastronomia">Ver mas</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

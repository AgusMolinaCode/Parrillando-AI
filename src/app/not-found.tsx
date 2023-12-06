import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="my-48 sm:my-28">
      <div className="flex justify-center mx-auto">
        <h1 className="text-[4rem] md:text-[7rem] lg:text-[12rem] text-red-400 font-bold">
          {" "}
          <span className="text-5xl text-black font-medium">Error</span> 404
        </h1>
      </div>
      <h2 className="text-center text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold">
        Pagina no encontrada
      </h2>

      <Button className="bg-black text-white text-lg flex justify-center mx-auto mt-10">
        <Link href="/">Volver al inicio</Link>
      </Button>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const RecetaArrow = () => {
  return (
    <div className="px-2 sm:px-16 pt-3">
      {/* //TODO agregar link dinamico */}
      <Link href="/categorias/1" className="flex items-center gap-2">
        <BsFillArrowLeftCircleFill className="text-2xl sm:text-3xl text-orange-300 hover:text-orange-400 cursor-pointer" />
        <p className="text-lx sm:text-2xl font-bold text-gray-700 hover:text-black">
          Volver
        </p>
      </Link>
    </div>
  );
};

export default RecetaArrow;

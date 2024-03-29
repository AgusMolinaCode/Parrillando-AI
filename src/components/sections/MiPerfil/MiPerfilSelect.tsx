import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";

interface MiPerfilSelectProps {
  titulo: string;
  textoBotonCrear: string;
  BotonPage: string;
}

const MiPerfilSelect: React.FC<MiPerfilSelectProps> = ({
  titulo,
  textoBotonCrear,
  BotonPage,
}) => {
  return (
    <div className="flex gap-2 items-center flex-wrap px-3">
      <h1 className="font-bold text-xl underline underline-offset-1">
        {titulo}
      </h1>
      <Link href={BotonPage}>
        <Button className="border bg-transparent border-gray-400 text-gray-900 hover:bg-green-400/40">{textoBotonCrear}</Button>
      </Link>
    </div>
  );
};

export default MiPerfilSelect;

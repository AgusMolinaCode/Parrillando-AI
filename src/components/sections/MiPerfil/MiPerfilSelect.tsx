import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";

interface MiPerfilSelectProps {
  titulo: string;
  textoBotonCrear: string;
}

const MiPerfilSelect: React.FC<MiPerfilSelectProps> = ({
  titulo,
  textoBotonCrear,
}) => {
  return (
    <div className="flex gap-2 items-center flex-wrap px-3">
      <h1 className="font-bold text-xl underline underline-offset-1">
        {titulo}
      </h1>
      <Button color="success">{textoBotonCrear}</Button>
    </div>
  );
};

export default MiPerfilSelect;

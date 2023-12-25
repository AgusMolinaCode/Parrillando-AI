import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

export default function GastronomiaSelect() {
  return (
    <div className="grid grid-cols-2 md:flex gap-4 px-1 justify-items-center pt-3 sm:py-10 mx-auto justify-center">
      <Select label="Tipo de comida" className="max-w-xs">
        <SelectItem key={1} value="1">
          Comida Rapida
        </SelectItem>
      </Select>
      <Select label="Precio" className="max-w-xs">
        <SelectItem key={2} value="1">
          $$
        </SelectItem>
      </Select>
      <Select label="Provincia" className="max-w-xs">
        <SelectItem key={3} value="1">
          Buenos Aires
        </SelectItem>
      </Select>
      <Select label="Ciudad" className="max-w-xs">
        <SelectItem key={4} value="1">
          Mar del Plata
        </SelectItem>
      </Select>
    </div>
  );
}

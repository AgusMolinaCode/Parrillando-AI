import { RecetaId } from "@/libs/interfaces/RecetaId";
import React from "react";

interface Props {
  receta: RecetaId;
}

const RecetaProcedimiento = ({ receta }: Props) => {
  return (
    <div className="max-w-[600px] md:border-r-1 md:pr-3">
      <h1 className="text-lg sm:text-xl font-semibold py-3 underline">
        PROCEDIMIENTO:
      </h1>

      {receta.steps.map((step, index) => (
        <div key={step.id} className="mt-3 sm:mt-8">
          <h2 className="text-lg sm:text-xl font-semibold">
            PASO {index + 1}:
          </h2>
          <div className="text-justify">
            <p className="text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecetaProcedimiento;
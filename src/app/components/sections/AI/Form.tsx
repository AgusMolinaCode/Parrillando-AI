"use client";

import { useState, useCallback } from "react";
import { useCompletion } from "ai/react";
import { Button, Input, ScrollShadow } from "@nextui-org/react";

const Form = () => {
  const [content, setContent] = useState("");
  const { complete, completion, isLoading, stop } = useCompletion({
    api: "/api/completion",
  });

  const checkAndPublish = useCallback(
    async (c: string) => {
      const completion = await complete(c);
      if (completion === null || completion === undefined) {
        return;
      }
    },
    [complete]
  );

  return (
    <div>
      <div>
        <div className="pt-10 sm:pt-16 max-w-[700px] p-2 flex justify-center mx-auto">
          <Input
            type="text"
            variant="flat"
            label="Ingredientes"
            placeholder="Morron,Papas,Cebolla,Asado de tira"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex justify-center mx-auto py-4">
          {isLoading ? (
            <div className="flex gap-2 items-center">
              <Button color="primary" isLoading>
                Generando Receta
              </Button>
              <Button
                color="danger"
                variant="ghost"
                onClick={stop}
                className="ml-2"
              >
                Cancelar
              </Button>
            </div>
          ) : (
            <Button
              color="primary"
              variant="shadow"
              onClick={() => checkAndPublish(content)}
            >
              Generar Receta
            </Button>
          )}
        </div>
        <div>
          <div className="mx-4 md:mx-24 lg:mx-48 xl:mx-64 2xl:mx-80 mb-20 bg-orange-100/40 rounded-xl border border-gray-400">
            <ScrollShadow className="max-h-[500px] sm:max-h-[600px]">
              {completion &&
                completion.split("\n").map((line, index) => {
                  if (
                    line.includes("Paso 1") ||
                    line.includes("Paso 2") ||
                    line.includes("Paso 3") ||
                    line.includes("Paso 4")
                  ) {
                    return (
                      <h2
                        key={index}
                        className="my-7 m-3 text-center text-lg sm:text-xl font-semibold"
                      >
                        {line}
                      </h2>
                    );
                  } else {
                    return (
                      <h2
                        key={index}
                        className="my-5 m-3 text-center text-lg sm:text-xl font-semibold"
                      >
                        {line}
                      </h2>
                    );
                  }
                })}
            </ScrollShadow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

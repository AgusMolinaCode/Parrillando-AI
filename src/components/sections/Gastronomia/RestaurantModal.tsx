"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Modals } from "@/libs/interfaces/Modals";

export default function RestaurantModal({ dato }: Modals) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="text-tiny"
        color="primary"
        radius="full"
        size="sm"
        onPress={onOpen}
      >
        Ver Más
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 border-b-1">
                {dato.title}
              </ModalHeader>
              <ModalBody>
                <p className="font-semibold border-b-1">{dato.description}</p>
                <p>
                  Direccion: <span className="font-semibold"> {dato.direction}</span>{" "}
                </p>
                <p>
                  Contacto: <span className="font-semibold"> {dato.whatsapp}</span>{" "}
                </p>
                <p>
                  Tipo: <span className="font-semibold"> {dato.foodType}</span>{" "}
                </p>
                <p>
                  Precio: <span className="font-semibold"> {dato.price}</span>{" "}
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

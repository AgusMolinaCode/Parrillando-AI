"use client";

import React from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  
  useDisclosure,
} from "@nextui-org/react";


const slides = [
  {
    id: 1,
    img: "/asado1.png",
  },
  {
    id: 2,
    img: "/guiso1.jpeg",
  },
  {
    id: 3,
    img: "/mila.jpeg",
  },
  {
    id: 4,
    img: "/pasta1.jpeg",
  },
];

const RecetaZoom = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="">
      <div>
        <Image
          src="/asado1.png"
          alt="Picture of the author"
          width={400}
          height={400}
          className="rounded-xl"
          onClick={onOpen}
        />
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <Image
                src="/asado1.png"
                alt="Picture of the author"
                width={750}
                height={750}
                className="rounded-xl w-[800px] h-[800px]"
              />
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default RecetaZoom;

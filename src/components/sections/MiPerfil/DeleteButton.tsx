'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonGroup } from "@nextui-org/react";

interface DeleteButtonProps {
  id: string;
  url: string;
}

async function deleteItem(url: string, id: string) {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, url }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    await deleteItem(url, id);
    router.refresh();
    setIsDeleting(false);
  };

  return (
    <>
      <ButtonGroup className="border rounded-xl">
        <Button color="primary" variant="light" size="md">
          Editar
        </Button>
        <Button onClick={handleDelete} color="danger" variant="light" size="md">
          {isDeleting ? "Eliminando..." : "Eliminar"}
        </Button>
      </ButtonGroup>
    </>
  );
};

export default DeleteButton;
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonGroup } from "@nextui-org/react";

interface DeleteButtonProps {
  id: string;
}

async function deleteRecipe(id: string) {
  const response = await fetch(`http://localhost:3000/api/recetas/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    await deleteRecipe(id);
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

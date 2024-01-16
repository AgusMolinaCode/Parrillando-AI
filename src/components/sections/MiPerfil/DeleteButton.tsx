"use client";

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
		try {
			await deleteItem(url, id);
			router.refresh();
		} catch (error) {
			console.error(error);
		} finally {
			setTimeout(() => setIsDeleting(false), 5000); // espera 1 segundo antes de cambiar el estado
		}
	};

	return (
		<>
			<ButtonGroup className="border rounded-xl">
				<Button color="primary" variant="light" size="md">
					Editar
				</Button>
				<Button
					onClick={handleDelete}
					color="danger"
					variant="light"
					size="md"
					isDisabled={isDeleting ? true : false}
				>
					{isDeleting ? "Eliminando..." : "Eliminar"}
				</Button>
			</ButtonGroup>
		</>
	);
};

export default DeleteButton;

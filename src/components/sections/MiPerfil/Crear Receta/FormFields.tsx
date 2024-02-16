import React from "react";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { Categoria, List } from "@/libs/interfaces/categorias";
import { FaUser, FaTag } from "react-icons/fa";

// En FormFields.tsx

interface Props {
	title: string;
	setTitle: (value: string) => void;
	category: Categoria; // Cambia esto
	setCategory: (value: Categoria) => void; // Y esto
	description: string;
	setDescription: (value: string) => void;
	photo: string;
	setPhoto: (value: string) => void;
}

const FormFields = ({
	title,
	setTitle,
	category,
	setCategory,
	description,
	setDescription,
	photo,
	setPhoto,
}: Props) => {
	return (
		<>
			<Input
				type="text"
				label="Titulo"
				placeholder="Añade un título"
				labelPlacement="outside"
				onChange={e => setTitle(e.target.value)}
				value={title}
				startContent={<FaUser size={20} color="#000" />}
				radius="lg"
				className="my-6"
				isRequired
			/>
			<Select
				value={category?.title}
				label="Categoría"
				placeholder="Selecciona tu categoría"
				labelPlacement="outside"
				onChange={e => {
					const selectedCategory = List.find(
						cat => cat.title === e.target.value
					);
					if (selectedCategory) {
						setCategory(selectedCategory);
					}
				}}
				startContent={<FaTag size={20} color="#000" />}
				radius="lg"
				className="my-6"
				isRequired
			>
				{List.map(category => (
					<SelectItem key={category.title} value={category.title}>
						{category.title}
					</SelectItem>
				))}
			</Select>
			<Textarea
				value={description}
				onChange={e => setDescription(e.target.value)}
				label="Description"
				labelPlacement="outside"
				placeholder="Descripción de la receta"
				className="mb-6"
				isRequired
			/>
			<Input
				type="file"
				value={photo}
				onChange={e => setPhoto(e.target.value)}
				placeholder="URL de la foto"
				label="Foto"
				labelPlacement="outside"
				className="mb-6"
				multiple
				classNames={{
					input: "p-2",
				}}
				isRequired
			/>
		</>
	);
};

export default FormFields;

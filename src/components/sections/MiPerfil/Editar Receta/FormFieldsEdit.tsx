import React from "react";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { Categoria, List } from "@/libs/interfaces/categorias";
import { FaTag } from "react-icons/fa";

interface Props {
	title: string;
	setTitle: (value: string) => void;
	category: Categoria;
	setCategory: (value: Categoria) => void;
	description: string;
	setDescription: (value: string) => void;
}

const FormFieldsEdit = ({
	title,
	setTitle,
	category,
	setCategory,
	description,
	setDescription,
}: Props) => {
	return (
		<>
			<Input
				value={title}
				onChange={e => setTitle(e.target.value)}
				placeholder="Título de la receta"
				label="Título"
				labelPlacement="outside"
				className="mb-6"
				isRequired
			/>
			<Select
				value={category.title}
				defaultSelectedKeys={[category.title]}
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
				placeholder="Descripción de la receta"
				className="mb-6"
				isRequired
			/>
			{/* <Input
				type="file"
				name="photo"
				onChange={e => {
					if (e.target.files && e.target.files.length > 0) {
						setFile(e.target.files[0]);
					}
				}}
				placeholder="URL de la foto"
				label="Foto"
				labelPlacement="outside"
				className="mb-6"
				multiple
				classNames={{
					input: "p-2",
				}}
				isRequired
			/> */}
		</>
	);
};

export default FormFieldsEdit;

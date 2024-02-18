"use client";

import { RecetaId } from "@/libs/interfaces/RecetaId";
import { List, Categoria } from "@/libs/interfaces/categorias";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { FaTag, FaUser } from "react-icons/fa";

const Page = () => {
	const { id } = useParams();
	const router = useRouter();
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const [recipe, setRecipe] = useState<RecetaId | null>(null);
	const [saving, setIsSaving] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState<Categoria>(List[0]);

	useEffect(() => {
		fetch(`${apiUrl}recetas/${id}`)
			.then(response => response.json())
			.then(data => {
				setRecipe(data);
				setTitle(data.title);
				setDescription(data.description);
				const categoryData = List.find(cat => cat.title === data.category);
				if (categoryData) {
					setCategory(categoryData);
				}
			});
	}, [apiUrl, id]);

	if (!recipe) {
		return <div>Cargando...</div>;
	}

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();

		setIsSaving(true);

		const form = event.currentTarget as HTMLFormElement;

		const updatedRecipe = {
			title: title,
			category: category.title,
			description: description,
			photo: [(form["photo"] as HTMLInputElement).value],
			ingredients: recipe.ingredients.map((ingredient, index) => ({
				id: ingredient.id,
				name: (form[`ingredient-name-${index}`] as HTMLInputElement).value,
				quantity: (form[`ingredient-quantity-${index}`] as HTMLInputElement)
					.value,
				recipeId: recipe.id,
			})),
			steps: recipe.steps.map((step, index) => ({
				id: step.id,
				description: (form[`step-${index}`] as HTMLTextAreaElement).value,
				recipeId: recipe.id,
			})),
		};

		await fetch(`${apiUrl}recetas/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedRecipe),
		});

		router.push(`/perfil`);
		setIsSaving(false);
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<form
				className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
				onSubmit={handleSubmit}
			>
				<h1 className="mb-4 text-xl font-bold">Editar receta {recipe.title}</h1>

				<Input
					type="text"
					label="Titulo"
					placeholder="Añade un título"
					labelPlacement="outside"
					onChange={e => setTitle(e.target.value)}
					defaultValue={recipe.title}
					startContent={<FaUser size={20} color="#000" />}
					radius="lg"
					className="my-6"
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
					label="Description"
					labelPlacement="outside"
					placeholder="Descripción de la receta"
					className="mb-6"
					isRequired
				/>
				<label className="mb-2">
					Foto:
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						name="photo"
						defaultValue={recipe.photo}
					/>
				</label>

				{recipe.ingredients.map((ingredient, index) => (
					<div key={index} className="mb-2">
						<label>
							Ingredientes:
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								type="text"
								name={`ingredient-name-${index}`}
								defaultValue={ingredient.name}
							/>
						</label>
						<label>
							Cantidad:
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								type="text"
								name={`ingredient-quantity-${index}`}
								defaultValue={ingredient.quantity}
							/>
						</label>
					</div>
				))}
				{recipe.steps.map((step, index) => (
					<label key={index} className="mb-2">
						Paso:
						<textarea
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							name={`step-${index}`}
							defaultValue={step.description}
						/>
					</label>
				))}
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					{saving ? "Guardando..." : "Guardar"}
				</button>
			</form>
		</div>
	);
};

export default Page;

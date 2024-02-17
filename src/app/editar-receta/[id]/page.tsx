"use client";

import { RecetaId } from "@/libs/interfaces/RecetaId";
import { useParams, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const Page = () => {
	const { id } = useParams();
	const router = useRouter();
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const [recipe, setRecipe] = useState<RecetaId | null>(null);
	const [saving, setIsSaving] = useState(false);

	useEffect(() => {
		fetch(`${apiUrl}recetas/${id}`)
			.then(response => response.json())
			.then(data => setRecipe(data));
	});

	if (!recipe) {
		return <div>Cargando...</div>;
	}

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();

		setIsSaving(true);

		const form = event.currentTarget as HTMLFormElement;

		const updatedRecipe = {
			id: recipe.id,
			title: (form.elements.namedItem("title") as HTMLInputElement)?.value,
			category: (form["category"] as HTMLInputElement).value,
			description: (form["description"] as HTMLTextAreaElement).value,
			photo: [(form["photo"] as HTMLInputElement).value],
			authorId: recipe.authorId,
			likesCount: recipe.likesCount,
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
				<h1 className="mb-4 text-xl font-bold">Editar receta {id}</h1>
				<label className="mb-2">
					Título:
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						name="title"
						defaultValue={recipe.title}
					/>
				</label>
				<label className="mb-2">
					Categoría:
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						name="category"
						defaultValue={recipe.category}
					/>
				</label>
				<label className="mb-2">
					Descripción:
					<textarea
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						name="description"
						defaultValue={recipe.description}
					/>
				</label>
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

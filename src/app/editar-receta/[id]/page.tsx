"use client";

import FormFieldsEdit from "@/components/sections/MiPerfil/Editar Receta/FormFieldsEdit";
import IngredientsEdit from "@/components/sections/MiPerfil/Editar Receta/IngredientsEdit";
import { RecetaId } from "@/libs/interfaces/RecetaId";
import { List, Categoria } from "@/libs/interfaces/categorias";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
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
	const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);
	const [selectedIngredientIndex, setSelectedIngredientIndex] = useState<
		number | null
	>(null);

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
				setIngredients(data.ingredients);
			});
	}, [apiUrl, id]);

	if (!recipe) {
		return (
			<div className="min-h-screen flex justify-center mx-auto font-bold text-3xl items-center">
				Cargando...
			</div>
		);
	}

	const handleAddIngredient = () => {
		setIngredients([...ingredients, { name: "", quantity: "" }]);
	};

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();

		setIsSaving(true);

		const form = event.currentTarget as HTMLFormElement;

		const updatedIngredients = ingredients.map((ingredient, index) => {
			const nameInput = form[`ingredient-name-${index}`] as HTMLInputElement;
			const quantityInput = form[
				`ingredient-quantity-${index}`
			] as HTMLInputElement;
			return {
				name: nameInput ? nameInput.value : "",
				quantity: quantityInput ? quantityInput.value : "",
				recipeId: recipe.id,
			};
		});

		const updatedRecipe = {
			title: title,
			category: category.title,
			description: description,
			ingredients: updatedIngredients,
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

	const handleIngredientChange = (
		index: number,
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const values = [...ingredients];
		if (event.target.name === "name") {
			values[index].name = event.target.value;
		} else if (event.target.name === "quantity") {
			values[index].quantity = event.target.value;
		}
		setIngredients(values);
	};

	const handleRemoveIngredient = (index: number) => {
		const newIngredients = [...ingredients];
		newIngredients.splice(index, 1);
		setIngredients(newIngredients);
	};

	return (
		<div className="sm:flex sm:justify-center px-2 items-center min-h-screen bg-gray-100">
			<form
				className="bg-white shadow-md rounded px-2 mt-6 mb-8 p-4 flex flex-col sm:w-[600px] "
				onSubmit={handleSubmit}
			>
				<h1 className="mb-4 text-xl font-bold">Editar receta {recipe.title}</h1>
				<FormFieldsEdit
					title={title}
					setTitle={setTitle}
					category={category}
					setCategory={setCategory}
					description={description}
					setDescription={setDescription}
				/>

				<IngredientsEdit
					ingredients={ingredients}
					handleIngredientChange={handleIngredientChange}
					handleAddIngredient={handleAddIngredient}
					handleRemoveIngredient={handleRemoveIngredient}
					selectedIngredientIndex={selectedIngredientIndex}
				/>
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

/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState, useEffect } from "react";
import Ingredients from "../../components/sections/MiPerfil/Crear Receta/Ingredients";
import Steps from "../../components/sections/MiPerfil/Crear Receta/Steps";
import { Button } from "@nextui-org/react";
import { useAuth } from "@clerk/nextjs";
import { getAuthorId } from "@/libs/api/UserId";
import toast, { Toaster } from "react-hot-toast";
import FormFields from "@/components/sections/MiPerfil/Crear Receta/FormFields";
import { Categoria } from "@/libs/interfaces/categorias";
import { useRouter } from "next/navigation";

const notify = () => toast.success("Receta creada con éxito!");

const page = () => {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const [authorId, setAuthorId] = useState<string | null>(null);
	const { userId } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (userId) {
			getAuthorId(userId).then(id => {
				setAuthorId(id);
			});
		}
	}, [userId]);

	const [title, setTitle] = useState("");
	const [category, setCategory] = useState<Categoria | null>(null);
	const [description, setDescription] = useState("");
	const [photo, setPhoto] = useState("");
	const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);
	const [steps, setSteps] = useState([{ description: "" }]);
	const [likesCount, setLikesCount] = useState(0);
	const [creando, setCreando] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		setCreando(true);
		event.preventDefault();
		const recipe = {
			title,
			category: category?.title,
			description,
			photo: [photo],
			authorId,
			likesCount: likesCount,
			ingredients: ingredients.map(ingredient => ({
				name: ingredient.name,
				quantity: ingredient.quantity,
			})),
			steps: steps.map(step => ({
				description: step.description,
			})),
		};

		const response = await fetch(`${apiUrl}/recetas`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(recipe),
		});

		if (!response.ok) {
			const message = `Error al crear la receta: ${response.status} ${
				response.statusText
			}. ${await response.text()}`;
			throw new Error(message);
		}

		const responseData = await response.json();

		notify();
		FormReset();
		setCreando(false);
		router.push('/perfil');
	};

	const FormReset = () => {
		setTitle("");
		setCategory(null);
		setDescription("");
		setPhoto("");
		setIngredients([{ name: "", quantity: "" }]);
		setSteps([{ description: "" }]);
	};

	return (
		<div>
			<div>
				<Toaster position="top-center" />
			</div>
			<div className="max-w-lg flex flex-col justify-center mx-auto mt-6 mb-10 sm:border sm:border-gray-300 rounded-xl sm:p-3 px-2">
				<form onSubmit={handleSubmit}>
					<div className="pb-7 pt-2 px-2">
						<h1 className="text-left font-bold text-gray-900 text-2xl">
							Mi Receta.
						</h1>
						<p className="text-left font-semibold text-gray-500 text-lg">
							Crea las mejores recetas y compártelas con tus amigos.
						</p>
					</div>
					<div className="flex flex-col">
						<div className="flex flex-col items-center justify-center px-2 content-center">
							<FormFields
								title={title}
								setTitle={setTitle}
								category={category as Categoria}
								setCategory={setCategory}
								description={description}
								setDescription={setDescription}
								photo={photo}
								setPhoto={setPhoto}
							/>
						</div>
					</div>
					<Ingredients
						ingredients={ingredients}
						setIngredients={setIngredients}
					/>
					<Steps steps={steps} setSteps={setSteps} />
					<div className="border-t-1 border-gray-300 my-4">
						<Button
							color="success"
							className="mt-3 flex justify-center mx-auto"
							type="submit"
						>
							{creando ? "Creando..." : "Crear receta"}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default page;

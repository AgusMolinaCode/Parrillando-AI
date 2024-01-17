/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState, useEffect } from "react";
import Ingredients from "../../components/sections/MiPerfil/Crear Receta/Ingredients";
import Steps from "../../components/sections/MiPerfil/Crear Receta/Steps";
import { Input, Select, SelectItem, Textarea, Button } from "@nextui-org/react";
import { FaUser, FaTag } from "react-icons/fa";
import { List as CategoryList } from "@/libs/interfaces/categorias";
import { useAuth } from "@clerk/nextjs";
import { getAuthorId } from "@/libs/api/UserId";

const page = () => {
	const [authorId, setAuthorId] = useState<string | null>(null);
	const { userId } = useAuth();

	useEffect(() => {
		if (userId) {
			getAuthorId(userId).then(id => {
				setAuthorId(id); // Muestra el authorId en la consola
			});
		}
	}, [userId]);

	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("");
	const [description, setDescription] = useState("");
	const [photo, setPhoto] = useState("");
	const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);
	const [steps, setSteps] = useState([{ description: "" }]);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const recipe = {
			title,
			category,
			description,
			photo,
			authorId,
			ingredients,
			steps,
		};
		console.log(recipe);
	};

	return (
		<div>
			<div></div>
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
								value={category}
								label="Categoría"
								placeholder="Selecciona tu categoría"
								labelPlacement="outside"
								onChange={e => setCategory(e.target.value)}
								startContent={<FaTag size={20} color="#000" />}
								radius="lg"
								className="my-6"
								isRequired
							>
								{CategoryList.map(category => (
									<SelectItem key={category.id} value={category.id}>
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
							Enviar
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default page;

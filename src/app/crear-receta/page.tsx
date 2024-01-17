/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";
import Ingredients from "../../components/sections/MiPerfil/Crear Receta/Ingredients";
import Steps from "../../components/sections/MiPerfil/Crear Receta/Steps";

const page = () => {
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("");
	const [description, setDescription] = useState("");
	const [photo, setPhoto] = useState("");
	const [authorId, setAuthorId] = useState("");
	const [likesCount, setLikesCount] = useState(0);
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
			likesCount,
			ingredients,
			steps,
		};
		console.log(recipe);
	};

	return (
		<div>
			<div className="max-w-lg">
				<form onSubmit={handleSubmit}>
					<div className="text-center font-bold text-gray-500 text-xl py-7 px-2">
						<h1 className="text-left">Mi Receta.</h1>
						<p>Crea las mejores recetas y compártelas con tus amigos.</p>
					</div>
					<div className="grid">
						<div className="flex flex-col items-center justify-center px-2 content-center">
							<input
								type="text"
								value={title}
								onChange={e => setTitle(e.target.value)}
								placeholder="Título"
							/>
							<input
								type="text"
								value={category}
								onChange={e => setCategory(e.target.value)}
								placeholder="Categoría"
							/>
						</div>
						<div className="flex flex-col items-center justify-center px-2 content-center">
							<textarea
								value={description}
								onChange={e => setDescription(e.target.value)}
								placeholder="Descripción"
							></textarea>
							<input
								type="file"
								value={photo}
								onChange={e => setPhoto(e.target.value)}
								placeholder="URL de la foto"
							/>
						</div>
					</div>
					<Ingredients
						ingredients={ingredients}
						setIngredients={setIngredients}
					/>
					<Steps steps={steps} setSteps={setSteps} />
					<button type="submit">Enviar</button>
				</form>
			</div>
		</div>
	);
};

export default page;

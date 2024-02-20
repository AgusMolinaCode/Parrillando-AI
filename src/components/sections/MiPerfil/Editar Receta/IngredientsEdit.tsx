// IngredientsEdit.tsx
import React from "react";
import { Button, Input } from "@nextui-org/react";
import { Ingredient } from "@/libs/interfaces/Ingredient";

interface IngredientsEditProps {
	ingredients: Ingredient[];
	handleIngredientChange: (
		index: number,
		event: React.ChangeEvent<HTMLInputElement>
	) => void;
	handleAddIngredient: () => void;
	handleRemoveIngredient: (index: number) => void;
}

const IngredientsEdit: React.FC<IngredientsEditProps> = ({
	ingredients,
	handleIngredientChange,
	handleAddIngredient,
	handleRemoveIngredient,
}) => (
	<>
		{ingredients.map((ingredient, index) => (
			<div key={index} className="relative">
				<Input
					label={`Ingrediente ${index + 1}`}
					labelPlacement="outside"
					placeholder="Nombre del ingrediente"
					type="text"
					name={`ingredient-name-${index}`}
					id={`name${index}`}
					defaultValue={ingredient.name}
					onChange={event => handleIngredientChange(index, event)}
					className="my-2"
					radius="lg"
					isRequired
				/>
				<Input
					placeholder="Añade la cantidad"
					type="text"
					name={`ingredient-quantity-${index}`}
					id={`quantity${index}`}
					defaultValue={ingredient.quantity}
					onChange={event => handleIngredientChange(index, event)}
					className="pb-4"
					radius="lg"
					classNames={{
						input: "h-4",
						inputWrapper: "h-4",
					}}
					isRequired
				/>
			</div>
		))}
		<div className="flex justify-center mx-auto gap-2">
			<button
				type="button"
				className="text-blue-700 bg-transparent text-sm sm:text-md"
				onClick={handleAddIngredient}
			>
				Añadir ingrediente
			</button>
			<button
				type="button"
				color="danger"
				onClick={() => handleRemoveIngredient(ingredients.length - 1)}
				className="text-sm sm:text-md  rounded-xl p-1 text-red-600"
			>
				Eliminar
			</button>
		</div>
	</>
);

export default IngredientsEdit;

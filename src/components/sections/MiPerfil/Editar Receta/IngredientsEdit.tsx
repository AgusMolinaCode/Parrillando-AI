// IngredientsEdit.tsx
import React from 'react';
import { Button, Input } from '@nextui-org/react';

interface Ingredient {
    name: string;
    quantity: string;
}

interface IngredientsEditProps {
    ingredients: Ingredient[];
    handleIngredientChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddIngredient: () => void;
    handleRemoveIngredient: (index: number) => void;
    selectedIngredientIndex: number | null;
}

const IngredientsEdit: React.FC<IngredientsEditProps> = ({
    ingredients,
    handleIngredientChange,
    handleAddIngredient,
    handleRemoveIngredient,
    selectedIngredientIndex,
}) => (
    <>
        {ingredients.map((ingredient, index) => (
            <div key={index}>
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
        <div className="flex justify-center mx-auto">
            <Button
                type="button"
                className="text-blue-700 bg-transparent text-sm sm:text-md"
                onClick={handleAddIngredient}
            >
                Añadir ingrediente
            </Button>
            <Button
                type="button"
                className="text-red-700 bg-transparent text-sm sm:text-md flex justify-center mx-auto"
                onClick={() => {
                    if (selectedIngredientIndex !== null) {
                        handleRemoveIngredient(selectedIngredientIndex);
                    }
                }}
            >
                Eliminar ingrediente
            </Button>
        </div>
    </>
);

export default IngredientsEdit;
"use client";

import FormFieldsEdit from "@/components/sections/MiPerfil/Editar Receta/FormFieldsEdit";
import IngredientsEdit from "@/components/sections/MiPerfil/Editar Receta/IngredientsEdit";
import { RecetaId } from "@/libs/interfaces/RecetaId";
import { Step } from "@/libs/interfaces/Steps";
import { List, Categoria } from "@/libs/interfaces/categorias";
import { Textarea } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "@clerk/nextjs";

const notify = () => toast.success("Receta editada con éxito!");
const notifyError = () =>
  toast.error("No tienes permiso para editar esta receta.");

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
  const [steps, setSteps] = useState<Step[]>([]);
  const [users, setUsers] = useState<Array<{ id: number; clerkId: string }>>(
    []
  );

  const { userId } = useAuth();

  useEffect(() => {
    fetch(`${apiUrl}/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [apiUrl]);

  useEffect(() => {
    fetch(`${apiUrl}/recetas/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
        setTitle(data.title);
        setDescription(data.description);
        const categoryData = List.find((cat) => cat.title === data.category);
        if (categoryData) {
          setCategory(categoryData);
        }
        setIngredients(data.ingredients);
        setSteps(data.steps);
      });
  }, [apiUrl, id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex justify-center mx-auto font-bold text-3xl items-center">
        Cargando...
      </div>
    );
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const user = users.find((user) => user.clerkId === userId);

    if (!user) {
      notifyError();
      return;
    }

     if (recipe.authorId !== user.id) {
       notifyError();
       router.push(`/perfil`);
       return;
     }

     console.log("user", user.id);
     console.log("recipe", recipe.authorId);
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

    const updatedSteps = steps.map((step, index) => {
      const stepInput = form[`step-${index}`] as HTMLTextAreaElement;
      return {
        description: stepInput ? stepInput.value : "",
        recipeId: recipe.id,
      };
    });

    const updatedRecipe = {
      title: title,
      category: category.title,
      description: description,
      ingredients: updatedIngredients,
      steps: updatedSteps,
    };

    await fetch(`${apiUrl}/recetas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    });

    notify();
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

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };

  const handleRemoveIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleAddStep = () => {
    setSteps([...steps, { description: "", recipeId: recipe.id }]);
  };

  const handleRemoveStep = (id: number) => {
    setSteps((prevSteps) => prevSteps.filter((step) => step.id !== id));
  };

  return (
    <div className="sm:flex sm:justify-center sm:items-center px-2 bg-gray-100">
      <Toaster position="top-center" />
      <form
        className="bg-white shadow-md rounded px-2 mt-6 mb-8 p-4 flex flex-col sm:w-[600px] "
        onSubmit={handleSubmit}
      >
        <h1 className="mb-4 text-xl font-bold">Editar receta {recipe.title}</h1>
        <p>{recipe.authorId}</p>
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
        />

        {steps.map((step, index) => (
          <div key={index}>
            <Textarea
              className=""
              label={`Paso ${index + 1}`}
              labelPlacement="outside"
              name={`step-${index}`}
              defaultValue={step.description}
            />
          </div>
        ))}
        <div className="flex justify-center mx-auto gap-2">
          <button
            className="text-blue-700 bg-transparent text-sm sm:text-md"
            type="button"
            onClick={handleAddStep}
          >
            Añadir paso
          </button>
          <button
            type="button"
            className="text-sm sm:text-md rounded-xl p-1 text-red-600"
            onClick={() => {
              setSteps((prevSteps) => prevSteps.slice(0, -1));
            }}
          >
            Eliminar
          </button>
        </div>
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

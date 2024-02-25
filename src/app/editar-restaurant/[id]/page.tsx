"use client";

import FormFieldsEdit from "@/components/sections/MiPerfil/Editar Receta/FormFieldsEdit";
import { Gastronomia } from "@/libs/interfaces/Gastronomia";
import { Textarea } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "@clerk/nextjs";
import FormFieldsEditRestaurant from "@/components/sections/MiPerfil/Editar Restaurant/FormFieldsEditRestaurant";

const notify = () => toast.success("Restaurant editada con éxito!");
const notifyError = () =>
  toast.error("No tienes permiso para editar esta restaurant.");

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [restaurant, setRestaurant] = useState<Gastronomia | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [foodType, setFoodType] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [direction, setDirection] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [lng, setLng] = useState("");
  const [lat, setLat] = useState("");
  const [saving, setIsSaving] = useState(false);
  const [creando, setCreando] = useState(false);
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
    fetch(`${apiUrl}/gastronomia/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRestaurant(data);
        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price);
        setFoodType(data.foodType);
        setProvince(data.province);
        setCity(data.city);
        setWhatsapp(data.whatsapp);
        setDirection(data.direction);
        setZipCode(data.zipCode);
        setLng(data.lng);
        setLat(data.lat);
      });
  }, [apiUrl, id]);

  if (!restaurant) {
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

    if (restaurant.authorId !== user.id) {
      notifyError();
      router.push(`/perfil`);
      return;
    }

    console.log("user", user.id);
    console.log("recipe", restaurant.authorId);
    setIsSaving(true);

    const form = event.currentTarget as HTMLFormElement;

    const updatedRecipe = {
      title: title,
      description: description,
      price: price,
      foodType: foodType,
      province: province,
      city: city,
      whatsapp: whatsapp,
      direction: direction,
      zipCode: zipCode,
      lng: Number(lng),
      lat: Number(lat),
    };

    await fetch(`${apiUrl}/gastronomia/${id}`, {
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

  return (
    <div className="sm:flex sm:justify-center sm:items-center px-2 bg-gray-100">
      <Toaster position="top-center" />
      <form
        className="bg-white shadow-md rounded px-2 mt-6 mb-8 p-4 flex flex-col sm:w-[600px] "
        onSubmit={handleSubmit}
      >
        <h1 className="mb-4 text-xl font-bold">
          Editar receta {restaurant.title}
        </h1>
        <p>{restaurant.authorId}</p>
        <FormFieldsEditRestaurant
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          price={price}
          setPrice={setPrice}
          foodType={foodType}
          setFoodType={setFoodType}
          province={province}
          setProvince={setProvince}
          city={city}
          setCity={setCity}
          whatsapp={whatsapp}
          setWhatsapp={setWhatsapp}
          direction={direction}
          setDirection={setDirection}
          zipCode={zipCode}
          setZipCode={setZipCode}
          lng={lng}
          setLng={setLng}
          lat={lat}
          setLat={setLat}
        />

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

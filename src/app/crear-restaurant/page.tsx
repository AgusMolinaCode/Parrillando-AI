/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useAuth } from "@clerk/nextjs";
import { getAuthorId } from "@/libs/api/UserId";
import toast, { Toaster } from "react-hot-toast";
import FormFields from "../../components/sections/MiPerfil/Crear Restaurant/FormFieldsRestaurant";
import { useRouter } from "next/navigation";

const notify = () => toast.success("Restaurante creado con éxito!");

const page = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [authorId, setAuthorId] = useState<string | null>(null);
  const { userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (userId) {
      getAuthorId(userId).then((id) => {
        setAuthorId(id);
      });
    }
  }, [userId]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [foodType, setFoodType] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [direction, setDirection] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [lng, setLng] = useState("");
  const [lat, setLat] = useState("");
  const [creando, setCreando] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setCreando(true);
    event.preventDefault();
    const restaurant = {
      title,
      description,
      photo: [photo],
      price,
      foodType,
      province,
      city,
      whatsapp,
      direction,
      zipCode,
      lng: parseFloat(lng),
      lat: parseFloat(lat),
      authorId,
    };

    const response = await fetch(`${apiUrl}/gastronomia`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurant),
    });

    if (!response.ok) {
      const message = `Error al crear el restaurante: ${response.status} ${
        response.statusText
      }. ${await response.text()}`;
      throw new Error(message);
    }

    const responseData = await response.json();

    notify();
    FormReset();
    setCreando(false);
    router.push("/perfil");
  };

  const FormReset = () => {
    setTitle("");
    setDescription("");
    setPhoto("");
    setPrice("");
    setFoodType("");
    setProvince("");
    setCity("");
    setWhatsapp("");
    setDirection("");
    setZipCode("");
    setLng("");
    setLat("");
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
              Restaurant.
            </h1>
            <p className="text-left font-semibold text-gray-500 text-lg">
              Comparte tus lugares favoritos para comer con la comunidad.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center px-2 content-center">
              <FormFields
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                photo={photo}
                setPhoto={setPhoto}
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
            </div>
          </div>
          <div className="border-t-1 border-gray-300 my-4">
            <Button
              color="success"
              className="mt-3 flex justify-center mx-auto"
              type="submit"
            >
              {creando ? "Creando..." : "Crear restaurante"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;

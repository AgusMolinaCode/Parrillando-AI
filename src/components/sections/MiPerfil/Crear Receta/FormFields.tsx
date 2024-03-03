import React from "react";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { Categoria, List } from "@/libs/interfaces/categorias";
import { FaUser, FaTag } from "react-icons/fa";
import { CldUploadWidget } from "next-cloudinary";

interface Props {
  title: string;
  setTitle: (value: string) => void;
  category: Categoria;
  setCategory: (value: Categoria) => void;
  description: string;
  setDescription: (value: string) => void;
  photo: string;
  setPhoto: (value: string) => void;
}

const FormFields = ({
  title,
  setTitle,
  category,
  setCategory,
  description,
  setDescription,
  photo,
  setPhoto,
}: Props) => {
  return (
    <>
      <Input
        type="text"
        label="Titulo"
        placeholder="Añade un título"
        labelPlacement="outside"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        startContent={<FaUser size={20} color="#000" />}
        radius="lg"
        className="my-6"
        isRequired
      />
      <Select
        value={category?.title}
        label="Categoría"
        placeholder="Selecciona tu categoría"
        labelPlacement="outside"
        onChange={(e) => {
          const selectedCategory = List.find(
            (cat) => cat.title === e.target.value
          );
          if (selectedCategory) {
            setCategory(selectedCategory);
          }
        }}
        startContent={<FaTag size={20} color="#000" />}
        radius="lg"
        className="my-6"
        isRequired
      >
        {List.map((category) => (
          <SelectItem key={category.title} value={category.title}>
            {category.title}
          </SelectItem>
        ))}
      </Select>
      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        label="Description"
        labelPlacement="outside"
        placeholder="Descripción de la receta"
        className="mb-6"
        isRequired
      />
      <CldUploadWidget
        options={{
          maxFiles: 1,
          cropping: true,
        }}
        uploadPreset="parrillando"
        onSuccess={(results) => {
          if (results.info && typeof results.info !== "string") {
            console.log(results.info.secure_url);
            setPhoto(results.info.secure_url);
          }
        }}
      >
        {({ open }) => {
          return (
            <div className="mb-6 grid">
              <Button value={photo} onClick={() => open()}>
                Subir Imagen
              </Button>
            </div>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default FormFields;

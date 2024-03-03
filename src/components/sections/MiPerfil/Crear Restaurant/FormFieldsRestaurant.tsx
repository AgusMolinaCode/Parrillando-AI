import React from "react";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import {
  FaUser,
  FaTag,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaCity,
  FaMoneyBillWave,
  FaMapPin,
} from "react-icons/fa";
import { List } from "@/libs/interfaces/categorias";
import { CldUploadWidget } from "next-cloudinary";

interface Props {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  photo: string;
  setPhoto: (value: string) => void;
  price: string;
  setPrice: (value: string) => void;
  foodType: string;
  setFoodType: (value: string) => void;
  province: string;
  setProvince: (value: string) => void;
  city: string;
  setCity: (value: string) => void;
  whatsapp: string;
  setWhatsapp: (value: string) => void;
  direction: string;
  setDirection: (value: string) => void;
  zipCode: string;
  setZipCode: (value: string) => void;
  lng: string;
  setLng: (value: string) => void;
  lat: string;
  setLat: (value: string) => void;
}

const FormFieldsRestaurant = ({
  title,
  setTitle,
  description,
  setDescription,
  photo,
  setPhoto,
  price,
  setPrice,
  foodType,
  setFoodType,
  province,
  setProvince,
  city,
  setCity,
  whatsapp,
  setWhatsapp,
  direction,
  setDirection,
  zipCode,
  setZipCode,
  lng,
  setLng,
  lat,
  setLat,
}: Props) => {
  return (
    <>
      <Input
        type="text"
        label="Nombre"
        placeholder="Nombre del restaurante"
        labelPlacement="outside"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        startContent={<FaUser size={20} color="#000" />}
        radius="lg"
        className="my-6"
        isRequired
      />
      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        label="Descripción"
        labelPlacement="outside"
        placeholder="Descripción del restaurante"
        className="mb-6"
        isRequired
      />
      {/* <Input
        type="file"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        placeholder="URL de la foto"
        label="Foto"
        labelPlacement="outside"
        className="mb-6"
        multiple
        classNames={{
          input: "p-2",
        }}
        isRequired
      /> */}
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
            <div className="mb-6 grid w-full">
              <Button value={photo} onClick={() => open()}>
                Subir Imagen
              </Button>
            </div>
          );
        }}
      </CldUploadWidget>
      <Select
        label="Precio"
        placeholder="Precio"
        labelPlacement="outside"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        startContent={<FaMoneyBillWave size={20} color="#000" />}
        radius="lg"
        className="my-6"
        isRequired
      >
        <SelectItem key={1} value="$">
          $
        </SelectItem>
        <SelectItem key={2} value="$$">
          $$
        </SelectItem>
        <SelectItem key={3} value="$$$">
          $$$
        </SelectItem>
        <SelectItem key={4} value="$$$$">
          $$$$
        </SelectItem>
      </Select>
      <Select
        label="Tipo de comida"
        placeholder="Tipo de comida"
        labelPlacement="outside"
        onChange={(e) => setFoodType(e.target.value)}
        value={foodType}
        startContent={<FaTag size={20} color="#000" />}
        radius="lg"
        className="my-6"
        isRequired
      >
        {List.map((category) => (
          <SelectItem key={category.id} value={category.id}>
            {category.title}
          </SelectItem>
        ))}
      </Select>
      <Input
        type="text"
        label="Provincia"
        placeholder="Provincia"
        labelPlacement="outside"
        onChange={(e) => setProvince(e.target.value)}
        value={province}
        startContent={<FaMapMarkerAlt size={20} color="#000" />}
        radius="lg"
        className="my-6"
        isRequired
      />
      <Input
        type="text"
        label="Ciudad"
        placeholder="Ciudad"
        labelPlacement="outside"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        startContent={<FaCity size={20} color="#000" />}
        radius="lg"
        className="my-6"
        isRequired
      />
      <Input
        type="text"
        label="Whatsapp"
        placeholder="Whatsapp"
        labelPlacement="outside"
        onChange={(e) => setWhatsapp(e.target.value)}
        value={whatsapp}
        startContent={<FaWhatsapp size={20} color="#000" />}
        radius="lg"
        className="my-6"
        isRequired
      />
      <Input
        type="text"
        label="Dirección"
        placeholder="Dirección"
        labelPlacement="outside"
        onChange={(e) => setDirection(e.target.value)}
        value={direction}
        startContent={<FaMapPin size={20} color="#000" />}
        radius="lg"
        className="my-6"
        isRequired
      />
      <Input
        type="text"
        label="Código Postal"
        placeholder="Código Postal"
        labelPlacement="outside"
        onChange={(e) => setZipCode(e.target.value)}
        value={zipCode}
        startContent={<FaMapMarkerAlt size={20} color="#000" />}
        radius="lg"
        className="my-6"
        isRequired
      />
      <Input
        type="text"
        label="Longitud"
        placeholder="Longitud"
        labelPlacement="outside"
        onChange={(e) => {
          setLng(e.target.value);
        }}
        value={lng.toString()}
        startContent={<FaMapPin size={20} color="#000" />}
        radius="lg"
        className="my-6"
        isRequired
      />
      <Input
        type="text"
        label="Latitud"
        placeholder="Latitud"
        labelPlacement="outside"
        onChange={(e) => {
          setLat(e.target.value);
        }}
        value={lat.toString()}
        startContent={<FaMapPin size={20} color="#000" />}
        radius="lg"
        className="my-6"
        isRequired
      />
    </>
  );
};

export default FormFieldsRestaurant;

import { Gastronomia } from "@/libs/interfaces/Gastronomia";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";

interface FormFieldsEditRestaurantProps {
    title: string;
    setTitle: (value: string) => void;
    description: string;
    setDescription: (value: string) => void;
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

const FormFieldsEditRestaurant = ({
    title,
    setTitle,
    description,
    setDescription,
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
}: FormFieldsEditRestaurantProps) => {
  return (
    <div>
    <Input
        label="Título"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
    />
      <Textarea
        label="Descripción"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Select
        label="Precio"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      >
        <SelectItem key={1} value="$">$</SelectItem>
        <SelectItem key={2} value="$$">$$</SelectItem>
        <SelectItem key={3} value="$$$">$$$</SelectItem>
        <SelectItem key={4} value="$$$$">$$$$</SelectItem>
      </Select>
      <Input
        label="Tipo de comida"
        placeholder="Tipo de comida"
        value={foodType}
        onChange={(e) => setFoodType(e.target.value)}
      />
      <Input
        label="Provincia"
        placeholder="Provincia"
        value={province}
        onChange={(e) => setProvince(e.target.value)}
      />
      <Input
        label="Ciudad"
        placeholder="Ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Input
        label="Whatsapp"
        placeholder="Whatsapp"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
      />
      <Input
        label="Dirección"
        placeholder="Dirección"
        value={direction}
        onChange={(e) => setDirection(e.target.value)}
      />
      <Input
        label="Código Postal"
        placeholder="Código Postal"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <Input
        label="Longitud"
        placeholder="Longitud"
        value={lng.toString()}
        onChange={(e) => setLng(e.target.value)}
      />
      <Input
        label="Latitud"
        placeholder="Latitud"
        value={lat.toString()}
        onChange={(e) => setLat(e.target.value)}
      />
    </div>
  );
};

export default FormFieldsEditRestaurant;
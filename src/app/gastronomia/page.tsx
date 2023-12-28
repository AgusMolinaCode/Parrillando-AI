import React from "react";
import RestaurantGrid from "@/components/sections/Gastronomia/RestaurantGrid";
import { Gastronomia } from "@/libs/interfaces/Gastronomia";

async function getRestaurants(): Promise<Gastronomia[]> {
  const response = await fetch("http://localhost:3000/api/gastronomia");
  const restaurants = await response.json();
  console.log(restaurants);
  return restaurants;
}

const page = async () => {

  const restaurants = await getRestaurants();

  return (
    <div className="">
      <div className=" sm:mx-2 mt-5 sm:mt-10 ">
        <div>
          <h1 className="text-black text-4xl text-center  font-bold">
            Gastronomia
          </h1>
          <p className="text-center">
            Encuentra los mejores restaurantes y lugares para poder disfrutar en
            familia
          </p>
        </div>

        <div className="">
          <RestaurantGrid />
        </div>
      </div>
    </div>
  );
};

export default page;

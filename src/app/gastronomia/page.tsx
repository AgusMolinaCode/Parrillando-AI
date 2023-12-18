import RestaurantGrid from "@/components/sections/Gastronomia/RestaurantGrid";
import React from "react";

const page = () => {
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

        <div className="max-w-[1500px] flex justify-center mx-auto mt-5 gap-2 flex-wrap">
          <RestaurantGrid />
          <div className="bg-gray-500 h-[600px] w-[800px] hidden xl:block"></div>
        </div>
      </div>
    </div>
  );
};

export default page;

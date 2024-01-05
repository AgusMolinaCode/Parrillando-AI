import React from "react";
import { currentUser } from "@clerk/nextjs";

const MiPerfilMenu = async () => {
  const user = await currentUser();
  const userCode = user?.id

  console.log(userCode)

  return (
    <div>
      <div className="flex justify-center mx-auto">
        <h1 className="font-semibold  text-xl mt-2 text-gray-600">
          Panel de administracion:{" "}
          <span className="font-bold text-2xl text-black">
            {user?.firstName} {user?.lastName}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default MiPerfilMenu;

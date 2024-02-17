import React, { Suspense } from 'react';
import MiPerfilMenu from "@/components/sections/MiPerfil/MiPerfilMenu";
const MiPerfilHome = React.lazy(() => import("@/components/sections/MiPerfil/MiPerfilHome"));

const Page = () => {
  return (
		<div className="min-h-screen">
			<MiPerfilMenu />
			<div>
				<Suspense
					fallback={
						<div className="flex justify-center items-center font-semibold text-2xl mt-10">Cargando...</div>
					}
				>
					<MiPerfilHome />
				</Suspense>
			</div>
		</div>
	);
};

export default Page;
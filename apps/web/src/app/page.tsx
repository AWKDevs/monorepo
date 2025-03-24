import Image from "next/image";
import { LoadingSpin } from "@monorepo/ui";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-custom-light">
		<div className="flex flex-col items-center justify-center">
			<h1 className="text-4xl font-bold text-center">AWKDevs</h1>
		</div>

		<div className="min-h-screen flex flex-col justify-center items-center">
		  <h1 className="text-2xl font-bold mb-4">Cargando...</h1>
			<LoadingSpin/>
		</div>

    </div>
  );
}

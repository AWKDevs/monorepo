import Image from "next/image";
import { Toast, Form, LoadingSpin } from "@monorepo/ui";

export default function Home() {
  return (
	  <>
		<div className="flex flex-col items-center justify-center">
			<h1 className="text-4xl font-bold text-center">AWKDevs</h1>
		</div>

    <div className="grid grid-rows-1 grid-cols-3 gap-4 items-center justify-items-center min-h-screen sm:p-20 bg-custom-dark">

		<div className="min-h-screen flex flex-col justify-center items-center bg-(--custom-dark) text-(--custom-light) p-8">
		  <h1 className="text-2xl font-bold mb-4">Cargando...</h1>
			<LoadingSpin/>
		</div>

		<div className="min-h-screen flex flex-col justify-center items-center bg-(--custom-dark) text-(--custom-light) p-8">
		  <h1 className="text-2xl font-bold mb-4">Toast</h1>
			<Toast/>
		</div>

		<div className="min-h-screen flex flex-col justify-center items-center bg-(--custom-dark) text-(--custom-light) p-8">
		  <h1 className="text-2xl font-bold mb-4">Form</h1>
			<Form/>
		</div>

    </div>
	</>
  );
}

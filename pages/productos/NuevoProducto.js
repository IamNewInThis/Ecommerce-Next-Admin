import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import FormProducto from "@/components/FormProducto";

function NuevoProducto() {

  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Navegar a la ruta anterior
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <button className="btn-primary" onClick={handleGoBack}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
        </button>
        <h1 className="text-blue-900 text-xl">Agregar Producto</h1>
        <div></div> {/* Espacio vacío para ajustar el centrado */}
      </div>
      <FormProducto>
      </FormProducto>
    </Layout>
  );
}

export default NuevoProducto;

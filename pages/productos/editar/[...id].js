import FormProducto from "@/components/FormProducto";
import Layout from "@/components/Layout"
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

function editarProducto() {
    const router = useRouter();
    const [productoInfo, setProductoInfo] = useState(null);
    const handleGoBack = () => {
        router.back(); // Navegar a la ruta anterior
      };
    const { id } = router.query;
    useEffect(() => {
        if (!id) {
            return;
        }

        axios.get('/api/productos?id=' + id).then((response) => {
            //console.log("funciona", response.data)
            setProductoInfo(response.data)
        })
            .catch((error) => {
                console.error("Error en la llamada a la API:", error);
            });
    }, [id]);

    return (
        <Layout>
            <div className="flex justify-between items-center mb-4">
                <button className="btn-primary" onClick={handleGoBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                </button>
                <h1 className="text-blue-900 text-xl">Editar Producto</h1>
                <div></div> {/* Espacio vacío para ajustar el centrado */}
            </div>
            {productoInfo && (
                <FormProducto {...productoInfo}></FormProducto>
            )
            }

        </Layout>
    )
}

export default editarProducto
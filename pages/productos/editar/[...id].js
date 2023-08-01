import FormProducto from "@/components/FormProducto";
import Layout from "@/components/Layout"
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

function editarProducto() {
    const router = useRouter();
    const [productoInfo, setProductoInfo] = useState(null);
    const { id } = router.query;
    useEffect(() => {
        if (!id) {
            return;
        }

        axios.get('/api/productos?id=' + id).then((response) => {
            console.log("funciona", response.data)
            setProductoInfo(response.data)
        })
            .catch((error) => {
                console.error("Error en la llamada a la API:", error);
            });
    }, [id]);

    return (
        <Layout>
            <h1 className="text-blue-900 mb-2 text-xl">Editar{ }</h1>
            {productoInfo && (
                <FormProducto {...productoInfo}></FormProducto>
            )
            }

        </Layout>
    )
}

export default editarProducto
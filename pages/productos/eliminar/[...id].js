import Layout from "@/components/Layout"
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

function eliminarProducto() {
    const router = useRouter();
    const [productoInfo, setProductoInfo] = useState();
    const { id } = router.query;
    useEffect(() => {
        if (!id) {
            return;
        }

        axios.get('/api/productos?id=' + id).then(response => {
            setProductoInfo(response.data)
        });
    }, [id]);
    function irAtras() {
        router.push('/productos');
    }
    
    async function eliminarProducto(){
        await axios.delete('/api/productos?id=' + id);
        irAtras();
    }

    return (
        <Layout>
            <h1 className="text-blue-900 text-xl text-center">¿Seguro que quieres eliminar producto "{productoInfo?.nombre}"?</h1>

            <div className="flex gap-2 justify-center">
                <button className="btn-default" onClick={eliminarProducto}>Si</button>
                <button className="btn-red" onClick={irAtras}>No</button>
            </div>
        </Layout>
    )
}

export default eliminarProducto
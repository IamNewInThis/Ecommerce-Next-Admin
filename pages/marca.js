import Layout from "@/components/Layout"
import { useState } from "react"

function marca() {
    const [nombre, setNombre] = useState("");
    function guardarCategoria(){

    }

    return (
        <Layout>
           <h1>Marca</h1>
           <label>Nombre Categoria</label>
           <form onSubmit={guardarCategoria} className="flex gap-1">
                <input
                    className="mb-0"
                    type="text"
                    placeholder={"Nombre Categoria"}>
                </input>
           </form>
        </Layout>
    )
}

export default marca
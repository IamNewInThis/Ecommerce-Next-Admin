import Layout from "@/components/Layout"
import { useState } from "react";

function categoria() {
    const [nombre, setNombre] = useState("");
    function guardarCategoria() {

    }

    return (
        <Layout>
            <h1>Categorias</h1>
            <label>Nombre Categoria</label>
            <form onSubmit={guardarCategoria} className="flex gap-1">
                <input
                    className="mb-0"
                    type="text"
                    placeholder={"Nombre Categoria"}
                    onChange={ev => setNombre(ev.target.value)}
                    value={nombre}>
                </input>
            </form>
        </Layout>
    )

}

export default categoria
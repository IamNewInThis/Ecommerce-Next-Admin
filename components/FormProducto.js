
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function FormProducto({
    _id,
    nombre:existingNombre,
    categoria: existingCategoria,
    descripcion: existingDescripcion,
    precio: existingPrecio,
}) {
    const [nombre, setNombre] = useState( existingNombre||"");
    const [categoria, setCategoria] = useState(existingCategoria || "");
    const [precio, setPrecio] = useState( existingPrecio || "");
    const [descripcion, setDescripcion] = useState(existingDescripcion|| "");
    const [imagen, setImagen] = useState(null);

    const [irProductos, setIrProductos] = useState(false);
    const router = useRouter();
    console.log({_id})

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImagen(file);
    };

    async function saveProduct(ev) {
        ev.preventDefault();
        const data = {nombre, descripcion, categoria, precio };
        if(_id){
            //actualizar
            await axios.put('/api/productos', {...data,_id})
        }else{
            //crear
            await axios.post('/api/productos', data);
        }
        setIrProductos(true);
    }

    if (irProductos) {
        router.push('/productos')
    }

    return (
        <form onSubmit={saveProduct}>
            <h1 className="text-blue-900 mb-2 text-xl">Agregar Producto</h1>
            <label>Nombre</label>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(ev) => setNombre(ev.target.value)}
            ></input>

            <label>Categoria</label>
            <input
                type="text"
                placeholder="Categoria"
                value={categoria}
                onChange={(ev) => setCategoria(ev.target.value)}
            ></input>

            <label>Descripcion</label>
            <textarea
                placeholder="Descripcion"
                value={descripcion}
                onChange={(ev) => setDescripcion(ev.target.value)}
            ></textarea>

            <label>Precio</label>
            <input type="number" placeholder="Precio" value={precio} onChange={(ev) => setPrecio(ev.target.value)}></input>

            <label>Imagen</label>
            <input type="file" onChange={handleImageChange} />

            <button className="btn-primary" type="submit">
                Guardar
            </button>
        </form>
    );
}



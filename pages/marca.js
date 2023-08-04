import Layout from "@/components/Layout"
import { useEffect, useState } from "react";
import axios from "axios";
import { withSwal } from "react-sweetalert2";

function Marca({swal}) {
    const [nombre, setNombre] = useState("");
    const [marca, setMarca] = useState([]);
    const [editarMarca, setEditarMarca] = useState(null);

    useEffect(() => {
        fetchMarca();
    }, [])

    function fetchMarca() {
        axios.get('/api/marca').then(result => {
            setMarca(result.data);
        })
    }

    async function guardarMarca(ev) {
        ev.preventDefault();
        const data = {nombre}

        if (editarMarca) {
            data._id = editarMarca._id;

            await axios.put('/api/marca',data);
            setEditarCategoria(null);
        } else {
            await axios.post('/api/marca', data);
        }
        setNombre('');
        fetchMarca();
    }

    function editMarca(marca) {
        setEditarMarca(marca);
        setNombre(marca.nombre);
    }

    function eliminarMarca(marca){
        swal.fire({
            title: 'Estas seguro',
            text:`¿Quieres eliminar ${marca.nombre}?`,
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            cancelButtonColor:'#d55',
            confirmButtonColor:'#008f39',
            confirmButtonText: 'Si, Eliminar',
            
        }).then(async result =>{
            if(result.isConfirmed){
                const {_id} = marca;
                await axios.delete('/api/marca?_id='+_id);
                fetchMarca();
            }

        }).catch(error =>{

        });
    }


    return (
        <Layout>
            <h1>Marcas</h1>
            <label>Nueva Marca</label>
            <form onSubmit={guardarMarca} className="flex gap-1">
                <input
                    className="mb-0"
                    type="text"
                    placeholder={"Nombre Categoria"}
                    onChange={ev => setNombre(ev.target.value)}
                    value={nombre}>
                </input>
                <button type="submit" className="btn-default" py-1>Guardar</button>
            </form>

            <table className="basic mt-4">
                <thead>
                    <tr>
                        <td>
                            Nombre Marca
                        </td>
                        <td>
                            Acciones
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {marca.length > 0 && marca.map(marca => (
                        <tr>
                            <td>{marca.nombre}</td>
                            <td className="flex gap-2">
                                <button className="btn-editar" onClick={() => editMarca(marca)}>Editar</button>
                                <button className="btn-eliminar" onClick={()=>eliminarMarca(marca)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )

};

export default  withSwal (({swal}, ref) =>(
    <Marca swal={swal} />
));
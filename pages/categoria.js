import Layout from "@/components/Layout"
import { useEffect, useState } from "react";
import axios from "axios";
import { withSwal } from "react-sweetalert2";

function Categoria({swal}) {
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState([]);
    const [parentCategoria, setParentCategoria] = useState('');
    const [editarCategoria, setEditarCategoria] = useState(null);

    useEffect(() => {
        fetchCategoria();
    }, [])

    function fetchCategoria() {
        axios.get('/api/categoria').then(result => {
            setCategoria(result.data);
        })
    }

    async function guardarCategoria(ev) {
        ev.preventDefault();
        const data = {nombre,parentCategoria}

        if (editarCategoria) {
            data._id = editarCategoria._id;

            await axios.put('/api/categoria',data);
            setEditarCategoria(null);
        } else {
            await axios.post('/api/categoria', data);
        }
        setNombre('');
        fetchCategoria();
    }

    function editCategoria(categoria) {
        setEditarCategoria(categoria);
        setNombre(categoria.nombre);
        setParentCategoria(categoria.parent?._id)
    }

    function eliminarCategoria(categoria){
        swal.fire({
            title: 'Estas seguro',
            text:`¿Quieres eliminar ${categoria.nombre}?`,
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            cancelButtonColor:'#d55',
            confirmButtonColor:'#008f39',
            confirmButtonText: 'Si, Eliminar',
            
        }).then(async result =>{
            if(result.isConfirmed){
                const {_id} = categoria;
                await axios.delete('/api/categoria?_id='+_id);
                fetchCategoria();
            }

        }).catch(error =>{

        });
    }


    return (
        <Layout>
            <h1>Categorias</h1>
            <label>Nueva Categoria</label>
            <form onSubmit={guardarCategoria} className="flex gap-1">
                <input
                    className="mb-0"
                    type="text"
                    placeholder={"Nombre Categoria"}
                    onChange={ev => setNombre(ev.target.value)}
                    value={nombre}>
                </input>
                <select className="mb-0" value={parentCategoria} onChange={ev => setParentCategoria(ev.target.value)}>
                    <option value="">Sin categoría principal</option>
                    {categoria.length > 0 && categoria.map(categoria => (
                        <option value={categoria._id}>{categoria.nombre}</option>
                    ))}
                </select>
                <button type="submit" className="btn-default" py-1>Guardar</button>
            </form>

            <table className="basic mt-4">
                <thead>
                    <tr>
                        <td>
                            Nombre Categoria
                        </td>
                        <td>
                            Acciones
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {categoria.length > 0 && categoria.map(categoria => (
                        <tr>
                            <td>{categoria.nombre}</td>
                            <td className="flex gap-2">
                                <button className="btn-editar" onClick={() => editCategoria(categoria)}>Editar</button>
                                <button className="btn-eliminar" onClick={()=>eliminarCategoria(categoria)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )

};

export default  withSwal (({swal}, ref) =>(
    <Categoria swal={swal}></Categoria>
));
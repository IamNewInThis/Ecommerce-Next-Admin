
import { mongooseConnect } from "@/lib/mongoose";
import { Producto } from "../../models/Producto";

export default async function handle(req, res) {
    const { method } = req;
    await mongooseConnect();

    //GET
    if (method === 'GET') {
        if (req.query?.id) {
            res.json(await Producto.findOne({ _id: req.query.id }));
        } else {
            res.json(await Producto.find())
        }
    }

    //POST
    if (method === 'POST') {
        const { nombre, categoria, precio, descripcion, imagen, marca} = req.body;
        const productoDoc = await Producto.create({
            nombre, categoria, precio, descripcion, imagen, marca
        })
        res.json(productoDoc);
    }

    //PUT
    if (method === 'PUT') {
        const { nombre, categoria,descripcion, precio, imagen ,marca, _id } = req.body;
        //console.log({marca})
        await Producto.updateOne({ _id }, { nombre, categoria,descripcion, precio, imagen, marca });
        res.json(true)
    }

    //DELETE
    if (method === 'DELETE') {
        if (req.query?.id) {
            await Producto.deleteOne({ _id: req.query?.id });
            res.json(true)
        }
    }
}
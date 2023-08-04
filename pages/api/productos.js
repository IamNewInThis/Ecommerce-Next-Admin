
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
        const { nombre, categoria, precio, descripcion,imagen } = req.body;
        const productoDoc = await Producto.create({
            nombre, categoria, precio, descripcion, imagen
        })
        res.json(productoDoc);
    }

    //PUT
    if (method === 'PUT') {
        const { nombre, descripcion, categoria, precio, imagen, _id } = req.body;
        console.log({imagen})
        await Producto.updateOne({ _id }, { nombre, descripcion, categoria, precio, imagen });
        res.json(true)
    }

    //DELETE
    if (method === 'DELETE') {
        if (req.query?.id) {
            await Producto.deleteOne({_id: req.query?.id });
            res.json(true)
        }
    }
}

import { mongooseConnect } from "@/lib/mongoose";
import {Producto} from "../../models/Producto";

export default async function handle(req, res){
    const {method} = req;
    await mongooseConnect();
    
    //GET
    if(method === 'GET'){
        if(req.query?.id){
            res.json(await Producto.findOne({_id:req.query.id}));
        }else{
            res.json(await Producto.find()) 
        }
    }

    //POST
    if(method === 'POST'){
        const {nombre,categoria,precio,descripcion}= req.body;
        const productoDoc = await Producto.create({
            nombre, categoria, precio, descripcion
        })
        res.json(productoDoc);
    }
    
    //PUT
    if(method === 'PUT'){
        const {nombre, descripcion, categoria, precio, _id} = req.body;
        await Producto.updateOne({_id}, {nombre, descripcion, categoria, precio});
        res.json(true)
    }
}
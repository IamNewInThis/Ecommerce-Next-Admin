import { mongooseConnect } from "@/lib/mongoose";
import { Categoria } from "@/models/Categoria";

export default async function handle(req,res){
    const {method} = req;
    await mongooseConnect();  

    if(method === 'GET'){
        res.json(await Categoria.find().populate('parent'));
    }

    if(method === 'POST'){
        const {nombre,parentCategoria} = req.body;
        const categoriaDoc = await Categoria.create({nombre});
        res.json(categoriaDoc);
    }

    if(method === 'PUT'){
        const {nombre,parentCategoria,_id} = req.body;
        const categoriaDoc = await Categoria.updateOne({_id},{nombre});
        res.json(categoriaDoc);
    }

    if(method === 'DELETE'){
        const {_id} = req.query;
        await Categoria.deleteOne({_id});
        res.json('ok');
    }

}
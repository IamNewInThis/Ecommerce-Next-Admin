import { mongooseConnect } from "@/lib/mongoose";
import { Marca } from "@/models/Marca";

export default async function handle(req,res){
    const {method} = req;
    await mongooseConnect();  

    if(method === 'GET'){
        res.json(await Marca.find());
    }

    if(method === 'POST'){
        const {nombre} = req.body;
        const marcaDoc = await Marca.create({nombre});
        res.json(marcaDoc);
    }

    if(method === 'PUT'){
        const {nombre,_id} = req.body;
        const marcaDoc = await Marca.updateOne({_id},{nombre});
        res.json(marcaDoc);
    }

    if(method === 'DELETE'){
        const {_id} = req.query;
        await Marca.deleteOne({_id});
        res.json('ok');
    }

}
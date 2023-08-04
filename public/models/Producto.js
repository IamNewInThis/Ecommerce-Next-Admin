import mongoose from "mongoose";
import { Schema,model, models } from "mongoose";

const ProductoSchema = new Schema({
    nombre: {type: String, required: true},
    categoria : {type:mongoose.Types.ObjectId,ref:'Categoria'}, 
    precio: {type: Number},
    descripcion: String,
    imagen: [{type:String}],
    marca : {type:mongoose.Types.ObjectId,ref:'Marca'}, 

});

export const Producto = models.producto || model('producto',ProductoSchema )
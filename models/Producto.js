import { Schema,model, models } from "mongoose";

const ProductoSchema = new Schema({
    nombre: {type: String, required: true},
    categoria : String, 
    precio: {type: Number},
    descripcion: String

});

export const Producto = models.producto || model('producto',ProductoSchema )
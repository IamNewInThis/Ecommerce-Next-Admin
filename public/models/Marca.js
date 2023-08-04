const { Schema, models, model, default: mongoose } = require("mongoose");

const MarcaSchema = new Schema({
    nombre:{type:String, required: true},
    
});

export const Marca = models?.Marca || model('Marca',MarcaSchema);
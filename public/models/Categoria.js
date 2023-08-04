const { Schema, models, model, default: mongoose } = require("mongoose");

const CategoriaSchema = new Schema({
    nombre:{type:String, required: true},
    parent:{type:mongoose.Types.ObjectId, ref:'Categoria'},
    
});

export const Categoria = models?.Categoria || model('Categoria',CategoriaSchema);
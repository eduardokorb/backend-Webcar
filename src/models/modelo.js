const mongoose = require('../database');

const ModeloSchema = new mongoose.Schema ({
    name:{
        type: String,
        require: true,
    },
    versao:{
        type: String,
        require: true,
    },
    ano:{
        type: String,
        require : true,
    },
    kilometragem:{
        type: String,
        require:true,
    },
    cor: {
        type: String,
        require: true,
    },
    preco: {
        type: String,
        require: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const Modelo = mongoose.model('Modelo', ModeloSchema);

module.exports = Modelo;

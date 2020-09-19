const mongoose = require('../database');

const CarSchema = new mongoose.Schema ({
    marca:{
        type: String,
        require: true,
    },
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

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;

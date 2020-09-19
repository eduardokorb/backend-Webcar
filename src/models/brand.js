const mongoose = require('../database');

const BrandSchema = new mongoose.Schema ({
    name:{
        type: String,
        require: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const Brand = mongoose.model('Brand', BrandSchema);

module.exports = Brand;

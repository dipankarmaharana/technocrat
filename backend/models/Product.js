const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productname:{
        type:String,
        required:true
    },
    productimage:{
        type:String,
        required:true
    },
    productprice:{
        type:Number,
        required:true
    }

},{timestamps:true})

exports.Product = mongoose.model('product',productSchema);
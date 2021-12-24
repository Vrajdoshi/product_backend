const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    price:{
        type: Number,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    quntity:{
        type: Number,
        required : true
    },
    minQuntity:{
        type: Number,
        required:true
    },
    maxQuntity:{
        type: Number,
        required:true
    },
})

module.exports = mongoose.model('Product' , productSchema);
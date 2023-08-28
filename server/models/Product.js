const mongoose= require('mongoose');
const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    desc:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    categories:{
        type:Array,
        required:true,
    },
    size:{
        type:Array,
        required:true,
    },
    price:{
        type:String,
        required:true,
    } ,
    color:{
        type:Array,
    },
    inStock:{
        type:Boolean,
        default:true,
    }


    
},{timestamps:true});

module.exports = mongoose.model('Products',productSchema);

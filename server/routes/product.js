const Product=require('../models/Product.js');
const express=require('express');
const { verifyTokenAndAdmin } = require('./verifyToken.js');
const router=express.Router();


//add product
router.post('/',verifyTokenAndAdmin,async(req,res)=>{
    const newProduct=new Product(req.body);
    try{
        const savedProduct=await new Product.save();
       return res.status(200).json({status:"success",message:savedProduct()});
    }
    catch(err){
        return res.status(500).json({status:"fail",message:err.message});
    }
})
router.put('/:id',verifyTokenAndAdmin,async(req,res)=>{
    try{
        const updatedProduct=await Product.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        return res.status(404).json({status:"success",message:updatedProduct});
    }
    catch(err){
        return res.status(500).json({status:"fail",message:err.message});
    }
})
router.delete('/:id',verifyTokenAndAdmin,async(req,res)=>{
    try{
     await Product.findByIdAndDelete(req.params.id);
        return res.status(404).json({status:"success",message:"Product Deleted"});
    }
    catch(err){
        return res.status(500).json({status:"fail",message:err.message});
    }
})
//all products
router.get('/',async(req,res)=>{
    try{
    const products= await Product.find();
        return res.status(200).json({status:"success",message:products});
    }
    catch(err){
        return res.status(500).json({status:"fail",message:err.message});
    }
})
router.get('/find/:id',async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
        return res.status(200).json({status:"success",message:product});
    }
    catch(err){
        return res.status(500).json({status:"fail",message:err.message});
    }
})
// router.get('/',(req,res)=>{
//     const category=req.query.category;
//     let allProducts;
//     if(category){
//         allProducts = Product.find({
//             categories:{
//                 $in:[category],
//             },
//         })
//     }
//     else
//     allProducts = Product.find();
//     res.status(200).json({status:"success",message:allProducts});
// })
module.exports=router;
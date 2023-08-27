const Product=require('../models/Product.js');
const express=require('express');
const { verifyTokenAndAdmin } = require('./verifyToken.js');
const router=express.Router();


//add product
router.post('/',async(req,res)=>{
    const newProduct=new Product(req.body);
    // console.log(newProduct)
    try{
        const savedProduct=await newProduct.save();
       return res.status(200).json({status:"success",message:savedProduct});
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
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({status:"success",message:product});
  } catch (err) {
    res.status(500).json({status:"error",message:err.message});
  }
});



  
  //GET ALL PRODUCTS
  router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    console.log(req.query);
    try {
      let products;
  
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find();
      }
      console.log(products);
      res.status(200).json({result:"success",message:products});
    } catch (err) {
      res.status(500).json({result:"error",message:err.message});
    }
  });

module.exports=router;
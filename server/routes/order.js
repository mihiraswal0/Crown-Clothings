const Order=require('../models/Order.js');
const express=require('express');
const { verifyTokenAndAdmin,verifyTokenAndAuthenticate } = require('./verifyToken.js');
const  router=express.Router();


//add product
router.post('/',verifyTokenAndAuthenticate,async(req,res)=>{
    const newOrder=new Order(req.body);
    try{
        const savedOrder=await new Order.save();
       return res.status(200).json({status:"success",message:savedOrder()});
    }
    catch(err){
        return res.status(500).json({status:"fail",message:err.message});
    }
})
router.put('/:id',verifyTokenAndAdmin,async(req,res)=>{
    try{
        const updatedOrder=await Order.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        return res.status(404).json({status:"success",message:updatedOrder});
    }
    catch(err){
        return res.status(500).json({status:"fail",message:err.message});
    }
})
router.delete('/:id',verifyTokenAndAuthenticate,async(req,res)=>{
    try{
     await Order.findByIdAndDelete(req.params.id);
        return res.status(404).json({status:"success",message:"Order Deleted"});
    }
    catch(err){
        return res.status(500).json({status:"fail",message:err.message});
    }
})
//all products
router.get('/',async(req,res)=>{
    try{
    const order= await Order.find();
        return res.status(200).json({status:"success",message:order});
    }
    catch(err){
        return res.status(500).json({status:"fail",message:err.message});
    }
})
router.get('/find/:id',async(req,res)=>{
    try{
        const order=await Order.find({userId:req.params.id});
        return res.status(200).json({status:"success",message:order});
    }
    catch(err){
        return res.status(500).json({status:"fail",message:err.message});
    }
})
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports=router;
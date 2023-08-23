const express= require('express');
const router=express.Router();
const CryptoJS = require('crypto-js');
const User=require('../models/User');
const {verifyTokenAndAuthenticate,verifyTokenAndAdmin} = require('./verifyToken.js');

router.put('/:id',verifyTokenAndAuthenticate,async(req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString();
    }
    try{
        const updatedUser=await User.findByIdAndUpdate({_id:req.params.id},{
            $set:req.body
        },{new:true});
        res.status(200).send({status:"true",message:"User Successfully verified"});
    }
    catch(err){
        res.status(500).json({status:"fail",message:err.message});
    }
})

router.delete("/:id",verifyTokenAndAuthenticate,async(req,res)=>{
    try{
        await UserByIdAndDelete(req.params.id);
        return res.status(200).send({success:true,message:"User Deleted Successfully"});
    }
    catch(err){
        res.status(500).send({success:false,message:err.message});
    }

})
router.get("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
       const findUser=await User.findById(req.params.id);
       findUser.password=undefined;
       res.status(200).send({success:true,message:findUser});
    }
    catch(err){
        res.status(500).send({success:false,message:err.message});
    }

})
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try{
       const allUser=await User.find();
    //    findUser.password=undefined;
       res.status(200).send({success:true,message:findUser});
    }
    catch(err){
        res.status(500).send({success:false,message:err.message});
    }

})
module.exports=router;
const express = require('express');
const router=express.Router();
const User=require('../models/User.js');
 const cryptojs=require('crypto-js');
require('dotenv').config(); 

router.post("/register",async(req,res)=>{
     console.log(req.body);
    
    const newUser=new User({
        username: req.body.username,
        email: req.body.email,
        password: cryptojs.AES.encrypt(req.body.password,process.env.SECRET_KEY)
    })
    try{
    const saveuser=await newUser.save();
    res.status(400).json(saveuser);
    }
    catch(err){
        res.status(500).json(err.message);
    }

 });
 router.post('/login',async(req,res)=>{
    const {email, password} =req.body;
    try{
        const findUser=await User.findOne({email});
        console.log(findUser);
        if(!findUser)
        {
         return  res.status(500).json({status:"fail",message:"No User Found"});
        
        }
        const decryptedpass=cryptojs.AES.decrypt(findUser.password,process.env.SECRET_KEY);
        const hashedPassword=decryptedpass.toString(cryptojs.enc.Utf8);
        // console.log(hashedPassword);
        findUser.password = undefined;
        if(password!=hashedPassword)
        {
            return res.status(500).json({status:"fail",message:"Invalid Password"});
        }
        return res.json({status:"success",message:findUser});
    }
    catch(err){
        return res.status(500).json({status:"fail",message:err.message});
    }
 })
module.exports=router;
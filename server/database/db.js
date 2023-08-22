 const mongoose = require('mongoose');
 require('dotenv').config();
//  console.log(process.env.MONGO_URL)
 mongoose.connect(process.env.MONGO_URL)
.then(()=>
 console.log("Connected to Database")).catch((err)=>{
    console.log(err.message);
 });
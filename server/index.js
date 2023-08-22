const express=require('express');
const app= express();
require('dotenv').config();
require('./database/db.js');
const port=process.env.PORT ||5000;
const userRoute=require('./routes/user.js');

app.use('/api/users',userRoute);
app.listen(port,()=>{
    console.log("Server Running on Port :"+port);
})
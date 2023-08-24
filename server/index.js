const express=require('express');
const app= express();
const bodyParser= require('body-parser');
require('dotenv').config();
require('./database/db.js');
const port=process.env.PORT ||5000;
const userRoute=require('./routes/user.js');
const authRoute=require('./routes/auth.js');
const productsRoute=require('./routes/product.js');
const ordersRoute=require('./routes/order.js');
const stripeRoute=require('./routes/stripe.js');
//middelware
app.use(bodyParser.json());
//routes

app.use('/api/users',userRoute);
app.use('/api/auth',authRoute);
app.use('/api/products',productsRoute);
app.use('/api/orders',ordersRoute);
app.user('/api/checkout',stripeRoute);
app.listen(port,()=>{
    console.log("Server Running on Port :"+port);
})
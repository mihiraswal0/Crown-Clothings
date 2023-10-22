const express=require('express');
const path=require('path');
const app= express();
const cors=require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const Stripe=require('stripe')(process.env.STRIPE_SECRET_KEY);
const port=8000 ;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));



app.post("/pay", async (req, res) => {
    console.log(req.body.token);
    await Stripe.charges.create({
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd",
    });
  });
  // -----------Deplyments -----------
  const __dirname1 = path.resolve();
  console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}


  app.get('/',(req,res)=>{
    res.send("Api running");
    console.log("Api running");
  })


app.listen(process.env.PORT,()=>{
  console.log("Listening on port 8000");
})


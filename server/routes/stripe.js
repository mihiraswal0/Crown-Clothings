const router=require('router').Router();
const stripe=require('stripe')(process.env.STRIPE_KEY);

router.post('/payment',(req,res)=>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"rupee",
    },(stripeErr,stripeRes)=>{
        if(stripeErr)
        res.status(500).json({status:"success",message:stripeErr});
    else
    res.status(200).json({status:"success",message:stripeRes});
    })
});
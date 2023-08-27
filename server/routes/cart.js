const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAndAuthenticate,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json({status:"success",message:savedCart});
  } catch (err) {
    res.status(500).json({status:"fail",message:err.message});
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAuthenticate, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({status:"success",message:updatedCart});
  } catch (err) {
    res.status(500).json({status:"fail",message:err.message});
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthenticate, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({status:"success",message:"Cart deleted"});
  } catch (err) {
    res.status(500).json({status:"fail",message:err.message});
  }
});

//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthenticate, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json({status:"success",message:cart});
  } catch (err) {
    res.status(500).json({status:"fail",message:err.message});
  }
});

// //GET ALL

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json({status:"success",message:carts});
  } catch (err) {
    res.status(500).json({status:"success",message:err.message});
  }
});

module.exports = router;
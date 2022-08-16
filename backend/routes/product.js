const express = require("express");
const fs = require("fs");
const {Product}=require("../models/Product");
const Auth = require('../middlewares/Auth')
const router = express.Router();

router.get("/", (req, res) => {
    try {
        Product.find().then((result)=>{
            return res.status(200).json({
                message:"Product retrieved successfully",
                result
            })
        }).catch((err)=>{
            return res.status(500).json({
                message:"Something went wrong",
                error:err.message
            })
        })
    } catch (err) {
        return res.status(500).json({ error:err.message });
    }
    
  });

router.post("/add",Auth, (req, res) => {
    try {

        console.log('reached the add route')
        const{productname,productimage,productprice} = req.body;

        if(productname==''&& error==''){
            error="Missing Product Name"
            res.status(400).json({
                message:error
            })
        }
        if(productprice==''&& error==''){
            error="Missing Price"
            res.status(400).json({
                message:error
            })
        }

        const productObj = {
            productname,
            productimage,
            productprice
        }

        const product = new Product(productObj);
        product.save().then((result)=>{
            return res.status(200).json({
                message:"Data saved successfully",
                result
            })
        })
        .catch((err)=>{
            return res.status(500).json({
                message:"Something went wrong",
                error:err.message
            })
        })


    } catch (err) {
        return res.status(500).json({ error:err.message });
    }
});

router.delete('/delete/:id',async(req,res)=>{
    try {

        await Product.findByIdAndDelete(req.params.id)
        return res.status(200).json({
        message: "Data deleted successfully"
    })
    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong",
            error:err.message
        })
    }

})

router.put('/update/:id',async(req,res)=>{
    try {
        const {id} = req.params;
    const {productname,productimage,productprice} = req.body;
    await Product.findByIdAndUpdate(id,{productname,productimage,productprice})
    return res.status(200).json({
        message: "Data updated successfullly"
    })
    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong",
            error:err.message
        })
    }
})

module.exports = router
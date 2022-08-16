const express = require('express')
const bcrypt = require('bcryptjs')
const {User} = require('../models/User')
const jwt = require('jsonwebtoken')
const router = express.Router();

router.post('/add',async(req,res)=>{
    try {
        let {username,useremail,userpwd} = req.body;
    /**generate password hash */
    const salt = await bcrypt.genSalt(10);
    userpwd = await bcrypt.hash(userpwd,salt);

    const user = new User({username,useremail,userpwd});
    await user.save();
    return res.status(200).json({
        message:"user saved successfully",
        user
    })
    } catch (err) {
        return res.status(500).json({
            message:"something went wrong",
            error:err.message
        }) 
    }
    

})

router.post('/login',async(req,res)=>{
    try {
        const {useremail,userpwd} = req.body;

    const user = await User.findOne({useremail});
    if(user){
        const verifyUser = await bcrypt.compare(userpwd,user.userpwd);
        if(verifyUser){
            const payload = {
                user:{
                    id:user._id,
                    username:user.username
                }
            }
            const token = jwt.sign(payload,'silicon',{expiresIn:3600})
            res.status(200).json({
                message:"Logged In",
                user:{userid:user._id,useremail:user.useremail},
                token
            })
        }else{
            res.status(401).json({
                message:"Wrong username/password"
            })
        }
    }else{
        res.status(401).json({
            message:"Wrong username/password"
        })
    }
    } catch (err) {
        res.status(401).json({
            message:"Something went wrong"
        })
    }

    
})

module.exports = router
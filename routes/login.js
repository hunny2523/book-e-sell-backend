const express = require('express');
const router = express.Router();
const User = require('../models/register');


router.post('/',(req,res)=>{
    const {email,password}=req.body
    User.findOne({email:email,password:password},(err,user)=>{
        if(user){
            res.send({message:"Login sccessful"})
        }
        else{
            res.send({message:"Invalid email or password"})
        }
    })   
})
module.exports = router;
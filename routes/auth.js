const express = require('express');
const router = express.Router();
const User = require('../models/register');
// const { body, validationResult } = require('express-validator');

// router.post('/', [
//     body('firstName', 'Enter a valid name').isLength({ min: 3 }),
//     body('lastName', 'Enter a valid name').isLength({ min: 3 }),
//     body('email', 'Enter a valid email').isEmail(),
//     body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
// ], async (req, res) => {
//     // If there are errors, return Bad request and the errors
//     console.log(req.body);
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     // Check whether the user with this email exists already
//     let user = await User.findOne({ email: req.body.email });
//     if (user) {
//         return res.status(400).json({ error: "Sorry a user with this email already exists" })
//     }
//     User.create({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         password: req.body.password,
//         email: req.body.email,
//     }).then(user => res.json(user))
       
// })


router.post('/',async (req,res)=>{
    const {firstName,lastName,email,password}=req.body
     User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already exists"})
        }
        else{
            const user=new User({
                firstName,
                lastName,
                email,
                password
            })
            user.save(err=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send({message:"Successfully registered"})
                }
            })
        }
    })   
})
module.exports = router;
var express = require('express');
var router = express.Router();
const Feedback = require("../models/feedback");
const auth = require('../middleware/auth');


router.post("/",auth,(req,res,next)=>{
    console.log(req.body.feedback);
    Feedback.create({name:req.body.feedback.name,email:req.body.feedback.email,feedback:req.body.feedback.feedback},(err,res)=>{
        if(!err){
            console.log("One Feedback added successfully!");
            res.send({msg:'Feedback added successfully!'});
        } 
        else console.log(err);
    })
})

module.exports = router;
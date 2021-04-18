var express = require('express');
var router = express.Router();
const User = require("../models/user");
const jwt = require('jsonwebtoken');

router.post('/',async (req,res,next)=>{
    const user = new User({name:req.body.props.name,email:req.body.props.email,password:req.body.props.password});
    try{
        var token = jwt.sign({_id:user._id.toString()},'Akshay9400!',{expiresIn:'2 days'});
        user.token=token;
        await user.save();
        res.send({success:true,user:user});
    }catch(error){
        console.log(error);
        res.status(409);
        res.send({success:false,error:error});
    }
})


router.post('/auth',async (req,res,next)=>{
    try{
        const user = await User.userLogin(req.body.props.email,req.body.props.password);
        var token = jwt.sign({_id:user._id.toString()},'Akshay9400!',{expiresIn:'2 days'});
        user.token = token;
        await user.save();
        res.send({name:user.name,email:user.email,authToken:token});
    }
    catch(error){
        res.status(400).send(error);
        }
});


module.exports = router;
var jwt = require('jsonwebtoken')

const auth = async (req,res,next)=>{
    const token = req.header('authorization');
    if(token){
    jwt.verify(token,'Akshay9400!',(err,decoded)=>{
        if(!err){
            console.log("Valid auth token");
            next();
        }
        else{
            res.status(401).send();
        }
    })
    }
    else{
        res.send(401).send();
    }
}

module.exports = auth;
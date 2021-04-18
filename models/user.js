const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error('Invalid Email!')
            }
        }
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String,
        required:true
    }
});


UserSchema.statics.userLogin = async (email,password)=>{
    const user = await User.find({email:email});
    if(!user.length){
        throw new Error('No user found!');
        return;
    }
    const login = await bcrypt.compare(password,user[0].password);
    if(!login){
        throw new Error('Incorrect Password!');
        return;
    }
    return user[0];
}

UserSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,8);
    }
    next();
})



var User = mongoose.model('User',UserSchema);

module.exports = User;
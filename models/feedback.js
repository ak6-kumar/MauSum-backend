const mongoose = require("mongoose");


const feedbackSchema = new mongoose.Schema({
    name : {
        type : String,
        required: 'Required'
    },
    email:{
        type:String,
        required: "Required"
    },
    feedback:{
        type:String,
        required:'Required',
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error('Invalid Email!')
            }
        }
    }
})


var feedback = mongoose.model("Feedback",feedbackSchema);

module.exports = feedback;

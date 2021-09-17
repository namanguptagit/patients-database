const { text } = require("express");
const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    mobile : {
        type:Number,
        required:true,
        unique:true
    },
    gender : {
        type:String,
        required:true,
    },
    age :{
        type:Number,
        required:true
    },
    symptoms :{
        type:String,
    },
    medicine:{
        type:String,
        required:true
    }


})
// now we need to create a collection

const Register = new mongoose.model("Register",employeeSchema);
module.exports= Register;
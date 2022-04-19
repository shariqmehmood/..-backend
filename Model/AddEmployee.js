const { number, string, required } = require("joi");
const mongoose = require("mongoose");
const AddEmployee = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Qualification: {
        type: String,
        required: true,
    },
    Attendancepercent: {
        type:String,
        required: true,
    },
    Post: {
        type: String,
        required: true,
    },
    url:{
        type:String,
        required:true
    }
})

let AddEmployeeScheema = mongoose.model("AddEmployeeScheema", AddEmployee);
module.exports = AddEmployeeScheema;
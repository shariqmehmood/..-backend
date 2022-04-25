const mongoose=require("mongoose")
const AcceptLeave=mongoose.Schema({
    Email: {
        type: String,
        required: true,
    },Name: {
        type: String,
        required: true,
    },
    LeaveType: {
        type: String,
        required: true,
    },
    Date: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        required: true,
    },
    
})



let AcceptLeaveFromEmployee = mongoose.model("AcceptLeave", AcceptLeave);
module.exports = AcceptLeaveFromEmployee;
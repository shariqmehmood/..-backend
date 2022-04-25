const mongoose=require("mongoose")
const RejectLeave=mongoose.Schema({
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



let RejectLeaveFromEmployee = mongoose.model("RejectLeave", RejectLeave);
module.exports = RejectLeaveFromEmployee;
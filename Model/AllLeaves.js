const mongoose=require("mongoose")
const AllLeaves=mongoose.Schema({
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



let AllLeavesFromEmployee = mongoose.model("AllLeaves", AllLeaves);
module.exports = AllLeavesFromEmployee;
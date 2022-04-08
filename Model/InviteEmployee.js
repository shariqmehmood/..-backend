 const mongoose=require("mongoose");
const InviteUser=mongoose.Schema({
  
    Email:{
        type:String,
        required:true,
    },
    Message:{
        type:String,
        required:true,
    },
})

let InviteUserScheem=mongoose.model("UserInvite",InviteUser);
module.exports=InviteUserScheem;

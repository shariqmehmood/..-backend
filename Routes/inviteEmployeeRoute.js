const express=require("express");
let routes=express.Router();
const {CreateInviteUserData}=require("../Controller/InviteEmpController")

routes.post("/InviteEmployee",CreateInviteUserData);

module.exports=routes;

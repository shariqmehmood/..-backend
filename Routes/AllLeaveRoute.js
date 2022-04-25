
const express = require("express");
const AcceptLeave=require("../Model/AcceptLeave")
let routes = express.Router();
const {CreateAllLeaveData}=require("../Controller/AllLeavesController")
const {AllLeaves} =require("../Controller/getAllLeaves")
routes.post("/addleave", CreateAllLeaveData);
routes.get("/getAllLeave",AllLeaves)
module.exports = routes;


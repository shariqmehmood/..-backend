const express = require("express");
let routes = express.Router();
const {CreateRejectLeaveData}=require("../Controller/RejectLeaveConntroller")
const {RejectLeave}=require("../Controller/getRejectLeaveController")
routes.post("/rejectLeave", CreateRejectLeaveData);
routes.get("/getRejectleave", RejectLeave);
module.exports = routes;
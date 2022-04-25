const express = require("express");
let routes = express.Router();
const {CreateAcceptLeaveData}=require("../Controller/AcceptLeavecontroller")
const{AcceptLeave}=require("../Controller/getAcceptLeave")
routes.post("/acceptleave", CreateAcceptLeaveData);
routes.get("/getAcceptleave", AcceptLeave);
module.exports = routes;
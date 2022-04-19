const express = require("express");
let routes = express.Router();
const { CreateAddEmployeeData } = require("../Controller/addEmployeeController")
const { AllEmployeeData } = require("../Controller/getAllEmployeeData")
routes.get("/AllEmployee", AllEmployeeData);
routes.post("/AddEmployee", CreateAddEmployeeData);

module.exports = routes;

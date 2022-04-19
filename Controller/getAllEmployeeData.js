const express = require("express");
const mongoose = require("mongoose");
const AllEmployeeData = require("../Model/AddEmployee")
module.exports = {
    AllEmployeeData: async (req, res) => {
        AllEmployeeData.find({})
            .then(result => {
                console.log(result.length)
                res.send(result)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            })
    }
}


const express = require("express");
const mongoose = require("mongoose");
const cors =require("cors");
let app  =express();
app.use(express.json());

mongoose.connect("mongodb+srv://AttendenceWeb:Attendenceweb@cluster0.t2oaq.mongodb.net/EmployeeAttendanceDatabase?retryWrites=true&w=majority");
mongoose.connection.once('open', () => {
    console.log(' <-----Database Connected----->');
});
mongoose.connection.on('error', () => {
    console.log("<---data base not Connect--->")
});
app.use(cors());



const InviteEmployee = require("./Routes/inviteEmployeeRoute");
app.use('/' ,InviteEmployee);

let PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log("run Port on 3001")
});
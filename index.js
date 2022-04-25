const express = require("express");
const mongoose = require("mongoose");
const cors =require("cors");
const fileUpload=require("express-fileupload")
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
const AddEmployee=require("./Routes/AddEMployeeRoute")
const AllEmployeeData=require("./Routes/AddEMployeeRoute")
const CreateAllLeaveData=require("./Routes/AllLeaveRoute")
const getAllLeave=require("./Routes/AllLeaveRoute")
const AcceptLeave=require("./Routes/AcceptLeaveRoute")
const RejectLeave=require("./Routes/RejectLeaveRoute")
app.use(fileUpload({
    useTempFiles:true
}))
app.use('/' ,InviteEmployee);
app.use('/',getAllLeave)
app.use('/' ,AddEmployee);
app.use('/' ,CreateAllLeaveData);
app.use('/' ,AllEmployeeData);
app.use('/' ,AcceptLeave);
app.use('/' ,RejectLeave);



let PORT = process.env.PORT || 3001;
app.use(express.static("public"));
app.use("/public", express.static("public"));
app.listen(PORT, () => {
    console.log("run Port on 3001")
});
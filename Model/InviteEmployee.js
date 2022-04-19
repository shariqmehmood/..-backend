const mongoose = require("mongoose");
const InviteUser = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Message: {
        type: String,
        required: true,
    },
})

let InviteUserScheema = mongoose.model("InviteUserScheema", InviteUser);
module.exports = InviteUserScheema;

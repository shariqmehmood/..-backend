const InviteUserScheem = require("../Model/InviteEmployee");
// const nodemailer = require("nodemailer");
// const { getMaxListeners } = require("../Model/InviteEmployee");
const ApiKey = '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'
const sgEmail = require("@sendgrid/mail")

module.exports = {

    CreateInviteUserData: async (req, res) => {
        try {
            sgEmail.setApiKey(ApiKey)
            const Message = {
                to: req.body.Email,
                from: "sabk70056@gmail.com",
                subject: "Hello from Shariqmehmood",
                text: "Hello from Shariqmehmood",
                html: `<h1 style="border:2px solid black;text-align:center" >${req.body.Message}</h1>`
            }
            let InviteuserData = new InviteUserScheem({
                Email: req.body.Email,
                Message: req.body.Message

            })
            sgEmail.send(Message)
                .then(res => console.log("Email send...."))
                .catch(error => console.log("error"))

            res.send({
                status: 200,
                sucess: true,
                msg: "User Invite Success",
            })
        }
        catch (err) {
            console.log(err)
            res.send({
                status: 400,
                sucess: false,
                msg: "server err",
            })

        }
    }
}
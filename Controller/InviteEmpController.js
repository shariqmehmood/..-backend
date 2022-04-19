const InviteUserScheema = require("../Model/InviteEmployee");
const ApiKey = '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'
const sgEmail = require("@sendgrid/mail")
module.exports = {
    CreateInviteUserData: async (req, res) => {
        try {
            // send mail
            sgEmail.setApiKey(ApiKey)
            const Message = {
                to: req.body.Email,
                from: "myasirkhan575@gmail.com",
                subject: "NocodeAi",
                text: "Hello from NocodeAI.org",
                html: `<h1 style="border:2px solid black;text-align:center">${req.body.Message}</h1>`
            }
            // Chack Email if Email ia occur show err
            const Email = req.body.Email;
            console.log("email ", Email)
            let checkEmail = await InviteUserScheema.findOne({ Email: Email }).exec()
            console.log(checkEmail, "check email")
            if (checkEmail) {
                return res.send({
                    status: 400,
                    sucess: false,
                    msg: "user Already invites",
                })
            }
            let InviteuserData = new InviteUserScheema({
              Name: req.body.Name,
                Email: req.body.Email,
                Message: req.body.Message
            })
            if (req.body.Email === "") {
                res.send({
                    status: 203,
                    sucess: false,
                    msg: "ALl Feild Required",
                })
        }
            else if (req.body.Message === "") {
                res.send({
                    status: 203,
                    sucess: false,
                    msg: "ALl Feild Required",
                })
            }
            else {
                sgEmail.send(Message)
                    .then(res => console.log("Email send...."))
                    .catch(error => console.log("error"))
                res.send({
                    status: 201,
                    sucess: true,
                    msg: "User Invite Success",
                })
                console.log(InviteuserData)
                InviteuserData.save()
            }
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
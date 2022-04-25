const AddEmployeeScheema = require("../Model/AddEmployee");
const InviteUserScheema = require("../Model/InviteEmployee");
const cloudinary = require("cloudinary").v2
cloudinary.config({
    cloud_name: 'nocodeai',
    api_key: '339174152542682',
    api_secret: 'JKBd50yx0mZSaWr0fm2VjgZKfA4',
    secure: true
});
module.exports = {
    CreateAddEmployeeData: async (req, res) => {

        try {
            const { body } = req
            const Email = req.body.Email;
            console.log(Email, "===>User Email")
            
            //ckecking empolyee profile is created if profile is created is created show err.msg userAlready Create profile
            const CheckEmployeeProfile = await AddEmployeeScheema.findOne({ Email: Email })
            // console.log("user profile found", CheckEmployeeProfile)
            // Checking employee is iunvited from admin
            const checkemail = await InviteUserScheema.findOne({ Email: Email })
            // console.log("email is found", checkemail)
            if (CheckEmployeeProfile) {
                return res.send({
                    status: 400,
                    sucess: false,
                    msg: "Employee Profile Already Exists",
                })
            }

            const file = req.files.photo;
            // console.log(req.files,"req.files")
            console.log("file.tempFilePath", file.tempFilePath)
            console.log(req.files.path,"files.path")
            cloudinary.uploader.upload(file.tempFilePath, (err, result) => {

                body.url = result.url
                console.log(body,"body")
                console.log(body.url,"body.url")

                let AddEmployeeData = new AddEmployeeScheema(body)
                console.log(AddEmployeeData)
                AddEmployeeData.save().then(() => {
                    return res.send({
                        status: 201,
                        sucess: true,
                        msg: "Employee profile Added Successfully",
                    })
                }).catch((e) => {
                    return res.send({
                        sucess: false,
                        msg: "something went wrong",
                    })
                })

            })


        }
        catch (err) {
            console.log(err)
            return res.send({
                status: 400,
                sucess: false,
                msg: "server err",
            })

        }
    }
}
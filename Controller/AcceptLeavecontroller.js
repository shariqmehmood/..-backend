const AcceptLeaveFromEmployee = require("../Model/AcceptLeave")
const AllLeaves=require("../Model/AllLeaves")

module.exports = {

    CreateAcceptLeaveData: async (req, res) => {
        try {
            const { body } = req
            console.log(body)
            const _id = req.body.LeaveId
            console.log(_id)
            const deleteleave = await AllLeaves.findByIdAndDelete({_id})
            console.log(deleteleave,"deletedObj")
            if(!deleteleave){
                return res.send({
                    sucess: false,
                    msg: "some thing went wrong not find",
                })
            }
            let AcceptLeaveData = new AcceptLeaveFromEmployee({

                Name: req.body.Name,
                Email: req.body.Email,
                Date: req.body.Date,
                LeaveType: req.body.LeaveType,
                Status:"Accepted"
            }
            )
            AcceptLeaveData.save().then(() => {
                return res.send({
                    status: 201,
                    sucess: true,
                    msg: "Leave Accepted ",
                })
            }).catch((e) => {
                return res.send({
                    sucess: false,
                    msg: "some thing went wrong",
                })
            })
        } catch (error) {
            return res.send({
                status: 500,
                sucess: false,
                msg: "Server Error",
            })
        }
    }
}
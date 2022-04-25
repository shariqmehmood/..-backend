const RejectLeaveFromEmployee = require("../Model/RejectLeave")
const AllLeaves = require("../Model/AllLeaves")

module.exports = {

    CreateRejectLeaveData: async (req, res) => {
        try {
            const { body } = req
            console.log(body)
            const _id = req.body.LeaveId
            console.log(_id)
            const deleteleave = await AllLeaves.findByIdAndDelete({ _id })
            console.log(deleteleave, "delete")
            if (!deleteleave) {
                return res.send({
                    sucess: false,
                    msg: "some thing went wrong not find",
                })
            }
            let RejectLeave = new RejectLeaveFromEmployee({

                Name: req.body.Name,
                Email: req.body.Email,
                Date: req.body.Date,
                LeaveType: req.body.LeaveType,
                Status: "Rejected"
            }
            )
            RejectLeave.save().then(() => {
                return res.send({
                    status: 201,
                    sucess: true,
                    msg: "Leave Rejected ",
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
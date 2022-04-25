const AllLeavesFromEmployee = require("../Model/AllLeaves")
module.exports = {

    CreateAllLeaveData: async (req, res) => {
        try {
            const { body } = req
            const Name = req.body.Name
            console.log(Name)

            let AddLeaveData = new AllLeavesFromEmployee(body)

            AddLeaveData.save().then(() => {
                return res.send({
                    status: 201,
                    sucess: true,
                    msg: "Leave send to admin Successfully",
                })
            }).catch((e) => {
                return res.send({
                    sucess: false,
                    msg: "something went wrong",
                })
            })
        }
        catch (error) {
            console.log(error)
            return res.send({
                status: 400,
                sucess: false,
                msg: "server Error",
            })
        }
    }
}

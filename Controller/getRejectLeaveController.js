
const RejectLeave = require("../Model/RejectLeave")
module.exports = {
    RejectLeave: async (req, res) => {
        RejectLeave.find({})
            .then(result => {
                // console.log(result.length)
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
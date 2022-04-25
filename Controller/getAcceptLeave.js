
const AcceptLeave = require("../Model/AcceptLeave")

module.exports = {
    AcceptLeave: async (req, res) => {
        

        AcceptLeave.find({})
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
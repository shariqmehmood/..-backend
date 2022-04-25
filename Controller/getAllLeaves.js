
const AllLeaves = require("../Model/AllLeaves")
module.exports = {
    AllLeaves: async (req, res) => {
        AllLeaves.find({})
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



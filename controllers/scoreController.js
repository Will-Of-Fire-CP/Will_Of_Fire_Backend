const scoreModel = require("../models/scoreModel.js")

const getScore = async (req, res) => {
    try {
        let data = await scoreModel.getScoreDB(req.params.id)
        res.send(data);
    } catch (err) {
        res.send({ friends: false });
    }
}

const addScore = async (req, res) => {
    try {
        let { user_id, score } = req.body;
        let data = await scoreModel.addScoreDB(user_id, score)
        res.send(data);
    } catch (err) {
        res.send({ friends: false });
    }
}

module.exports = {
    getScore,
    addScore
}
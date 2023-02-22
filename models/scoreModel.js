const pool = require("../db.js");

const getScoreDB = async (user_id) => {
    const data = await pool.query("SELECT score from highscore WHERE user_id = $1 ORDER BY score DESC", [user_id]).then(result => { return result.rows });
    return data
}

const addScoreDB = async (user_id, score) => {
    const data = await pool.query("INSERT INTO highscore(user_id, score) VALUES($1,$2) RETURNING *", [user_id, score])
    return data
}

module.exports = {
    getScoreDB,
    addScoreDB
}
const pool = require("../db.js");

const getFriendsByID = async (user_id) => {
    const data = await pool.query("SELECT friend_id, user_name, user_score FROM (SELECT * FROM friends WHERE user_id = $1) AS friendstwo JOIN users ON users.user_id = friendstwo.friend_id", [user_id]).then(result => { return result.rows });
    return data
}

const removeFriendDB = async (user_id, friend_id) => {
    let data = await pool.query("DELETE FROM friends WHERE user_id = $1 AND friend_id = $2 RETURNING *", [user_id, friend_id]).then(result => { return result.rows });
    pool.query("DELETE FROM friends WHERE user_id = $1 AND friend_id = $2 RETURNING *", [friend_id, user_id])
    return data;
}
module.exports = {
    getFriendsByID,
    removeFriendDB
}
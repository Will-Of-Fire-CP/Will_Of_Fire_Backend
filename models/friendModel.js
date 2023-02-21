const pool = require("../db.js");

const getFriendsByID = async (user_id) => {
    const data = await pool.query("SELECT friend_id, user_name, user_score FROM (SELECT * FROM friends WHERE user_id = $1) AS friendstwo JOIN users ON users.id = friendstwo.friend_id", [user_id]).then(result => { return result.rows });
    return data
}

module.exports = {
    getFriendsByID,
}
const pool = require("../db.js");
const { search } = require("../routes/friendRequestsRouter.js");

const createAcountDB = async (user_name, useremail, password) => {
    const data = await pool.query("INSERT INTO users(user_name, user_email,user_password) VALUES($1,$2, $3) RETURNING *", [user_name, useremail, password]).then(result => { return result.rows });
    return data
}

const getUserDataDB = async (user_name) => {
    const data = await pool.query("SELECT * FROM users WHERE user_name = $1", [user_name]).then(result => { return result.rows });
    return data
}

const getUserDB = async (name) => {
    const data = await pool.query("SELECT user_name, user_id, user_score from users WHERE user_name = $1;", [name]).then(result => { return result.rows });
    return data
}

const checkFriendListDB = async (user_id, search_id) => { 
    const data = await pool.query("SELECT * FROM friends WHERE user_id = $1 AND friend_id = $2",[user_id, search_id]).then(result => { return result.rows });
    return data[0]
}
module.exports = {
    createAcountDB,
    getUserDataDB,
    getUserDB,
    checkFriendListDB
}
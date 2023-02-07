const pool = require("../db.js");

const friendRequestDB = async () => {
    const data = await pool.query("SELECT * FROM friend_request").then(result => { return result.rows });
    return data
}



module.exports = {
    friendRequestDB
}
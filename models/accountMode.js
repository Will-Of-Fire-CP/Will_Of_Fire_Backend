const pool = require("../db.js");

const createAcountDB = async (user_name, useremail, password) => {
    const data = await pool.query("INSERT INTO users(user_name, user_email,user_password) VALUES($1,$2, $3) RETURNING *", [user_name, useremail, password]).then(result => { return result.rows });
    return data
}

const getUserDataDB = async (user_name) => {
    const data = await pool.query("SELECT * FROM users WHERE user_name = $1", [user_name]).then(result => { return result.rows });
    return data
}
module.exports = {
    createAcountDB,
    getUserDataDB
}
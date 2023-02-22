const pool = require("../db.js");

// const registerInfo = async (companyName, email, userName, password) => {
//     const register = await pool.query("INSERT INTO public.business_users (company_name,email,username,password) VALUES($1, $2, $3, $4) RETURNING *", [companyName, email, userName, password]).then(result => result.rows[0])
//     return register
// }

const friendRequestDB = async () => {
    const data = await pool.query("SELECT * FROM friend_request").then(result => { return result.rows });
    return data
}

const getFriendRequestsByIDDB  = async (user_id) =>{
    const data = await pool.query("SELECT * FROM friend_request WHERE request_to_id = $1", [user_id]).then(result => { return result.rows });
    return data
}
const sendFriendRequest = async (user_id, request_to) => {
    const data = await pool.query("INSERT INTO friend_request(user_id, request_to_id) VALUES($1, $2) RETURNING *", [user_id, request_to]).then(result => { return result.rows });
    return data
}

const acceptFriendRequestDB = async (user_id, request_to_id) => {
    pool.query("INSERT INTO friends(user_id, friend_id) VALUES($1,$2)", [request_to_id, user_id]);
    const data = await pool.query("INSERT INTO friends(user_id, friend_id) VALUES($1,$2) RETURNING *", [user_id, request_to_id]).then(result => { return result.rows });
    return data
}

const removeFruendRequestDB = async (friend_request_id) => {
    const data = await pool.query("DELETE FROM friend_request WHERE friend_request_id = $1 RETURNING *", [friend_request_id]).then(result => { return result.rows });
    return data
}

module.exports = {
    friendRequestDB,
    getFriendRequestsByIDDB,
    sendFriendRequest,
    acceptFriendRequestDB,
    removeFruendRequestDB
}
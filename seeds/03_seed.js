/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('friend_request').del()
  await knex('friend_request').insert([
    { user_id: 1, request_to_id: 1 },
    { user_id: 2, request_to_id: 1 },
    { user_id: 3, request_to_id: 1 },
    { user_id: 4, request_to_id: 1 },
    { user_id: 5, request_to_id: 1 },
    { user_id: 6, request_to_id: 1 },
    { user_id: 7, request_to_id: 1 },
    { user_id: 8, request_to_id: 1 },
    { user_id: 9, request_to_id: 1 },
    { user_id: 10, request_to_id: 1 }
  ]);
};

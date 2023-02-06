/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('friend_request').del()
  await knex('friend_request').insert([
    { user_id: 1, request_to_id: 3}
  ]);
};

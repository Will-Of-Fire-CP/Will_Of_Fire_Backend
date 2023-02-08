/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('friends').del()
  await knex('friends').insert([
    { user_id: 2, friend_id: 2 },
    { user_id: 1, friend_id: 2 },
    { user_id: 3, friend_id: 2 },
    { user_id: 4, friend_id: 2 },
    { user_id: 5, friend_id: 2 },
    { user_id: 6, friend_id: 2 },
    { user_id: 7, friend_id: 2 },
    { user_id: 8, friend_id: 2 },
    { user_id: 9, friend_id: 2 },
    { user_id: 10, friend_id: 2 }
  ]);
};

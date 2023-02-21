/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('friends').del()
  await knex('friends').insert([
    { user_id: 2, friend_id: 1 },
    { user_id: 1, friend_id: 2 },
    { user_id: 3, friend_id: 2 },
    { user_id: 2, friend_id: 3 },
    { user_id: 1, friend_id: 3 },
    { user_id: 3, friend_id: 1 }
  ]);
};

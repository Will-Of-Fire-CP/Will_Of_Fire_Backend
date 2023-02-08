/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('highscore').del()
  await knex('highscore').insert([
    { user_id: 1, score: 1231923 },
    { user_id: 2, score: 1234 },
    { user_id: 3, score: 1234 },
    { user_id: 4, score: 1234 },
    { user_id: 5, score: 1234 },
    { user_id: 6, score: 1234 },
    { user_id: 7, score: 1234 },
    { user_id: 8, score: 1234 },
    { user_id: 9, score: 1234 },
    { user_id: 10, score: 1234 },
  ]);
};

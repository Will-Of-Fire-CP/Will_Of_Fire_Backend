/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('highscore').del()
  await knex('highscore').insert([
    { user_id: 1, score: 1231923}
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      user_name: 'test 1',
      user_email: 'test@test.org',
      user_score: 0,
      user_location: 'x:00,z:00,y:00'
    },
  ]);
};

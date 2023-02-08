const bcrypt = require("bcrypt");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      user_name: 'test1', user_email: 'test@test.org', user_password: bcrypt.hashSync("test1",10), 
      user_score: 0, user_location: 'x:00,z:00,y:00'
    },
    { 
      user_name: 'test2', user_email: 'test@test.org', user_password: bcrypt.hashSync("test1", 10), 
      user_score: 0, user_location: 'x:00,z:00,y:00'
    },
    { 
      user_name: 'test3', user_email: 'test@test.org', user_password: bcrypt.hashSync("test1", 10), 
      user_score: 0, user_location: 'x:00,z:00,y:00' 
    },
    { 
      user_name: 'test4', user_email: 'test@test.org', user_password: bcrypt.hashSync("test1", 10), 
      user_score: 0, user_location: 'x:00,z:00,y:00' 
    },
    { 
      user_name: 'test5', user_email: 'test@test.org', user_password: bcrypt.hashSync("test1", 10), 
      user_score: 0, user_location: 'x:00,z:00,y:00' 
    },
    { 
      user_name: 'test6', user_email: 'test@test.org', user_password: bcrypt.hashSync("test1",10), 
      user_score: 0, user_location: 'x:00,z:00,y:00' 
    },
    { 
      user_name: 'test7', user_email: 'test@test.org', user_password: bcrypt.hashSync("test1",10), 
      user_score: 0, user_location: 'x:00,z:00,y:00' 
    },
    { 
      user_name: 'test8', user_email: 'test@test.org', user_password: bcrypt.hashSync("test1",10), 
      user_score: 0, user_location: 'x:00,z:00,y:00' 
    },
    { 
      user_name: 'test9', user_email: 'test@test.org', user_password: bcrypt.hashSync("test1",10), 
      user_score: 0, user_location: 'x:00,z:00,y:00' 
    },
    { 
      user_name: 'test10', user_email: 'test@test.org', user_password: bcrypt.hashSync("test1",10), 
      user_score: 0, user_location: 'x:00,z:00,y:00' 
    }
  ]);
};



/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      user_name: 'test1', user_email: 'test@test.org', user_password: "$2b$10$uj0pP5L4YOmPj9rlGp3Z5ut790UbHi4R5UaMz2rHxuFn2k2bzyBTu", 
      user_score: 0, user_location: 'x:00,z:00,y:00'
    },
    { 
      user_name: 'test2', user_email: 'test@test.org', user_password: "$2b$10$tGZAZQJFTKHMe14giUGziOti.g7OKQ/crhKxNbEQz2vt58.Q94L/G", 
      user_score: 0, user_location: 'x:00,z:00,y:00'
    },
    { 
      user_name: 'test3', user_email: 'test@test.org', user_password: "$2b$10$TTzXK9phnTQ7BFuGsCKbd.s/4nWHHxvu1/GtbJlDKYurOrw2oa3Bm", 
      user_score: 0, user_location: 'x:00,z:00,y:00' 
    },
    { 
      user_name: 'test4', user_email: 'test@test.org', user_password: "$2b$10$5wlROsMQlS8AUkyRzuzdzODwlB3Rx4Im9VHw0wcOtjUJqsEXE276.", 
      user_score: 0, user_location: 'x:00,z:00,y:00' 
    },
    { 
      user_name: 'test5', user_email: 'test@test.org', user_password: "$2b$10$lICojf0BT1VkrnGgxZJvyexaObeTzTNRYw3fSUXuhM04VAYoZ.XXW", 
      user_score: 0, user_location: 'x:00,z:00,y:00' 
    },
    { 
      user_name: 'test6', user_email: 'test@test.org', user_password: "$2b$10$Dj2JRH7y/6Ff8thplZD0y.VDtoSnBkK/CuBmKwMREhaO6vQu.dmIu", 
      user_score: 0, user_location: 'x:00,z:00,y:00' 
    },
    { 
      user_name: 'test7', user_email: 'test@test.org', user_password: "$2b$10$Vn8sII06Dy7tS0/NoreWf.NKWyj/DlchqBUNbbTGywUP3YZAkiyPi", 
      user_score: 0, user_location: 'x:00,z:00,y:00' 
    },
    { 
      user_name: 'test8', user_email: 'test@test.org', user_password: "$2b$10$6//kEeLlJDul4PefI0uKDegGWqmgYiioAUIsupnMC.cxqF3puGZS.", 
      user_score: 0, user_location: 'x:00,z:00,y:00' 
    },
    { 
      user_name: 'test9', user_email: 'test@test.org', user_password: "$2b$10$0Jmhh4S/Y9pVy1FqAOSMAO0Ui9QL88x5yUOZDXmQBeJ2VXOmp2nrO", 
      user_score: 0, user_location: 'x:00,z:00,y:00' 
    },
    { 
      user_name: 'test10', user_email: 'test@test.org', user_password: "$2b$10$Xmn2jrrVHb6Rb6yMadjpG.XvDrM8mQhGZ9m2nZB1ZsZ8q7klu8Zoi", 
      user_score: 0, user_location: 'x:00,z:00,y:00' 
    }
  ]);
};



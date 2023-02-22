/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => { 
        table.increments('user_id').primary();
        table.string('user_name').notNullable().unique();
        table.string('user_email').notNullable();
        table.string('user_password').notNullable();
        table.integer('user_score').notNullable().defaultTo(0);
        table.string('user_location').notNullable().defaultTo("x:0,z:0,y:0");
        // table.timestamps('created_at').defaultTo(knex.fn.now());
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("users");
};

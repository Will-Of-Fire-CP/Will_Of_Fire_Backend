/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => { 
        table.increments('id').primary();
        table.string('user_name').notNullable();
        table.string('user_email').notNullable();
        table.string('user_password').notNullable();
        table.integer('user_score').notNullable().defaultTo(0);
        table.string('user_location').notNullable().defaultTo("");
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("users");
};

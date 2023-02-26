// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  // development: {
  //   client: 'pg',
  //   connection: {
  //     database: 'aldair',
  //     user: "aldair",
  //     password: "a",
  //   }
  // },

  // production: {
  //   client: 'pg',
  //   connection: {
  //     database: 'aldair',
  //     user:     'aldair',
  //     password: 'a'
  //   },

    development: {
      client: 'pg',
      connection: {
        database: 'Postgres',
        user: "",
        password: "",
      }
    },

    production: {
      client: 'pg',
      connection: {
        database: 'Postgres',
        user: '',
        password: ''
      },
    
      
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

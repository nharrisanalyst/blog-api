// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'blogdb',
      user:     'nathanharris',
      password: 'blogdb1234'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory:'./db/migrations'
    },
    seeds:{
      directory:'./db/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory:'./db/migrations',
      tableName: 'knex_migrations'

    },
    seeds:{
      directory:'./db/seeds'
    }
  }

};

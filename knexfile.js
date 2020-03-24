module.exports = {
  development: {
    client: 'pg',
    connection:{
      host: "127.0.0.1", // Your local host IP
      user: "postgres", // Your postgres user name
      password: "McRib", // Your postgres user password
      database: "items" // Your database name
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:{
      host: "127.0.0.1", // Your local host IP
      user: "postgres", // Your postgres user name
      password: "McRib", // Your postgres user password
      database: "testdb" // Your database name
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: {
      host: "127.0.0.1", // Your local host IP
      user: "postgres", // Your postgres user name
      password: "McRib", // Your postgres user password
      database: "testdb" // Your database name
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  }
}
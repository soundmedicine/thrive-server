require('dotenv').load()

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///thrive'
    
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};

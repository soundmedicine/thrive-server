const CONFIG = require('./knexfile')[process.env.NODE_ENV || 'development']

const knex = require('knex')(CONFIG)

knex.migrate.latest([CONFIG])

module.exports = knex
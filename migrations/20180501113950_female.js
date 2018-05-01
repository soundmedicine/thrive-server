exports.up = function(knex, Promise) {
    return knex.schema.createTable('female', table => {
        table.increments().primary()
        table.date('dateOfBirth')
        table.date('dateOfMeasurement')
        table.float('head')
        table.float('length')
        table.float('height')
        table.float('weight')
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('female')
  }
  
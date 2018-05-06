exports.up = function(knex, Promise) {
  return knex.schema.createTable('female', table => {
    table.increments().primary()
    table.string('sex')
    table.date('dateOfBirth')
    table.float('birth')
    table.float('month1')
    table.float('month2')
    table.float('month4')
    table.float('month6')
    table.float('month9')
    table.float('month12')
    table.float('month15')
    table.float('month18')
    table.float('month24')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('female')
}
  
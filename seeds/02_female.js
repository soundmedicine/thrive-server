exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "female"; ALTER SEQUENCE female_id_seq RESTART WITH 4;')
    .then(function () {
      
      let females = [{
        id: 1,
        sex: 'f',
        dateOfBirth: new Date('2016-01-25'),
        birth: 3.325,
        month1: 4.238,
        month2: 5.075,
        month4: 5.953,
        month6: 7.343,
        month9: 7.654,
        month12: 8.661,
        month15: 9.185,
        month18: 9.752,
        month24: 11.5
      }, {
        id: 2,
        sex: 'f',
        dateOfBirth: new Date('2016-09-27'),
        birth: 3.255,
        month1: 4,
        month2: 4.734,
        month4: 6.5,
        month6: 6.96,
        month9: 8,
        month12: 9.015,
        month15: 9.837,
        month18: 9.809,
        month24: 11
      }, {
        id: 3,
        sex: 'f',
        dateOfBirth: new Date('2015-12-19'),
        birth: 3.315,
        month1: 4,
        month2: 4.394,
        month4: 5.046,
        month6: 6,
        month9: 7,
        month12: 8.066,
        month15: 8.25,
        month18: 8.817,
        month24: 10
      }]

      return knex('female').insert(females)
    })
}

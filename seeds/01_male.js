exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "male"; ALTER SEQUENCE male_id_seq RESTART WITH 4;')
    .then(function () {
      
      let males = [{
        id: 1,
        sex: 'm',
        dateOfBirth: new Date('2016-2-25'),
        birth: 2.77,
        month1: 5,
        month2: 5.5,
        month4: 6,
        month6: 7.584,
        month9: 8.703,
        month12: 9.809,
        month15: 10.6,
        month18: 11,
        month24: 13.3
      }, {
        id: 2,
        sex: 'm',
        dateOfBirth: new Date('2015-06-11'),
        birth: 2.784,
        month1: 4.153,
        month2: 5.202,
        month4: 6.62,
        month6: 7.5,
        month9: 8.321,
        month12: 8.5,
        month15: 9,
        month18: 9.327,
        month24: 9.5
      }, {
        id: 3,
        sex: 'm',
        dateOfBirth: new Date('2016-01-25'),
        birth: 2.665,
        month1: 4,
        month2: 4.451,
        month4: 5.287,
        month6: 5.897,
        month9: 6.846,
        month12: 7.626,
        month15: 8.193,
        month18: 8.6,
        month24: 9.582
      }]

      return knex('male').insert(males)
    })
}

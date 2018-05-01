exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "female"; ALTER SEQUENCE female_id_seq RESTART WITH 4;')
    .then(function () {
      
      let females = [{
        id: 1,
        dateOfBirth: new Date('1982-03-03'),
        dateOfMeasurement: new Date('2018-03-03'),
        head: 43,
        length: 100.1,
        height: 151.63,
        weight: 40
      }, {
        id: 2,
        dateOfBirth: new Date('1983-12-28'),
        dateOfMeasurement: new Date('2018-12-28'),
        head: 40,
        length: 87.12,
        height: 160.03,
        weight: 38.7
      }, {
        id: 3,
        dateOfBirth: new Date('1979-06-07'),
        dateOfMeasurement: new Date('2018-06-07'),
        head: 47.5,
        length: 97.7,
        height: 144.7,
        weight: 60.2
      }]

      return knex('female').insert(females)
    });
};

const database = require("./database-connection");

module.exports = {
    list(){
        return database('male').select()
    },
    read(id){
        return database('male').where('id', id).first()
    },
    create(male){
        return database('male').insert(male).returning('*')
        .then(record => record[0])
    },
    update(id, male){
        return database('male').update(male).where('id', id).returning('*')
        .then(record => record[0])
    },
    delete(id){
        return database('male').where('id', id).del()
    }
};

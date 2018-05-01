const database = require("./database-connection");

module.exports = {
    list(){
        return database('female').select()
    },
    read(id){
        return database('female').where('id', id).first()
    },
    create(female){
        return database('female').insert(female).returning('*')
        .then(record => record[0])
    },
    update(id, female){
        return database('female').update(female).where('id', id).returning('*')
        .then(record => record[0])
    },
    delete(id){
        return database('female').where('id', id).del()
    }
};

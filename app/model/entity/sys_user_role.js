'use strict';
module.exports = app => {
    return {
        idUser: {
            name: 'idUser',
            type: app.Mongoose.Schema.ObjectId
        },
        idRole: {
            name: 'idRole',
            type: app.Mongoose.Schema.ObjectId
        },
    }
};
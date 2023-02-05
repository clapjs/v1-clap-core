'use strict';
module.exports = app => {
    return {
        idRole: {
            name: 'idRole',
            type: app.Mongoose.Schema.ObjectId
        },
        idDuty: {
            name: 'idDuty',
            type: app.Mongoose.Schema.ObjectId
        },
    }
};
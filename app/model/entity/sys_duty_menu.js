'use strict';
module.exports = app => {
    return {
        idDuty: {
            name: 'idDuty',
            type: app.Mongoose.Schema.ObjectId
        },
        idApplication: {
            name: 'idApplication',
            type: app.Mongoose.Schema.ObjectId
        },
        idMenu: {
            name: 'idMenu',
            type: app.Mongoose.Schema.ObjectId
        },
    }
};
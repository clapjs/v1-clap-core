'use strict';
module.exports = app => {
    return {
        idPage: {
            name: 'idPage',
            type: app.Mongoose.Schema.ObjectId
        },
        name: {
            name: 'name',
            type: String
        },
        type: {
            name: 'type',
            type: String
        },
        filter: {
            name: 'filter',
            type: Array
        },
    }
};
'use strict';
module.exports = app => {
    return {
        idApplication: {
            name: 'idApplication',
            type: app.Mongoose.Schema.ObjectId
        },
        idApplicationParams: {
            name: 'idApplicationParams',
            type: app.Mongoose.Schema.ObjectId
        },
        value: {
            name: 'value',
            type: String
        },
    }
};
'use strict';
module.exports = app => {
    return {
        idApplication: {
            name: 'idApplication',
            type: app.Mongoose.Schema.ObjectId
        },
        version: {
            name: 'String',
            type: String
        },
        order: {
            name: '排序',
            type: Number,
            default: 999
        },
    }
};
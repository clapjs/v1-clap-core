'use strict';
module.exports = app => {
    return {
        idPackage: {
            name: 'idPackage',
            type: app.Mongoose.Schema.ObjectId
        },
        clientHost: {
            name: 'clientHost',
            type: String
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
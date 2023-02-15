'use strict';
module.exports = app => {
    return {
        idApplication: {
            name: 'idApplication',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'cdp_application'
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
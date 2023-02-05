'use strict';
module.exports = app => {
    return {
        idBill: {
            name: 'idBill',
            type: app.Mongoose.Schema.ObjectId
        },
        workId: {
            name: 'workId',
            type: String
        },
        idPage: {
            name: 'idPage',
            type: app.Mongoose.Schema.ObjectId
        },
        idWorkflow: {
            name: 'idWorkflow',
            type: app.Mongoose.Schema.ObjectId
        },
    }
};
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
        description: {
            name: 'description',
            type: String
        },
        source: {
            name: 'source',
            type: String
        },
        target: {
            name: 'target',
            type: String
        },
        label: {
            name: 'label',
            type: String
        },
        idWorkflowMember: {
            name: 'idWorkflowMember',
            type: app.Mongoose.Schema.ObjectId
        },
        operationType: {
            name: '操作类型',
            type: String
        },
        operationAt: {
            name: '操作时间',
            type: Date
        },
        pointSigUser: {
            name: '指派人',
            type: app.Mongoose.Schema.ObjectId
        },
        idUser: {
            name: '操作人',
            type: app.Mongoose.Schema.ObjectId
        },
        memo: {
            name: '加签或改派备注',
            type: String
        },
    }
};
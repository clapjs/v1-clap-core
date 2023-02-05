'use strict';
module.exports = app => {
    return {
        name: {
            name: 'name',
            type: String
        },
        description: {
            name: 'description',
            type: String
        },
        billCode: {
            name: 'billCode',
            type: String
        },
        type: {
            name: 'type',
            type: String
        },
        idWorkflow: {
            name: 'idWorkflow',
            type: app.Mongoose.Schema.ObjectId
        },
        idWorkflowMember: {
            name: 'idWorkflowMember',
            type: app.Mongoose.Schema.ObjectId
        },
        idUser: {
            name: 'idUser',
            type: app.Mongoose.Schema.ObjectId
        },
        overdueDay: {
            name: '审批截止日期',
            type: Date
        },
        takeEffectTime: {
            name: 'takeEffectTime',
            type: Date
        },
    }
};
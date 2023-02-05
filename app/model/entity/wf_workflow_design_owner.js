'use strict';
module.exports = app => {
    return {
        idWorkflowMember: {
            name: 'idWorkflowMember',
            type: app.Mongoose.Schema.ObjectId
        },
        ownerType: {
            name: 'ownerType',
            type: String
        },
        idRole: {
            name: 'idRole',
            type: app.Mongoose.Schema.ObjectId
        },
        idDuty: {
            name: 'idDuty',
            type: app.Mongoose.Schema.ObjectId
        },
        idUser: {
            name: 'idUser',
            type: app.Mongoose.Schema.ObjectId
        },
        order: {
            name: '排序',
            type: Number,
            default: 999
        },
    }
};
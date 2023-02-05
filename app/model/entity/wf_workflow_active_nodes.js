'use strict';
module.exports = app => {
    return {
        workId: {
            name: 'workId',
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
    }
};
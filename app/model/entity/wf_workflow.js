'use strict';
module.exports = app => {
    return {
        idPage: {
            name: '所属页面',
            type: app.Mongoose.Schema.ObjectId
        },
        code: {
            name: '流程编码',
            type: String
        },
        name: {
            name: '流程名称',
            type: String
        },
        version: {
            name: '版本号',
            type: String
        },
    }
};
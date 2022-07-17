'use strict';

module.exports = app => {
    const attributes = {
        branchCode: {
            name: '部门编码',
            type: String
        },
        branchName: {
            name: '部门名称',
            type: String
        },
        p_id: {
            name: '上级部门',
            type: String,
            default: '0'
        },
        order: {
            name: '排序',
            type: Number,
            default: 999
        },
    };
    return app.clapMongooseSchema(attributes);
};
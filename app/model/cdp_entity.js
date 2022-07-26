'use strict';

module.exports = app => {
    const attributes = {
        idApplication: {
            name: '所属应用',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'cdp_application'
        },
        code: {
            name: '实体编码',
            type: String
        },
        name: {
            name: '实体名称',
            type: String
        },
        type: {
            name: '实体类型',
            type: String
        },
        intro: {
            name: '实体介绍',
            type: String
        },
        dsCollection: {
            name: '表名称',
            type: String
        },
        dsMiddleware: {
            name: '表事务',
            type: String
        },
        dsConfig: {
            name: '配置',
            type: Object
        },
        hasOwnerAttr: {
            name: '包含组织字段',
            type: Boolean
        },
        hasStateAttr: {
            name: '包含状态字段',
            type: Boolean
        },
        hasWorkflowAttr: {
            name: '包含审批字段',
            type: Boolean
        },
        order: {
            name: '排序',
            type: Number,
            default: 999
        },
    };
   return app.clapMongooseSchema(attributes,false)
};
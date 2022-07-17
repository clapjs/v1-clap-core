'use strict';

module.exports = app => {
    const attributes = {
        code: {
            name: '事件编码',
            type: String
        },
        name: {
            name: '事件名称',
            type: String
        },
        description: {
            name: '事件描述',
            type: String
        },
        idApplication: {
            name: '来源应用',
            type: app.mongoose.Schema.ObjectId,
            ref: 'cdp_application'
        },
        idPage: {
            name: '数据页面',
            type: app.mongoose.Schema.ObjectId,
            ref: 'cdp_page'
        },
        event: {
            name: '交换时机',
            type: String
        },
        url: {
            name: '交换接口',
            type: String
        },
        checkUrl: {
            name: '校验接口接口',
            type: String
        },
    };
    return app.clapMongooseSchema(attributes);
};
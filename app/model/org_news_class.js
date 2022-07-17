'use strict';

module.exports = app => {

    

    const attributes = {
        code: {
            name: '新闻分类编码',
            type: String
        },
        name: {
            name: '新闻分类名称',
            type: String
        },
        order: {
            name: '排序',
            type: Number,
            default: 999
        },
    };
    return app.clapMongooseSchema(attributes);
};
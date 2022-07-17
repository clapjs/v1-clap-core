'use strict';

module.exports = app => {
    const attributes = {
        idApplication: {
            name: '所属应用',
            type: app.mongoose.Schema.ObjectId
        },
        code: {
            name: '参数编码',
            type: String
        },
        name: {
            name: '参数名称',
            type: String
        },
        type: {
            name: '参数类型',
            type: String
        },
        range: {
            name: '参数可选值',
            type: Array
        },
        defaultValue: {
            name: '参数默认值',
            type: String
        },
        order: {
            name: '排序',
            type: Number,
            default: 999
        },
    };
   return app.clapMongooseSchema(attributes,false);
};
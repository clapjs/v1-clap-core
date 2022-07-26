'use strict';

module.exports = app => {
    const attributes = {
        idEntity: {
            name: '所属实体',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'cdp_entity'
        },
        p_id: {
            name: '上级节点',
            type: String,
            default: '0'
        },
        name: {
            name: '字段名称',
            type: String
        },
        field: {
            name: '字段',
            type: String
        },
        type: {
            name: '字段类型',
            type: String
        },
        refer: {
            name: '关联实体',
            type: String
        },
        childType: {
            name: '子实体类型',
            type: String
        },
        enums: {
            name: '枚举值域',
            type: Array
        },
        defaultValue: {
            name: '默认值',
            type: String
        },
        serial: {
            name: '自动编码',
            type: Boolean
        },
        serialPrefix: {
            name: '编码前缀',
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
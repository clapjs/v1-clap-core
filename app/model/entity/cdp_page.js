'use strict';
module.exports = app => {
    return {
        idApplication: {
            name: '所属应用',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'cdp_application'
        },
        code: {
            name: '页面编码',
            type: String
        },
        name: {
            name: '页面名称',
            type: String
        },
        type: {
            name: '页面类型',
            type: String
        },
        dsMode: {
            name: '数据源类型',
            type: String
        },
        dsUrl:{
            name: '自定义接口',
            type: String
        },
        dsControlType: {
            name: '管控类型',
            type: String,
            default: 'Global'
        },
        dsEntityType: {
            name: '实体类型',
            type: String
        },
        idEntity: {
            name: 'idEntity',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'cdp_entity'
        },
        pipeline: {
            name: 'pipeline',
            type: String
        },
        listConfig: {
            name: '列表配置',
            type: Object,
            default: {
                "mode": "Table"
            }
        },
        editConfig: {
            name: '表单配置',
            type: Object,
            default: {
                "mode": "Modal",
                "compact": false
            }
        },
        reportConfig: {
            name: '报表配置',
            type: Object
        },
        graphConfig: {
            name: '图标配置',
            type: Object
        },
        order: {
            name: '排序',
            type: Number,
            default: 999
        },
    }
};
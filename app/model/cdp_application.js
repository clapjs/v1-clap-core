'use strict';

module.exports = app => {
    const attributes = {
        idPackage: {
            name: '所属应用包',
            type: String
        },
        idApplicationGroup: {
            name: '所属应用分组',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'cdp_application_group'
        },
        name: {
            name: '应用名称',
            type: String
        },
        keyword: {
            name: '关键字',
            type: String
        },
        icon: {
            name: '应用图标',
            type: String
        },
        iconColor: {
            name: '图标背景',
            type: String
        },
        description: {
            name: '应用简介',
            type: String
        },
        version: {
            name: '版本',
            type: String,
            default: '0.0.1'
        },
        order: {
            name: '排序',
            type: Number,
            default: 999
        },
    };
    return app.clapMongooseSchema(attributes,false);
};
'use strict';
module.exports = app => {
    return {
        code: {
            name: '枚举编码',
            type: String
        },
        name: {
            name: '枚举名称',
            type: String
        },
        mode: {
            name: '枚举结构',
            type: String,
            default: 'Table',
        },
        type: {
            name: '枚举类型',
            type: String,
            default: 'String'
        },
        range: {
            name: '枚举值域',
            type: Array
        },
        order: {
            name: '排序',
            type: Number,
            default: 999
        },
    }
};
'use strict';
module.exports = app => {
    return {
        code: {
            name: '分组编码',
            type: String
        },
        name: {
            name: '分组名称',
            type: String
        },
        range: {
            name: '包含用户类型',
            type: Array
        },
        isPermit: {
            name: '是否控制权限',
            type: Boolean,
            default: true
        },
        order: {
            name: '排序',
            type: Number,
            default: 999
        },
    }
};
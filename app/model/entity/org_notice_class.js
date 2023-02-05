'use strict';
module.exports = app => {
    return {
        code: {
            name: '公告分类编码',
            type: String
        },
        name: {
            name: '公告分类名称',
            type: String
        },
        order: {
            name: '排序',
            type: Number,
            default: 999
        },
    }
};
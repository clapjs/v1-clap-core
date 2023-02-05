'use strict';
module.exports = app => {
    return {
        noticeClassCode: {
            name: '通知类型编码',
            type: String
        },
        noticeClassName: {
            name: '通知类型名称',
            type: String
        },
        memo: {
            name: '备注',
            type: String
        },
    }
};
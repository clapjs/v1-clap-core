'use strict';
module.exports = app => {
    return {
        telephone: {
            name: '手机号',
            type: String
        },
        response: {
            name: '回执',
            type: Object
        },
        sendParams: {
            name: '发送配置',
            type: Object
        },
        noticeStrDate: {
            name: '提醒消息频率控制字段',
            type: String
        },
    }
};
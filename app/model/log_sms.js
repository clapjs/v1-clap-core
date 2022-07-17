'use strict';

module.exports = app => {
    const attributes = {
        telephone: {
            name: '手机号',
            type: String
        },
        templateCode:{
            name: '模板号',
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
    };
    return app.clapMongooseSchema(attributes);
};

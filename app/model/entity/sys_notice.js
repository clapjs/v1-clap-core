'use strict';
module.exports = app => {
    return {
        noticeTitle: {
            name: '通知标题',
            type: String
        },
        noticeContent: {
            name: '通知内容',
            type: String
        },
        publishArea: {
            name: '发布区域',
            type: Array
        },
        idNoticeClass: {
            name: '通知类别id',
            type: app.Mongoose.Schema.ObjectId
        },
        publishType: {
            name: '发布类型',
            type: String
        },
        isEngine: {
            name: '是否底层公告',
            type: Boolean
        },
        idUser: {
            name: '用户',
            type: app.Mongoose.Schema.ObjectId
        },
    }
};
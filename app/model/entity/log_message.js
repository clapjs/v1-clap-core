'use strict';
module.exports = app => {
    return {
        idUser: {
            name: '被推送者',
            type: app.Mongoose.Schema.ObjectId
        },
        idOrganUser: {
            name: '被推送者',
            type: app.Mongoose.Schema.ObjectId
        },
        title: {
            name: '推送标题',
            type: String
        },
        content: {
            name: '推送内容',
            type: String
        },
        type: {
            name: '推送类型',
            type: String
        },
        event: {
            name: '推送事件编码',
            type: String
        },
        meta: {
            name: 'meta',
            type: Object,
            default: {}
        },
        isRead: {
            name: 'isRead',
            type: Boolean
        },
        isShow: {
            name: 'isShow',
            type: Boolean
        },
    }
};
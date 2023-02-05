'use strict';
module.exports = app => {
    return {
        userCode: {
            name: 'userCode',
            type: String
        },
        userName: {
            name: 'userName',
            type: String
        },
        userInfo: {
            name: '用户关联信息',
            type: Object,
            default: {}
        },
        userType: {
            name: '用户类型',
            type: String
        },
        userPwd: {
            name: 'userPwd',
            type: String
        },
        avatarColor: {
            name: 'avatarColor',
            type: String
        },
        avatar: {
            name: 'avatar',
            type: String
        },
    }
};
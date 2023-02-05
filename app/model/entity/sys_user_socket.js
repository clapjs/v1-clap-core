'use strict';
module.exports = app => {
    return {
        idUser: {
            name: '主表id',
            type: app.Mongoose.Schema.ObjectId
        },
        socket: {
            name: 'socket的id',
            type: String
        },
        device: {
            name: '设备类型',
            type: String
        },
    }
};
'use strict';
module.exports = app => {
    return {
        idDuty: {
            name: '职责id',
            type: app.Mongoose.Schema.ObjectId
        },
        idApplication: {
            name: '应用id',
            type: app.Mongoose.Schema.ObjectId
        },
        idMenu: {
            name: '组件id',
            type: app.Mongoose.Schema.ObjectId
        },
        idMenuButton: {
            name: '组件按钮id',
            type: app.Mongoose.Schema.ObjectId
        },
        order: {
            name: '排序',
            type: Number,
            default: 999
        },
    }
};
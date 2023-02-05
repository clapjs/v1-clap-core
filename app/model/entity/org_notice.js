'use strict';
module.exports = app => {
    return {
        idNewsClass: {
            name: '公告分类',
            type: app.Mongoose.Schema.ObjectId
        },
        title: {
            name: '标题',
            type: String
        },
        content: {
            name: '内容',
            type: String
        },
        idFiles: [{
            name: 'idFiles',
            type: app.Mongoose.Schema.ObjectId,
            ref: 'sys_file'
        }],
        order: {
            name: '排序',
            type: Number,
            default: 999
        },
    }
};